import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    Animated
} from 'react-native';
import {COLORS,FONTS,SIZES,images,constants} from '../../constants'
import TextButton from '../components/TextButton';



const OnBoarding = ({navigation}) => {
    const scrollX=React.useRef(new Animated.Value(0)).current
    const flatListRef=React.useRef()
    const [currentIndex,setCurrentIndex]=React.useState(0)
    const onViewChangeRef=React.useRef(({viewableItems,changed})=>{
        setCurrentIndex(viewableItems[0].index)
    })

    const Dots=()=>{
        const dotPosition=Animated.divide(scrollX,SIZES.width)
        return(
            <View style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
            }}>
            {
                constants.onboarding_screens.map((item,index)=>{
                    const dotColor=dotPosition.interpolate({
                        inputRange:[index - 1 , index ,index + 1],
                        outputRange:[COLORS.red,COLORS.red,COLORS.red],
                        extrapolate:'clamp'
                    })

                    const dotWidth=dotPosition.interpolate({
                        inputRange:[index - 1 , index ,index + 1],
                        outputRange:[10,30,10],
                        extrapolate:'clamp'
                    })
                    return(
                        <Animated.View
                        key={`dot-${index}`}
                        style={{
                            borderRadius:5,
                            marginHorizontal:6,
                            width:dotWidth,
                            height:10,
                            backgroundColor:dotColor
                        }}
                        >
                        </Animated.View>
                    )
                   
                })
            }
            </View>
        )
    }

    
    function RenderHeaderLogo(){
        return(
            <View style={{
                position:'absolute',
                top:SIZES.height > 800 ? 50 :25,
              left:0,
              right:0,
              alignItems:'center',
              justifyContent:'center'
              }}>
              <Image source={images.logo_02}
             
                  resizeMode='contain'
                  style={{
                 width:SIZES.width * 0.5,
                 height:60
              }}
              />
            </View>
        )
      }
//Footer
      function renderFooter(){
        return(
            <View style={{
                height:100
            }}>
            <View style={{
                flex:1,
                justifyContent:'center'
            }}>
            <Dots/>
            </View>
            {
                currentIndex < constants.onboarding_screens.length - 1 &&
            
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:SIZES.padding,
                marginVertical:SIZES.padding,
                
                
            }}>
            <TextButton
            label='Skip'
            buttonContainerStyle={{
                backgroundColor:null
            }}
            labelStyle={{
                color:COLORS.darkGray2
            }}
            onPress={()=>navigation.replace('SignInScreen')}
            />
            
            <TextButton
            label='Next'
         buttonContainerStyle={{
             height:40,
             width:200,
             borderRadius:SIZES.radius,
             backgroundColor:'#24ada2'
         }}
         onPress={()=>{
         
                 flatListRef.current.scrollToIndex({
                     index:currentIndex+1,
                     Animated:true
                 })
           
                navigation.replace('SignInScreen')
            
         }}
            />
            </View>
        }
        {currentIndex == constants.onboarding_screens.length - 1 && 
        <View style={{
            paddingHorizontal:SIZES.padding,
            marginVertical:SIZES.padding
        }}>
        <TextButton
        label='Lets Get Started'
        buttonContainerStyle={{
            height:50,
            borderRadius:SIZES.radius,
            backgroundColor:'#24ada2'
        }}
        onPress={()=>navigation.navigate('SignInScreen')}
        />
        </View>
        }
            </View>
        )
    }
    
    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >
           
            <Animated.FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={constants.onboarding_screens}
            scrollEventThrottle={16}
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}
            onScroll={
                Animated.event(
                    [
                        {
                            nativeEvent:{contentOffset:{x:scrollX}}
                        }
                    ],
                    {useNativeDriver:false}
                )
            }
            onViewableItemsChanged={onViewChangeRef.current}
            keyExtractor={(item)=>`${item.id}`}
            renderItem={({item,index})=>{
                return(
                    <View style={{
                        width:SIZES.width
                    }}>
                    <View style={{flex:3}}>
                    <ImageBackground 
                    source={item.backgroundImage}
                    style={{
                        flex:3,
                        alignItems:'center',
                        justifyContent:'flex-end',
                        width:'100%',
                        height: index == 1 ? '92%' : '100%'
                    }}
                    >
                    <Image
                    source={item.bannerImage}
                    resizeMode='contain'
                    style={{
                        width:SIZES.width * 0.8,
                        height:SIZES.height * 0.7,
                        marginBottom:-SIZES.padding,
                        
                    }}
                    />
                    </ImageBackground>
                    </View>
                    <View style={{
                        flex:1,
                        marginTop:30,
                        alignItems:'center',
                        justifyContent:'center',
                        paddingHorizontal:SIZES.radius
                    }}>
                    <Text style={{...FONTS.h1,fontSize:25}}>
                    {item.title}
                    </Text>
                    <Text style={{
                    marginTop:SIZES.radius,
                    textAlign:'center',
                    color:COLORS.darkGray,
                    paddingHorizontal:SIZES.padding,
                    ...FONTS.body3
                    }}>
                    {item.description}
                    </Text>
                    </View>
                    </View>
                )
            }}
            
            />
            {renderFooter()}
        </View>
    )
}

export default OnBoarding;