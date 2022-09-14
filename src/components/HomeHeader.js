import React from 'react'

import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

export default function HomeHeader(){


    const navigation = useNavigation();
 const BadgeIcon = withBadge(0)(Icon)

//  const toggleDrawer = () => (
//     navigation.navigate.dispatch(DrawerActions.toggleDrawer())
//  )
  

    return(
    <View style ={styles.header}>

    <View style={{}}>
    
            <Icon 
                type = "material-community"
                name = "menu"
                color = {colors.cardbackground}
                size = {25}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}

            />
           
      
            </View>
       

        {/*<View style ={{alignItems:"center", justifyContent:"center", marginRight:15}}>
            <BadgeIcon 
                type ="material-community"
                name ="cart"
                size = {35}
                color ={colors.cardbackground}
            />
             
    </View>*/}

    {/* <Text style ={styles.headerText}>Bookings</Text>*/}
      

    <View style ={{marginRight:15}}>
    <Text></Text>
</View>
    </View>
    )
}
//#24ada2
const styles = StyleSheet.create({

    header:{
        flexDirection:'row',
        backgroundColor:'#24ada2',
        // height:parameters.headerHeight,
      height:40,
        justifyContent:'space-between',
        alignItems:'center',
     
        paddingHorizontal:15
      
    },
    headerText:{
        color:colors.white,
        fontSize:20,
marginHorizontal:10
     
        
    
       

    },
})