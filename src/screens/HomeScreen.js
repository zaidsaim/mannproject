import { View, Text ,ImageBackground,StyleSheet,Image,Alert,Dimensions} from 'react-native'
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Icon} from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {requestUserPermission,NotificationListner} from '../firebasemassage/notification_helper'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {

  const [rides,setRides]=useState([])
  const [data,setData]=useState()

// useEffect(()=>{
//   requestUserPermission()
//   NotificationListner()
// },[])


 
    
      
      useEffect(()=>{
        const item=JSON.parse(localStorage.getItem('items'))
        console.log('homesynsssssssssssssssssss data',item)
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
       const item = localStorage.getItem('items')
      let data=JSON.parse(item)
      console.log('alert data',data)
      const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/newreservationalert?driverid=${data.driverid}`)
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
    <View style={{flex:1 ,backgroundColor:'white'}}>
    <View style={{justifyContent:'flex-start',padding:20}}>
    <Text style={{fontSize:30,color:'black'}}>Welcome To Mann Travel</Text>
    </View>

    <View >
    <Image style={{height:'30%',width:'100%'}} resizeMode="cover" source={{uri:'https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1522661-B1-clr-1126-CURRENT.jpg;w=1200;h=802;mode=crop'}} />
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
<Image style={{height:50,width:100}} resizeMode='cover' source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6LIq1inY7JfpXzS3ev0zVgXZcnMZhTrP2Q&usqp=CAU'}}/>
<View style={{}}>
<Text style={{fontSize:16,color:'black'}}>My Rides</Text>
</View>
<View style={{}}>
<Icon 
type ="material-community"
name = "arrow-right"
color ='gray'
size ={25}
onPress={()=>alertbooking()}
style={{textAlign:'center',color:'white',alignSelf:'center',fontSize:16,color:'white',backgroundColor:'black',borderRadius:15}}
/></View>
</View>
<View>


<View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:10,textAlign:'center',}}>
<Image style={{height:50,width:100}} resizeMode='cover' source={{uri:'https://www.deepamcabs.com/images/welcome-img.webp'}}/>
<View style={{}}>
<Text style={{fontSize:16,color:'black'}}>ExpenseReports</Text>
</View>
<View style={{}}>
<Icon 
type ="material-community"
name = "arrow-right"
color ='gray'
size ={25}
onPress={()=>navigation.navigate('ExpenseReports')}
style={{textAlign:'center',color:'white',alignSelf:'center',fontSize:16,color:'white',backgroundColor:'black',borderRadius:15}}
/></View>
</View>
</View></View>
<View style={{backgroundColor:'#24ada2',marginHorizontal:30,height:windowHeight/6,justifyContent:'center',color:'white',height:40}}>
    <Text style={{justifyContent:'center',alignSelf:'center',color:'white',}} onPress={()=>navigation.navigate('MyBookingScreen')}>My BOOKING</Text>
    </View>
    
  
    </View>
    </>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  }
});