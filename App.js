import React, { useEffect,useState } from 'react'

import {View, Text, StyleSheet,StatusBar,ActivityIndicator} from 'react-native'
import { COLORS } from './constants'
import  {SignInContextProvider}  from './src/contexts/authContext'
import { colors } from './src/global/styles'
import RootNavigator from './src/navigation/rootNavigation'
import {requestUserPermission,NotificationListner} from './src/firebasemassage/notification_helper'






export default function App(){


  

useEffect(()=>{
  requestUserPermission()
  NotificationListner()
 
},[])



// if(isLoading){
//   return( 
//     <View style={styles.loader}> 
//       <ActivityIndicator size="large" color="#0c9"/>
//     </View>
// )}

  return(
    <SignInContextProvider>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.graystatus}
      />
 
        <RootNavigator/>
     
    </View>
    </SignInContextProvider> 
  
  )
}

const styles = StyleSheet.create({
  container: {flex:1},
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
})