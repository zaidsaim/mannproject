import { View, Text ,ImageBackground,StyleSheet,Image,Alert,Dimensions} from 'react-native'
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Icon} from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import Swiper from 'react-native-swiper'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {requestUserPermission,NotificationListner} from '../firebasemassage/notification_helper'



const wdth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {


  const items=JSON.parse(localStorage.getItem('items'))

  const [rides,setRides]=useState([])
  const [data,setData]=useState()
  const [datas,setDatas]=useState([])

  
// useEffect(()=>{
//   requestUserPermission()
//   NotificationListner()
// },[])


 
    
      
      useEffect(()=>{
        const items=JSON.parse(localStorage.getItem('items'))
        console.log('homesynsssssssssssssssssss data',items)
      },[])

     


  openTwoButtonAlert=()=>{
    Alert.alert(
      'Hey There!',
      'Successfully Ride found',
      [
        {text: 'Go', onPress: () => navigation.navigate('MyRides',{datas:datas})},
        {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }


  async function alertbooking() {

    try {
       // const items=JSON.parse(localStorage.getItem('items'))
       const items=JSON.parse(localStorage.getItem('items'))
    
      const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/newreservationalert?driverid=${items.driverid}`)
    //   console.log('drawer dataaaa',JSON.stringify(response.data))
      if(response.data.Responce === '000'){
        console.log('trueeeeeee')
        openTwoButtonAlert()
        // showToast()
    //    navigation.navigate('MyRides')
      }else{
        Alert.alert('No Ride found')
      }
         localStorage.setItem('rides',JSON.stringify(response.data.Booking))
      console.log('alert rieds data',rides);
      
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <>
    <View>
    <HomeHeader navigation={navigation}/>
    </View>
    <View style={{backgroundColor:'white',flex:1, flexDirection: "column", }}>
    <View style={{justifyContent:'flex-start',padding:20}}>
    <Text style={{fontSize:30,color:'black'}}>Welcome To Mann Travel</Text>
    </View>


    <Image style={{height:'20%',width:'100%'}} resizeMode="cover" source={{uri:'https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1522661-B1-clr-1126-CURRENT.jpg;w=1200;h=802;mode=crop'}} />
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
    </View>
   


    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,}}>
<Image style={{height:50,width:100}} resizeMode='cover' source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6LIq1inY7JfpXzS3ev0zVgXZcnMZhTrP2Q&usqp=CAU'}}/>
<View style={{}}>
<Text style={{fontSize:16,color:'black'}}>My Rides</Text>
</View>
<View style={{backgroundColor:'black',borderRadius:15,width:30,height:30,color:'white'}}>
<Icon 
type ="material-community"
name = "arrow-right"
color ='gray'
size ={25}
onPress={()=>alertbooking()}
style={{textAlign:'center',color:'white',alignSelf:'center',fontSize:16,color:'white',backgroundColor:'black',borderRadius:15}}
/>
</View>
</View>



<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
<Image style={{height:50,width:100}} resizeMode='cover' source={{uri:'https://www.deepamcabs.com/images/welcome-img.webp'}}/>
<View style={{}}>
<Text style={{fontSize:16,color:'black'}}>ExpenseReports</Text>
</View>
<View style={{backgroundColor:'black',borderRadius:15,width:30,height:30,color:'white'}}>
<Icon 
type ="material-community"
name = "arrow-right"
color ='gray'
size ={25}
onPress={()=>navigation.navigate('ExpenseReports')}
style={{textAlign:'center',color:'white',alignSelf:'center',fontSize:16,color:'white',backgroundColor:'black',borderRadius:15}}
/>
</View>
</View>



<View style={{flex:2,justifyContent:'center',marginBottom:20,marginTop:20}}>
    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
    <Image
    style={{width:'100%',height:'100%',resizeMode:'cover'}}
    source={require('../../asset/images/bus11.png')}/>
    <View style={styles.slide2}>
    <Image
    style={{width:'100%',height:'100%',resizeMode:'cover'}}
    source={require('../../asset/images/bus6.jpg')}/>
    </View>
    <View style={styles.slide3}>
    <Image
    style={{width:'100%',height:'100%',resizeMode:'cover'}}
    source={require('../../asset/images/bus8.png')}/>
    </View>
  </Swiper>
  </View>
  
  <View style={{backgroundColor:'#24ada2',marginHorizontal:30,justifyContent:'center',color:'white',height:40,marginBottom:20}}>
      <Text style={{justifyContent:'center',alignSelf:'center',color:'white',}} onPress={()=>navigation.navigate('MyBookingScreen')}>My BOOKING</Text>
      </View>

</View>

    </>
  )
}

export default HomeScreen


const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },




  wrapper: {
    autoplay:true
   
  },
  slide1: {
   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    showsButtons:false
    
  
  },
  slide2: {
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    
  },
  slide3: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});


// <View style={{backgroundColor:'#24ada2',marginHorizontal:30,justifyContent:'center',color:'white',height:40}}>
//     <Text style={{justifyContent:'center',alignSelf:'center',color:'white',}} onPress={()=>navigation.navigate('MyBookingScreen')}>My BOOKING</Text>
//     </View>