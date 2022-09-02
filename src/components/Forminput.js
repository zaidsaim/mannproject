import React from 'react'
import { View, Text,TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Forminput({labelValue,placeholderText,iconType, ...rest}) {
    return (
        <View>
              <View>
            <AntDesign name={iconType} size={25} color='#666'/>
              </View>
            <TextInput 
            value={labelValue}
            placeholder={placeholderText}
            {...rest}
            style={{width:'90%',fontSize:16,borderBottomWidth:1,margin:20,backgroundColor:'white',fontStyle:'italic'}}
            numberOfLines={1}
            />
        </View>
    )
}
