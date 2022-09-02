import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { windowWidth,windowHeight } from '../../utils/Dimension'
import { colors } from '../global/styles'
import {
  Icon
   } from 'react-native-elements'

export default function Formbutton({buttonTitle,type, ...rest}) {
    return (
      <TouchableOpacity {...rest} style={{width:'90%',height:windowHeight/15,alignItems:'center',justifyContent:'center',backgroundColor:'#24ada2',margin:20,borderRadius:45}}>
  <Text style={{fontSize:16,fontWeight:'bold',color:'white',fontStyle:'italic'}}>
  {buttonTitle}
 {/*} <Icon 
  type ="material-community"
  name = {type}
  color ='gray'
  size ={30}
 #0d7185
    />*/}
  </Text>
      </TouchableOpacity>
          
     
    )
}
