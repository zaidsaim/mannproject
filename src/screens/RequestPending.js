import React,{useState,useEffect} from 'react'

import {View, Text, StyleSheet,TouchableOpacity,
         ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar,ActivityIndicator} from 'react-native';
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


const SCREEN_WIDTH = Dimensions.get('window').width

export default function RequestPending({navigation,route}){


    const items=JSON.parse(localStorage.getItem('items'))

    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [disabled,setDisabled]=useState(false)

  useEffect((
    getUser
  ),[])

  async function getUser() {
    try {
      const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=${items.driverid}&&status=L`);
    //   console.log(response.data);
      setData({data:response.data.Booking})
      setIsLoading(false)
    //   console.log('screen data',data);
    } catch (error) {
      console.error(error);
    }
  }



  




  // onPress={()=>navigation.navigate('Guestdetails',{data:item})}
// console.log('sajid bahi',data)

if(isLoading){
    return( 
      <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#0c9"/>
      </View>
  )}


    return(
        
    <View style ={styles.container}>
           
      <Header type='chevron-left' title='Request Pending' navigation={navigation}/>

    <View style={{backgroundColor:colors.white,}}>
    <View style={{flexDirection:'row',fontSize:25}} >
 
    <FlatList
    data={data.data}
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
<Divider width={2}/>
</TouchableOpacity>
    </>
    )}
    />
 
     </View>
     
  
        
       
    
       
        </View>

 
   
    </View>
    
    
    
    )}
   

    // <FlatList
    // data={data}
    // renderItem ={({item,index})=> (
    //     <Text>{item.Booking[0].guestname}</Text>
    // )}
    // keyExtractor={(item,index)=>index.toString()}
    // />

const styles = StyleSheet.create({
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
       },
    container:{
        flex:1,
        
      
       
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
    }


})