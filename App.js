import React from 'react'

import {View, Text, StyleSheet,StatusBar} from 'react-native'
import { COLORS } from './constants'
import  {SignInContextProvider}  from './src/contexts/authContext'
import { colors } from './src/global/styles'
import RootNavigator from './src/navigation/rootNavigation'







export default function App(){
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
  container: {flex:1}
})