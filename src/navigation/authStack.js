import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'

import SignInScreen from '../screens/authScreens/SignInScreen'
import OnBoarding from '../screens/OnBoarding'
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import DriwerDetails from '../screens/DriwerDetails';
import Guestdetails from '../screens/Guestdetails';
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
                    name ="HomeScreen"
                    component = {HomeScreen}
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
            name ="Guestdetails"
            component = {Guestdetails}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        /> 
                   
                   
        </Auth.Navigator>
    )
}