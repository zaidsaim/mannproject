import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors, parameters,} from "../global/styles"

import {Icon} from 'react-native-elements'

export default function Header({title,type,navigation}){

    return(
        <View style ={styles.header}>
            <View> 
                <Icon 
                    type = "material-community"
                    name = {type}
                    color = {colors.white}
                    size ={25}
                    onPress ={()=>{navigation.goBack()}}
                />
                
            </View>
          
                    <Text style ={styles.headerText}>{title}</Text>
      

                    <View style ={{marginRight:15}}>
                    <Text></Text>
            </View>

        </View>
    )
}


//#0d7185
const styles = StyleSheet.create({
    header :{
        flexDirection:"row",
        backgroundColor:'#24ada2',
      padding:10,
      justifyContent:'space-between',
      alignItems:'center',
    
    
    },

    headerText:{
        color:colors.white,
        fontSize:16,
marginHorizontal:10
     
        
    
       

    },

})