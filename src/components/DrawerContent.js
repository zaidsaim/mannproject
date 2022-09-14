import React, {useState,useContext,useEffect} from 'react';
import RequestPending from '../screens/RequestPending';
import Toast from 'react-native-toast-message';
import { Divider } from "@rneui/themed";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';


import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,

  } from '@react-navigation/drawer';

  import {
    Avatar,
    // Button,
    Icon
     } from 'react-native-elements'

import {colors} from '../global/styles'
import { SignInContext } from '../contexts/Contextapi';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import 'localstorage-polyfill'

export default function DrawerContent(props){

 
    const navigation  = useNavigation();
    

  const items=JSON.parse(localStorage.getItem('items'))


  
    const [item, setItem] = useState([]);
    const [data,setData]=useState(items)
   
    const [datas,setDatas]=useState([])
   const [loginid,setLoginid]=useState()
   const [rides,setRides]=useState([])
   const [syncitem,setSyncitem]=useState()

   
  

  console.log('eeeee',datas)

  useEffect(()=>{
// alertbooking()
// getData()
  },[])

  
  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

 

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


//   console.log('aleeeee',datas)

   async function alertbooking() {

    try {
         const items=JSON.parse(localStorage.getItem('items'))
      const response = await
       axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/newreservationalert?driverid=${items.driverid}`)
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




  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }






async function signOut() {

    try {
     let items=JSON.parse(localStorage.getItem('items'))
     console.log('locallllllllllllllllllll',items)
        const response = await 
        axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/logout/?driverid=${items.driverid}`
      );
      
      if(response.data.Responce === 1){
       
       
        localStorage.clear();
        // console.log('claerlocalDARATYTATA',localStorage.getItem('items'))
        navigation.navigate('SignInScreen')
       

      }
      console.log('responselogout=>',response.data.Responce);
      setData({data:response.data})
    
    }
     catch (error) {
      console.error(error);
    }
  }

 
 

         return(
            <>
             <View style ={styles.container}>
                 <DrawerContentScrollView {...props} >
                 <View style ={{backgroundColor:'#24ada2'}}>
                <View style = {{flexDirection:'row', alignItems:'center',
                                    paddingLeft:20,paddingVertical:10}}>
                    {/* <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {75}
                        source = {{uri:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"}}
         />*/}

                    <View style ={{marginLeft:10}}>
                        <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }} >{items?.drivername}</Text>
                        <Text style ={{color:colors.cardbackground,fontSize:14,marginVertical:10}} >{items?.driverid}</Text>
                    </View>

                </View>

              {/*}  <View style ={{flexDirection:'row',justifyContent:"space-evenly",paddingBottom:5}}>

                    <View style ={{flexDirection:'row', marginTop:0,}}>
                        <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}  >
                            <Text  style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>1</Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}} >My Favorites</Text>
                        </View>
                    </View>

                    <View style ={{flexDirection:'row', marginTop:0}}>
                         <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}  >
                            <Text  style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>0</Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}} ></Text>
                        </View>    
                    </View>

                </View>*/}
         </View>


               <View  style={{backgroundColor:'#27292b'}}>
             
               <DrawerItemList {...props} />
              
            
            
           
           <DrawerItem 
           label = "Rating"
           labelStyle={{color:'white'}}
           icon = {({color,size,focussed})=>(
               <Icon 
                   type ="material-community"
                   name = "receipt"
                   color ={focussed ? '#7cc' :'#24ada2'}
                   size ={size}
               
               />
           )}
           onPress={()=>props.navigation.navigate('RatingScreen')}
       />

                <DrawerItem 
                label = "MyRides"
              labelStyle={{color:'white'}}
                icon = {({color,size,focussed})=>(
                    <Icon 
                        type ="material-community"
                        name = "car-back"
                        color ={focussed ? '#7cc' :'#24ada2'}
                        size ={size}
                       
                        
                    />
                )}
                onPress={()=>alertbooking()}
            />

                <DrawerItem 
                label = "ExpenseReports"
                labelStyle={{color:'white',}}
                icon = {({color,size,focussed})=>(
                    <Icon 
                        type ="material-community"
                        name = "file-multiple-outline"
                        color ={focussed ? '#7cc' :'#24ada2'}
                        size ={size}
                    
                    />
                )}
                onPress={()=>props.navigation.navigate('ExpenseReports')}
            />
            <DrawerItem 
            label = "Support"
            labelStyle={{color:'white'}}
            icon = {({color,size,focussed})=>(
                <Icon 
                    type ="material-community"
                    name = "lifebuoy"
                    color ={focussed ? '#7cc' :'#24ada2'}
                    size ={size}
               
                />
            )}
            onPress={()=>props.navigation.navigate('Support')}
        />
        <DrawerItem 
        label = "RequestPending"
        labelStyle={{color:'white'}}
        icon = {({color,size,focussed})=>(
            <Icon 
                type ="material-community"
                name = "page-next-outline"
                color ={focussed ? '#7cc' :'#24ada2'}
                size ={size}
                
            />
        )}
        onPress={()=>props.navigation.navigate('RequestPending')}
    />

        <DrawerItem 
        label = "ChangePassword"
        labelStyle={{color:'white'}}
        icon = {({color,size,focussed})=>(
            <Icon 
                type ="material-community"
                name = "lock-outline"
                color ={focussed ? '#7cc' :'#24ada2'}
                size ={size}
            
            />
        )}
        onPress={()=>props.navigation.navigate('ChangePassword')}
    />

    <DrawerItem 
    label = "DriwerDetails"
    labelStyle={{color:'white'}}
    icon = {({color,size,focussed})=>(
        <Icon 
            type ="material-community"
            name = "human-child"
            color ={focussed ? '#7cc' :'#24ada2'}
            size ={size}
        
        />
    )}
    onPress={()=>props.navigation.navigate('DriwerDetails')}
/>

    </View>

            {/*<DrawerItem 
                    label = "Settings"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                />
                    */}


       





                   {/*} <View style={{backgroundColor:'#27292b'}}>
       <View style ={{borderTopWidth:1, borderTopColor:colors.grey5,backgroundColor:'#27292b'}}>
            <Text style ={styles.preferences}>Preferences</Text>

            <View style ={styles.switchText}>
                <Text style ={styles.darkthemeText}>Dark Theme</Text>
                <View style ={{ paddingRight:10}}>
                        <Switch 
                            trackColor = {{false: "#767577",true : "#81b0ff"}}
                            thumbColor = "#f4f3f4"
                        />
                </View>
            </View>

       </View>         



                </View>*/}
               
              <Divider/>
                <View style={{backgroundColor:'#27292b',  marginTop:30}}>
                <DrawerItem 
                    label = "Sign Out"
                    labelStyle={{color:'white'}}
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "logout-variant"
                            color ='#24ada2'
                            size ={size}
                         
                        />
                    )}
                    
                    onPress ={()=>{signOut()}} 
                />
                </View>
                </DrawerContentScrollView>  
                </View>
                </>
             
         )
     }
     





     const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#27292b'
        },

        avatar:{
            borderWidth:4,
            borderColor:colors.pagebackground
            
        },

        preferences:{
            fontSize: 16,
            color:'#27292b',
             paddingTop:10,
             paddingLeft:20,
        },

        switchText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20,
            paddingVertical:5,
            paddingRight:10
        },
        darkthemeText:{
            fontSize: 16,
            color:'#27292b',
             paddingTop:10,
             paddingLeft:0,
             fontWeight:"bold"
        }
        
    })




//     <DrawerItem 
               
//     label = "Bookings"
//     labelStyle={{color:'white'}}
//     icon = {({color,size,focussed})=>(
//         <Icon 
//             type ="material-community"
//             name = "receipt"
//             color ={focussed ? '#7cc' :'#24ada2'}
//             size ={size}
        
//         />
//     )}
//     onPress={()=>props.navigation.navigate('MyBookingScreen')}
// />







// <DrawerItem 
                 
// label = "Mybooking"
// labelStyle={{color:'white'}}
// icon = {({color,size,focussed})=>(
//     <Icon 
//         type ="material-community"
//         name = "receipt"
//         color ={focussed ? '#7cc' :'#24ada2'}
//         size ={size}
    
//     />
// )}
// onPress={()=>props.navigation.navigate('MyBookingScreen')}
// />