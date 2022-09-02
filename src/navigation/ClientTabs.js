import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import ExpenseReports from '../screens/ExpenseReports';
import MyBooking from '../screens/MyBooking';
import MyAccountScreen from '../screens/MyAccountScreen';
import ChangePassword from '../screens/ChangePassword';
// import { ClientStack } from './clientStack';
import MyBookingScreen from '../screens/MyBookingScreen';
import DriwerDetails from '../screens/DriwerDetails';
import RequestPending from '../screens/RequestPending';
import { AppStack } from './appStack';

const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
    
        //  initialRouteName='HomeScreen'
                    tabBarOptions = {{
                        activeTintColor :'#24ada2',
                        
                    }}
                >
            <ClientTabs.Screen 
                name ="HomeScreen"
                component ={HomeScreen}
               
                options ={
                    {
                        tabBarLabel : "Home",
                        headerShown:false,
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />



            <ClientTabs.Screen 

            
            name ="RequestPending"
            component ={RequestPending}
            options ={
                {
                    tabBarLabel : "RequestPending",
                    headerShown:false,
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='view-list'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }
            }
            
            />
            
            
            
            <ClientTabs.Screen 
            name ="ChangePassword"
            component ={ChangePassword}
            options ={
                {
                    tabBarLabel : "My Account",
                    headerShown:false,
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='person'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }
            }
            
            />
          





   


        </ClientTabs.Navigator>
    )
}





// <ClientTabs.Screen 
// name ="ExpenseReports"
// component ={ExpenseReports}
// options ={
//     {
//         tabBarLabel : "ExpenseReports",
//         headerShown:false,
//         tabBarIcon: ({color,size})=>(
//             <Icon 
//                 name ='view-list'
//                 type = 'material'
//                 color ={color}
//                 size ={size}
//             />
//         )
//     }
// }

// />



// <ClientTabs.Screen 
// name ="ChangePassword"
// component ={ChangePassword}
// options ={
//     {
//         tabBarLabel : "My Account",
//         headerShown:false,
//         tabBarIcon: ({color,size})=>(
//             <Icon 
//                 name ='person'
//                 type = 'material'
//                 color ={color}
//                 size ={size}
//             />
//         )
//     }
// }

// />