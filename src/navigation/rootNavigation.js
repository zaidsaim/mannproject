
import React,{useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { AuthStack } from './authStack';
import { AppStack } from './appStack';
import { SignInContext } from '../contexts/authContext';
import 'localstorage-polyfill'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootNavigator(){


    
// const {signedIn} = useContext(SignInContext)

  const [item,setItem]=useState()
  const [data,setData]=useState(null)






  const items=JSON.parse(localStorage.getItem('items'))
  // console.log('rootnavigationpage',items)


// const getData =  async() => {
//     let item =localStorage.getItem('items')
//     let data=JSON.parse(item)
    
//     setData(data)
//     }
console.log('rootnavigationpage',items)
console.log('rootnavigationpagedriiiiiiiiiiiiiiiver',items?.driverid)

    return(
    <NavigationContainer>

        
    {items ==  null ?  <AuthStack />: <AppStack />}

    </NavigationContainer>
    )
}









{/* {signedIn.response === null  ?  <AuthStack />: <AppStack />}*/}
{/*  {items?.driverid === null  ?  <AuthStack />: <AppStack />}*/}
{/*  {items?.driverid == undefined  ?  <AuthStack/>: <AppStack/>}*/}