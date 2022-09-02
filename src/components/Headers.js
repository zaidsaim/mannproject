import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors, parameters,} from "../global/styles"

import {Icon} from 'react-native-elements'

export default function Headers({title,type,navigation}){

    return(
        <View style ={styles.header}>
            <View  style={{marginLeft:10}}> 
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


const styles = StyleSheet.create({
    header :{
        flexDirection:"row",
        backgroundColor:'#24ada2',
      height:50,
      justifyContent:'space-between',
      alignItems:'center',
    marginTop:20,
    
    
    },

    headerText:{
        color:colors.white,
        fontSize:16,
marginHorizontal:10
     
        
    
       

    },

})