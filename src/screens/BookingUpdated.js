import React,{useState,useEffect} from 'react'

import {View, Text, StyleSheet,TouchableOpacity,
         ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar} from 'react-native';
import { Icon} from 'react-native-elements'
import Countdown from 'react-native-countdown-component'
import HomeHeader from '../components/HomeHeader';
import {colors,paremeters} from '../global/styles';
import {filterData,restaurantsData} from '../global/Data'
import FoodCard from '../components/FoodCard';
import Guestdetails from './Guestdetails';
import axios from 'axios';



const SCREEN_WIDTH = Dimensions.get('window').width

export default function BookingUpdated({navigation}){


    const [data,setData]=useState([])

  useEffect((
    getUser
  ),[])

  async function getUser() {
    try {
      const response = await axios.get('http://52.66.67.209:8087/ords/tasp/mobile/getreservation/?driverid=00000230&&status=L');
    //   console.log(response);
      setData({data:response.data.Booking[0].guestname})
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }



    return(
        
    <View style ={styles.container}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor={colors.red}
             />

        <HomeHeader navigation ={navigation}/>
        <View style={{backgroundColor:colors.grey4,padding:20,}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
        <TouchableOpacity onPress={()=>getUser()}>
    
    <Text style={{fontSize:16,fontWeight:'bold',color:colors.red}} >Open</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('DropPoint')}>
    
    <Text style={{fontSize:16,fontWeight:'bold',color:colors.red}} >Complete</Text>
        </TouchableOpacity>
        
        <View style={{flexDirection:'row',justifyContent:'space-around',}} >
       <FlatList
        data={data}
        renderItem ={({item,index})=> (
            <Text>{item.Booking.bookingid}</Text>
        )}
        keyExtractor={(item,index)=>index.toString()}
        />
       
        </View>
    
       
    
        </View>
    </View>
 
   
    </View>
    
    
    
    )}
   

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:20
      
       
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