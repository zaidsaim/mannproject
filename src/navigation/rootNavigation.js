
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


useEffect(()=>{
   
    getData();
    
},[])




const getData =  async() => {
    let item =localStorage.getItem('items')
    let data=JSON.parse(item)
    
    setData(data)
    }

    return(
    <NavigationContainer>

        
    {data?.driverid === null ?  <AuthStack />: <AppStack />}

    </NavigationContainer>
    )
}









{/* {signedIn.response === null  ?  <AuthStack />: <AppStack />}*/}
{/*  {items?.driverid === null  ?  <AuthStack />: <AppStack />}*/}
{/*  {items?.driverid == undefined  ?  <AuthStack/>: <AppStack/>}*/}