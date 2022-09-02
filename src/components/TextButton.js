import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES,COLORS,FONTS } from '../../constants'

const TextButton = ({buttonContainerStyle,label,labelStyle,onPress,disabled,label2='',label2Style,}) => {
  return (
  
  <TouchableOpacity style={{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:COLORS.primary,
      ...buttonContainerStyle,
      
  }}
  disabled={disabled}
  onPress={onPress}>
  <Text style={{
      color:COLORS.white,
      ...FONTS.h3,
      ...labelStyle
  }}>
  {label}
  </Text>
  {
    label2 != '' && 
    <Text style={{
        flex:1,
        textAlign:'right',
        color:COLORS.white,
        ...FONTS.h3,
        ...label2Style
    }}>
    {label2}
    </Text>
}
  
  </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({})