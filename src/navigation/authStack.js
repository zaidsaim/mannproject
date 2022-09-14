import React ,{useEffect} from  'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SignInScreen from '../screens/authScreens/SignInScreen';
import OnBoarding from '../screens/OnBoarding'
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import DriwerDetails from '../screens/DriwerDetails';
import Guestdetails from '../screens/Guestdetails';
import RootClientTabs from './ClientTabs';
import DrawerNavigator from './DrawerNavigator';
import RatingScreen from '../screens/RatingScreen';
import ExpenseReports from '../screens/ExpenseReports';
import Support from '../screens/Support';
import AddEspensesScreen from '../screens/AddEspensesScreen';
import AddExpenses from '../screens/AddExpenses';
import MyBookingScreen from '../screens/MyBookingScreen';
import GarageReading from '../screens/GarageReading';
import PickupReading from '../screens/PickupReading';
import DropPoint from '../screens/DropPoint';
import { SignatureScreen } from '../screens/SignatureScreen';
import MyRides from '../screens/MyRides';
import Mybook from '../screens/Mybook'
import {requestUserPermission,NotificationListner} from '../firebasemassage/notification_helper'

const Auth = createStackNavigator();

export function AuthStack(){





    return(
        <Auth.Navigator>
             {/*<Auth.Screen 
                        name ="SignInWelcomeScreen"
                        component = {SignInWelcomeScreen}
                        options ={{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />*/}

                    
                   {/* <Auth.Screen 
                    name ="OnBoarding"
                    component = {OnBoarding}
                    options ={{
                        headerShown: false,
                        ...TransitionPresets.RevealFromBottomAndroid
                    }}
                /> */}


                    <Auth.Screen 
                        name ="SignInScreen"
                        component = {SignInScreen}
                        options ={{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />  
                    
                  
                    <Auth.Screen 
                    name ="DrawerNavigator"
                    component = {DrawerNavigator}
                    options ={{
                        headerShown: false,
                        ...TransitionPresets.RevealFromBottomAndroid
                    }}
                />  
                    <Auth.Screen 
                    name ="HomeScreen"
                    component = {HomeScreen}
                    options ={{
                        headerShown: false,
                        ...TransitionPresets.RevealFromBottomAndroid
                    }}
                /> 
                <Auth.Screen 
                name ="Mybook"
                component = {Mybook}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            /> 
                <Auth.Screen 
                name ="SignatureScreen"
                component = {SignatureScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            /> 
            <Auth.Screen 
            name ="MyRides"
            component = {MyRides}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        /> 
              
                    <Auth.Screen 
                        name ="ForgotPassword"
                        component = {ForgotPassword}
                        options ={{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    /> 
                   
                <Auth.Screen 
                name ="DriwerDetails"
                component = {DriwerDetails}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            /> 
    
           
            <Auth.Screen 
            name ="AddExpenses"
            component = {AddExpenses}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        /> 
            <Auth.Screen 
            name ="Guestdetails"
            component = {Guestdetails}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        /> 
       
        <Auth.Screen 
        name ="MyBookingScreen"
        component = {MyBookingScreen}
        options ={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
       /> 
        <Auth.Screen 
 name ="RatingScreen"
 component = {RatingScreen}
 options ={{
     headerShown: false,
     ...TransitionPresets.RevealFromBottomAndroid
 }}
/> 
<Auth.Screen 
name ="AddEspensesScreen"
component = {AddEspensesScreen}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/> 
<Auth.Screen 
name ="ExpenseReports"
component = {ExpenseReports}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>         
<Auth.Screen 
name ="GarageReading"
component = {GarageReading}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>     
<Auth.Screen 
name ="PickupReading"
component = {PickupReading}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>    
<Auth.Screen 
name ="DropPoint"
component = {DropPoint}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>    


<Auth.Screen 
name ="Support"
component = {Support}
options ={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>         
        </Auth.Navigator>
    )
}