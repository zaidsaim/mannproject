/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';



messaging().onMessage(async remoteMessage=>{
    console.log('notification on fgroung',remoteMessage)
})
messaging().setBackgroundMessageHandler(async remoteMessage=>{
    console.log('notification on fgroung',remoteMessage)
})

AppRegistry.registerComponent(appName, () => App);
