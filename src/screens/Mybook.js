// import React,{useState,useEffect} from 'react'

// import {View, Text, StyleSheet,TouchableOpacity,
//          ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar,ActivityIndicator} from 'react-native';
// import { Icon} from 'react-native-elements'
// import Countdown from 'react-native-countdown-component'
// import HomeHeader from '../components/HomeHeader';
// import {colors,paremeters} from '../global/styles';
// import {filterData,restaurantsData} from '../global/Data'
// import FoodCard from '../components/FoodCard';
// import Guestdetails from './Guestdetails';
// import axios from 'axios';
// import { Divider } from "@rneui/themed";
// import 'localstorage-polyfill'
// // import PagerView from 'react-native-pager-view';

// const SCREEN_WIDTH = Dimensions.get('window').width

// export default function HomeScreen({navigation,route}){



//   const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')));

//     const [data,setData]=useState([])
//     const [isLoading,setIsLoading]=useState(true)
   
//     const [datas,setDatas]=useState([])
//     const [did,setDid]=useState('00000455')
//     console.log('diddata',did)

// useEffect(()=>{
// // setDid(did)
// },[])

// // useEffect(()=>{
  
// //   },[setDid])
  
//     // const [userlogindata,setUserlogindata]=useState(route.params.items)


    
 

// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('items'));
//   if (items) {
//    setItems(items);
//   }
  
// }, []);


// console.log('homedid',items)

//     const onPress=(item)=>{
     
//       // console.log('onpresssssssss',item)
//       if (item.status==0) {
//         navigation.navigate('',{data:item})
// } else if (item.status==1) {
//   navigation.navigate('Guestdetails',{data:item})

// } else if (item.status==2) {
 
//   navigation.navigate('GarageReading',{data:item})
// } else if (item.status==3) {
//   navigation.navigate('PickupReading',{data:item})


// } else if (item.status==4) {
//   navigation.navigate('DropPoint',{data:item})


// } 

//     }

//     // else if (item.status==5) {
//     //   navigation.navigate('Guestdetails',{data:item})
      
//     // }


//   useEffect((
//     getUser
//   ),[])
//  // http://52.66.67.209:8087/ords/tasp/mobile/expenses?driverid=00000230
//   async function getUser() {
//     try {
//       const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=${did}&status=D`);
//       // console.log('screen data',response.data);
   
//       setData({data:response.data.Booking})
//       setIsLoading(false)
//       console.log('screen data',data);
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   useEffect((
//     completeUser
//   ),[])

// console.log('log data',items)


//   async function completeUser() {
//     try {
//       const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=${did}&&status=L`)
      
//     //   console.log(response.data);

//       setDatas({datas:response.data.Booking})
  
//       console.log('complete data',datas);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  




  
// // console.log('sajid bahi',data)

// if(isLoading){
//     return(
//       <View style={styles.preloader}>
//         <ActivityIndicator size="large" color="#9E9E9E"/>
//       </View>
//     )
//   }    


//     return(
        
//     <View style ={styles.container}>
//             <StatusBar
//                 translucent
//                 barStyle="light-content"
//                 backgroundColor={colors.red}
//              />

//         <HomeHeader navigation ={navigation}/>
     

//         <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#333538',padding:10,}}>
//         <TouchableOpacity onPress={()=>getUser()} >
//     <Text style={{fontSize:16,fontWeight:'bold',color:'white'}} >Open</Text>
//     </TouchableOpacity>

//     <TouchableOpacity  onPress={()=>{completeUser()}}>
//     <View> 
//     <Text style={{fontSize:16,fontWeight:'bold',color:'white'}} >Complete</Text>
   
//     </View>
//     </TouchableOpacity>
//     </View>


//     <View style={{backgroundColor:colors.white,padding:10}}>
//     <View style={{flexDirection:'row',marginTop:10,fontSize:25}} >
 
//     <FlatList
//     data={data.data}
//     keyExtractor={item => item.id}
  
//     renderItem={({item})=>(
//         <>
//         <TouchableOpacity onPress={()=>onPress(item)}>
//         <View style={{backgroundColor:colors.grey4,padding:10,}}>
//         <TouchableOpacity >
//     <Text style={{fontSize:16,fontWeight:'bold',color:colors.lightBlue}} >{item.servicestartdate}</Text>
//     </TouchableOpacity>
//     </View>
//       <View style={{marginHorizontal:5,padding:5,fontSize:25,paddingVertical:20}}>
//        <View style={{flexDirection:'row',justifyContent:'space-between',fontSize:25}}>
//         <Text style={{color:colors.grey2,fontSize:16}}>Bookedby</Text>
//         <Text style={{color:colors.lightBlue,fontSize:16}}>{item.bookedby}</Text>
//         </View>
//         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//         <Text style={{color:colors.grey2,fontSize:16}}>Guestcontactno</Text>
//         <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestcontactno}</Text>
//         </View>
//         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//         <Text style={{color:colors.grey2,fontSize:16}}>Guestname</Text>
//     <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestname}</Text>
//     </View>
//     <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Companys</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.companys}</Text>
// </View>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Rm</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.rm}</Text>
// </View>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Note</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.note}</Text>
// </View>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Payment status</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.payment_status}</Text>
// </View>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Reservation no</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.reservationid}</Text>
// </View>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Time</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuptime}</Text>
// </View>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Point</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
// </View>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//     <Text style={{color:colors.grey2,fontSize:16}}>Drop off Point</Text>
// <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
// </View>

// </View>
// <Divider width={2}/>
// </TouchableOpacity>
//     </>
//     )}
//     />
 
//      </View>
     
  
        
       
    
       
//         </View>

 
   
//     </View>
    
    
    
//     )}
   

//     // <FlatList
//     // data={data}
//     // renderItem ={({item,index})=> (
//     //     <Text>{item.Booking[0].guestname}</Text>
//     // )}
//     // keyExtractor={(item,index)=>index.toString()}
//     // />

// const styles = StyleSheet.create({
//     loader:{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff"
//        },
//     container:{
//         flex:1,
//         paddingTop:15
//     },
//     deliveryButton:{
//         paddingHorizontal:20,
//          borderRadius:15,
//          paddingVertical:5
//     },

//     deliveryText:{
//         marginLeft:5,
//         fontSize:16
//     },

//     filterView:{flexDirection:"row" ,
//                  alignItems:"center", 
//                  justifyContent:"space-evenly",
//                  marginHorizontal:10,
//                  marginVertical:10
//                 },

//     clockView:{flexDirection:"row",
//                 alignItems:'center',
//                 marginLeft:20,
//                 backgroundColor:colors.cardbackground,
//                 borderRadius:15,
//                 paddingHorizontal:5,
//                 marginRight:20
//              },
//     addressView:{flexDirection:"row",
//                  backgroundColor:colors.grey5,
//                  borderRadius:15,
//                  paddingVertical:3,
//                  justifyContent:"space-between",
//                  paddingHorizontal:20
//                 },

//     headerText:{
//         color:colors.grey2,
//         fontSize:24,
//         fontWeight:"bold",
//         paddingLeft:10,
//     },
//     headerTextView:{
//         backgroundColor:colors.grey5,
//         paddingVertical:3,
//     },

//     smallCard :{
//         borderRadius:30,
//         backgroundColor:colors.grey5,
//         justifyContent:"center",
//         alignItems:'center',
//         padding:5,
//         width:80,
//         margin:10,
//         height:100
//     },

//     smallCardSelected:{
//         borderRadius:30,
//         backgroundColor:colors.buttons,
//         justifyContent:"center",
//         alignItems:'center',
//         padding:5,
//         width:80,
//         margin:10,
//         height:100
//     },

//     smallCardTextSected :{
//         fontWeight:"bold",
//         color:colors.cardbackground
//     },

//     smallCardText :{
//         fontWeight:"bold",
//         color:colors.grey2
//     },

//     floatButton:{
//         position:'absolute',
//         bottom:10,right:15,
//         backgroundColor:'white',
//         elevation:10,
//         width:60,height:60,
//         borderRadius:30,
//         alignItems:'center'
//     },  preloader: {
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         position: 'absolute',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }


// })









import React,{useState,useEffect} from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import {View, Text, StyleSheet,TouchableOpacity,
         ScrollView,FlatList,Pressable, Image, StatusBar,ActivityIndicator,useWindowDimensions,AsyncStorage} from 'react-native';
import { Icon} from 'react-native-elements'
import Countdown from 'react-native-countdown-component'
import HomeHeader from '../components/HomeHeader';
import {colors,paremeters} from '../global/styles';
import {filterData,restaurantsData} from '../global/Data'
import FoodCard from '../components/FoodCard';
import Guestdetails from './Guestdetails';
import axios from 'axios';
import { Divider } from "@rneui/themed";
import Header from '../components/Header';
import Headers from '../components/Headers';
// import PagerView from 'react-native-pager-view';
import 'localstorage-polyfill'



const Mybook = ({navigation,route}) => {


  const items=JSON.parse(localStorage.getItem('items'))

  // console.log('behinddata',items)

    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [datas,setDatas]=useState([])
    const [refreshing, setRefreshing] = useState(true);
    // const [user,setUser]=useState(JSON.parse(localStorage.getItem('items')))
  const [user,setUser]=useState([])

  useEffect(()=>{
   
  
  },[])

  useEffect(()=>{
   
    getUser()
  },[])
   
  useEffect(()=>{
    completeUser()

  },[])

 

useEffect(()=>{
  const items=JSON.parse(localStorage.getItem('items'))
  console.log('homescreen',items)
},[])


  
 
     
      // localStorage.setItem('user', JSON.stringify(user))

  
      console.log('userdatass',user)
     
      // localStorage.setItem('user', JSON.stringify(user))

    const onPress=(item)=>{
     
            // console.log('onpresssssssss',item)
            if (item.status == 0) {
              navigation.navigate('Guestdetails',{data:item})
            } 
            else if (item.status == 1) {
              navigation.navigate('GarageReading',{data:item})
            
            }   
           else if (item.status == 2) {
        navigation.navigate('PickupReading',{data:item})
      
      }   
      else if (item.status == 3) {
       navigation.navigate('DropPoint',{data:item})
      } else if (item.status == 4) {
         navigation.navigate('RatingScreen',{data:item})
    
      } 
      
        }
      
    // else if (item.status==5) {
    //     navigation.navigate('Guestdetails',{data:item})
            
    //   }
  //   Cleardata=()=>(
  //     localStorage.clear()
  
  // )





  // useEffect(()=>{
  //   getUser()
  // },[])

  
  async function getUser() {
   
    // const items=JSON.parse(localStorage.getItem('items'))
   
  
    try {
      const items=JSON.parse(localStorage.getItem('items'))
      const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=${items.driverid}&status=D`);
      console.log('GETDATA',response.data);
      setRefreshing(false);
      localStorage.setItem('user', JSON.stringify(response.data.Booking))
      setData({data:response.data.Booking})
      // console.log('new user ',user);
     
    // setIsLoading(false)
 
    // console.log('screen data',data);
    } catch (error) {
      console.error(error);
    }
  }





  async function completeUser() {
    console.log('itemsdtaaaa',items);
    const items=JSON.parse(localStorage.getItem('items'))
    try {
      const items=JSON.parse(localStorage.getItem('items'))
      const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=${items.driverid}&&status=L`)
      if(response.data.Responce === '000') {
        setDatas({datas:response.data.Booking})
        console.log('complete datassss',datas);
      }    
    // setIsLoading(false)
  
      console.log('complete data',datas.datas);
    } catch (error) {
      console.error(error);
    }
  }
  
//    <TouchableOpacity onPress={()=>navigation.navigate('Guestdetails',{data:item})}>



  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
    <FlatList
      data={data.data}
      keyExtractor={item => item.id}
    
      renderItem={({item})=>(
          <>
          <TouchableOpacity onPress={()=>onPress(item)}>
          <View style={{backgroundColor:colors.grey4,padding:10,}}>
        
      <Text style={{fontSize:16,fontWeight:'bold',color:colors.lightBlue}} >{item.servicestartdate}</Text>
      
      </View>
   
      <View style={{flexDirection:'row',justifyContent:'space-between',fontSize:25}}>
       <Text style={{color:colors.grey2,fontSize:16}}>Status</Text>
       <Text style={{color:colors.lightBlue,fontSize:16}}>{item.status}</Text>
       </View>
        <View style={{marginHorizontal:5,padding:5,fontSize:25,paddingVertical:20}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',fontSize:25}}>
          <Text style={{color:colors.grey2,fontSize:16}}>Bookedby</Text>
          <Text style={{color:colors.lightBlue,fontSize:16}}>{item.bookedby}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <Text style={{color:colors.grey2,fontSize:16}}>Guestcontactno</Text>
          <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestcontactno}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <Text style={{color:colors.grey2,fontSize:16}}>Guestname</Text>
      <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestname}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Companys</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.companys}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Rm</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.rm}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Note</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.note}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Payment status</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.payment_status}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Reservation no</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.reservationid}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Time</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuptime}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Point</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Drop off Point</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
  </View>
  </View>
  </TouchableOpacity>
  </>
      )}
      />
      </View>
  );
  

  const SecondRoute = () => (
    
    <View style={{ flex: 1, backgroundColor: 'white' }}>
    <FlatList
      data={datas.datas}
      keyExtractor={item => item.id}
    
      renderItem={({item})=>(
          <>
          <TouchableOpacity>
          <View style={{backgroundColor:colors.grey4,padding:10,}}>
          <TouchableOpacity >
      <Text style={{fontSize:16,fontWeight:'bold',color:colors.lightBlue}} >{item.servicestartdate}</Text>
      </TouchableOpacity>
      </View>
        <View style={{marginHorizontal:5,padding:5,fontSize:25,paddingVertical:20}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',fontSize:25}}>
          <Text style={{color:colors.grey2,fontSize:16}}>Booked By</Text>
          <Text style={{color:colors.lightBlue,fontSize:16}}>{item.bookedby}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <Text style={{color:colors.grey2,fontSize:16}}>Guestcontactno</Text>
          <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestcontactno}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <Text style={{color:colors.grey2,fontSize:16}}>Guestname</Text>
      <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestname}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Companys</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.companys}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Rm</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.rm}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Note</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.note}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Payment status</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.payment_status}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Reservation no</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.reservationid}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Time</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuptime}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Point</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:colors.grey2,fontSize:16}}>Drop off Point</Text>
  <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
  </View>
  </View>
  </TouchableOpacity>
  </>
      )}
      />
      </View>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  


  


 




  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Open' ,},
    { key: 'second', title: 'Completed' },
  
  ]);


  // if(isLoading){
  //   return(
  //     <View style={styles.preloader}>
  //       <ActivityIndicator size="large" color="#9E9E9E"/>
  //     </View>
  //   )
  // }    
// <Headers type='menu'  title='MyBooking' navigation={navigation}/>

  return (
    <>

    <View>
              <StatusBar
                  translucent
                 barStyle="light-content"
                  backgroundColor={colors.gray}
                />
       </View>
       <Headers type='menu'  title='MyBooking' navigation={navigation}/>
    <TabView
   
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      navigation={navigation}
    />
    </>
  )
}

export default Mybook

const styles = StyleSheet.create({
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
       },
    container:{
        flex:1,
        paddingTop:15
    },
    deliveryButton:{
        paddingHorizontal:20,
         borderRadius:15,
         paddingVertical:5
    },

    deliveryText:{
        marginLeft:5,
        fontSize:16
    },

    filterView:{flexDirection:"row" ,
                 alignItems:"center", 
                 justifyContent:"space-evenly",
                 marginHorizontal:10,
                 marginVertical:10
                },

    clockView:{flexDirection:"row",
                alignItems:'center',
                marginLeft:20,
                backgroundColor:colors.cardbackground,
                borderRadius:15,
                paddingHorizontal:5,
                marginRight:20
             },
    addressView:{flexDirection:"row",
                 backgroundColor:colors.grey5,
                 borderRadius:15,
                 paddingVertical:3,
                 justifyContent:"space-between",
                 paddingHorizontal:20
                },

    headerText:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3,
    },

    smallCard :{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardTextSected :{
        fontWeight:"bold",
        color:colors.cardbackground
    },

    smallCardText :{
        fontWeight:"bold",
        color:colors.grey2
    },

    floatButton:{
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
    },  preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
      }



})



//    <TouchableOpacity onPress={()=>navigation.navigate('Guestdetails',{data:item})}>














// import React,{useState,useEffect} from 'react'
// import { TabView, SceneMap } from 'react-native-tab-view';
// import {View, Text, StyleSheet,TouchableOpacity,
//          ScrollView,FlatList,Pressable, Image, StatusBar,ActivityIndicator,useWindowDimensions,AsyncStorage} from 'react-native';
// import { Icon} from 'react-native-elements'
// import Countdown from 'react-native-countdown-component'
// import HomeHeader from '../components/HomeHeader';
// import {colors,paremeters} from '../global/styles';
// import {filterData,restaurantsData} from '../global/Data'
// import FoodCard from '../components/FoodCard';
// import Guestdetails from './Guestdetails';
// import axios from 'axios';
// import { Divider } from "@rneui/themed";
// import Header from '../components/Header';
// import Headers from '../components/Headers';
// // import PagerView from 'react-native-pager-view';
// import 'localstorage-polyfill'



// const MyBookingScreen = ({navigation,route}) => {



//   // console.log('behinddata',items)

//     const [data,setData]=useState([])
//     const [isLoading,setIsLoading]=useState(true)
//     const [datas,setDatas]=useState([])
//     // const [user,setUser]=useState(JSON.parse(localStorage.getItem('items')))
//   const [user,setUser]=useState([])



//   const items=JSON.parse(localStorage.getItem('items'))

  
//       console.log('userdatass',user)
     
//       // localStorage.setItem('user', JSON.stringify(user))

//     const onPress=(item)=>{
     
//             // console.log('onpresssssssss',item)
//             if (item.status == 0) {
//               navigation.navigate('Guestdetails',{data:item})
//             } 
             
//            else if (item.status == 1) {
//         navigation.navigate('GarageReading',{data:item})
      
//       }   
//       else if (item.status == 2) {
//        navigation.navigate('PickupReading',{data:item})
//       } else if (item.status == 3) {
//          navigation.navigate('DropPoint',{data:item})
//       } 
//       else if (item.status == 4) {
//         navigation.navigate('RatingScreen',{data:item})
     
     
//      } 
//         }
      
//     // else if (item.status==5) {
//     //     navigation.navigate('Guestdetails',{data:item})
            
//     //   }
//   //   Cleardata=()=>(
//   //     localStorage.clear()
  
//   // )





//   // useEffect(()=>{
//   //   getUser()
//   // },[])

  
//   async function getUser() {
   
//     // const items=JSON.parse(localStorage.getItem('items'))
//     console.log('hhhhhhhh',items)
//     try {
//       const items=JSON.parse(localStorage.getItem('items'))
//       const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=${items.driverid}&status=D`);
//       console.log('GETDATA',response.data);
//       localStorage.setItem('user', JSON.stringify(response.data.Booking))
//       setData({data:response.data.Booking})
//       // setUser({user:response.data.Booking})
     
   
//     // setIsLoading(false)
 
//     console.log('screen data',data);
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   useEffect(()=>{
   
//     getUser()
//   },[])
   
//   useEffect(()=>{
//     completeUser()

//   },[])



//   async function completeUser() {
//     console.log('itemsdtaaaa',items);
//     try {
//       const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=${items.driverid}&&status=L`)
//       if(response.data.Responce === '000') {
//         setDatas({datas:response.data.Booking})
//         console.log('complete datassss',datas);
//       }    
//     // setIsLoading(false)
  
//       console.log('complete data',datas.datas);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
// //    <TouchableOpacity onPress={()=>navigation.navigate('Guestdetails',{data:item})}>



// //servicestartdate


 



//     return(
    
//       <>
//       <View>
//       <Header type='chevron-left' title='Pleae Select a Job' navigation={navigation}/>
//       </View>
       
  
    
  
  
//       <View style={{backgroundColor:colors.white,padding:10}}>
//       <View style={{flexDirection:'row',marginTop:10,fontSize:25}} >
   
//       <FlatList
//       data={data.data}
//       keyExtractor={item => item.id}
    
//       renderItem={({item})=>(
//           <>
//           <TouchableOpacity  onPress={()=>onPress(item)}>
         
//           <View style={{backgroundColor:colors.grey4,padding:10,}}>
//           <TouchableOpacity>
//       <Text style={{fontSize:16,fontWeight:'bold',color:colors.lightBlue}} >{item.servicestartdate}</Text>
//       </TouchableOpacity>
//       </View>
//       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Status</Text>
//       <Text style={{color:colors.lightBlue,fontSize:16}}>{item.status}</Text>
//       </View>
//         <View style={{marginHorizontal:5,padding:5,fontSize:25,paddingVertical:20}}>
//          <View style={{flexDirection:'row',justifyContent:'space-between',fontSize:25}}>
//           <Text style={{color:colors.grey2,fontSize:16}}>Bookedby</Text>
//           <Text style={{color:colors.lightBlue,fontSize:16}}>{item.bookedby}</Text>
//           </View>
//           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//           <Text style={{color:colors.grey2,fontSize:16}}>Guestcontactno</Text>
//           <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestcontactno}</Text>
//           </View>
//           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//           <Text style={{color:colors.grey2,fontSize:16}}>Guestname</Text>
//       <Text style={{color:colors.lightBlue,fontSize:16}}>{item.guestname}</Text>
//       </View>
//       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Companys</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.companys}</Text>
//   </View>
//   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Rm</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.rm}</Text>
//   </View>
//   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Note</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.note}</Text>
//   </View>
//   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Payment status</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.payment_status}</Text>
//   </View>
//   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Reservation no</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.reservationid}</Text>
//   </View>
//   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Time</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuptime}</Text>
//   </View>
//   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Pick Up Point</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
//   </View>
//   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//       <Text style={{color:colors.grey2,fontSize:16}}>Drop off Point</Text>
//   <Text style={{color:colors.lightBlue,fontSize:16}}>{item.pickuppoint}</Text>
//   </View>
  
//   </View>
//   <Divider width={2}/>
//   </TouchableOpacity>
//       </>
//       )}
//       />
   
//        </View>
       
    
          
         
      
         
//           </View>
  
   
     
    
      
//           </>
      
    
      
 
//    )
  
//         }  
      
  
// export default MyBookingScreen



    // const styles = StyleSheet.create({
    
    //   preloader: {
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     position: 'absolute',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    //   }
    // })
    
