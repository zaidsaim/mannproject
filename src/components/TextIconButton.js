import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS,SIZES,FONTS } from '../../constants'


const TextIconButton = ({containerStyle,
      label,
      labelStyle,
      icon,
      iconPosition,
      iconStyle,
      onPress,

       }) => {
      return (
  <TouchableOpacity style={{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      ...containerStyle,
 
  }}
  onPress={onPress}>
{
    iconPosition == 'LEFT'  && 
    <Image
    source={icon}
    style={{
        ...styles.image,
        ...iconStyle
    }}
 
    />
}
<Text style={{
    ...labelStyle,
    ...FONTS.body3
}}>
{label}

</Text>
{
    iconPosition == 'RIGHT'  && 
    <Image
    source={icon}
    style={{
        ...styles.image,
        ...iconStyle
    }}
 
    />
}
  </TouchableOpacity>
  )
}

export default TextIconButton

const styles = StyleSheet.create({
    image:{
        marginLeft:5,
        height:20,
        width:20,
        tintColor:COLORS.black
    }
})