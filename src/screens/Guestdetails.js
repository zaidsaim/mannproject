import { StyleSheet, Text, View ,} from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../components/Headers'
import Formbutton from '../components/Formbutton'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../global/styles'
import { Divider } from "@rneui/themed";


const Guestdetails = ({navigation,route}) => {


// const [userdetails,setUserdetails]=useState(route.params.data)
const [isSelected,setIsSelected]=useState(false)

const user=JSON.parse(localStorage.getItem('user'))



// useEffect(()=>{
//   //  console.log('details data',route.params.data)
//    setUserdetails(route.params.data)
// },[])

// useEffect(()=>{
 
// // console.log('dataaaaaaaa',userdetails)
// },[setUserdetails])



  return (
    <>
    <View>
   <Headers  type='chevron-left'  title='Details' navigation={navigation} />
   </View>
  
    <ScrollView style={{backgroundColor:'white',paddingTop:10,backgroundColor:'white'}}>
    <View style={{padding:10,marginHorizontal:10,paddingVertical:10}}>
    <Text style={{fontSize:20,color:colors.lightBlue}}>GuestDetails</Text>
    </View>
    <View style={{padding:10,marginHorizontal:5,paddingVertical:10}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
    <Text style={{color:colors.grey3,fontSize:16}}>Guest Name</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].guestname}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:colors.grey3,fontSize:16}}>Contact No</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].guestcontactno}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:colors.grey3,fontSize:16}}>R.M</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].rm}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:colors.grey3,fontSize:16}}>Payment Status</Text>
    <Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].payment_status}</Text>
    </View>
    <Divider width={2} style={{marginTop:10}}/>


    </View>
    <View style={{padding:10,marginHorizontal:10}}>
    <Text style={{fontSize:20,color:colors.lightBlue}}>BookingDetails</Text>
    </View>


<View style={{padding:10,marginHorizontal:5}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
<Text style={{color:colors.grey3,fontSize:16}}>Starting Time</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].startingtime}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Pick up Time</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].pickuptime}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Pick up Point</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].pickuppoint}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Service Type</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].servicetype}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Tour Program</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].tourprogram}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Flight Code</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].flightcode}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Drop off Point</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].dropoffpoint}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Flight Time</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].flighttime}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Flight Arrival At</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].flightarrivalat}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Note</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].note}</Text>
</View>
<Divider width={2} style={{marginTop:10}}/>


<View style={{marginTop:20}}>
<Text style={{fontSize:20,color:colors.lightBlue}}>Booking Reference</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:colors.grey3,fontSize:16}}>Bill to</Text>
<Text style={{color:colors.lightBlue,fontSize:16}}>{user[0].billto}</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate('GarageReading')} style={{marginTop:50,marginBottom:100}}>
<View style={{backgroundColor:'#24ada2',marginHorizontal:30,justifyContent:'center',color:'white',height:40}}>
<Text style={{justifyContent:'center',alignSelf:'center',color:'white',}}>START</Text>
</View>
    </TouchableOpacity>
    </View>
</ScrollView>
   </>

   
  )
}

export default Guestdetails

const styles = StyleSheet.create({})

//<Text>{userdetails.guestname}</Text>