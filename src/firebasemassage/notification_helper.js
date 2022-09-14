import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken()
  }
}


const  GetFCMToken = async()=>{
  const fcmtoken=JSON.parse(localStorage.getItem('fcmtoken'))
    // let fcmtoken = await AsyncStorage.getItem('fcmtoken')
      console.log('oldtokennnnn',fcmtoken)
    if(!fcmtoken){
        try {
            let fcmtoken = await messaging().getToken()
            if (fcmtoken) {
              // let fcmtoken=JSON.stringify(fcmtoken)
                console.log('newtokennnnnnnnnnn:',fcmtoken)
                localStorage.setItem('fcmtoken',JSON.stringify(fcmtoken))
            // await AsyncStorage.setItem('fcmtoken',fcmtoken)
             console.log('setTokenfcm',fcmtoken)
            } 
        } catch (error) {
            console.log('error is coming from fcmtoken')
            
        }
    }
}


export const NotificationListner=()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
    })

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        // setLoading(false);
      });


      messaging().onMessage(async remoteMessage=>{
           console.log('notification on fgroung',remoteMessage)
      })
}





// const  GetFCMToken = async()=>{
//   let fcmtoken = await AsyncStorage.getItem('fcmtoken')
//     console.log('oldtoken',fcmtoken)
//   if(!fcmtoken){
//       try {
//           let fcmtoken = await messaging().getToken()
//           if (fcmtoken) {
//             // let fcmtoken=JSON.stringify(fcmtoken)
//               console.log('newtoken:',fcmtoken)
//           await AsyncStorage.setItem('fcmtoken',fcmtoken)
//            console.log('setTokenfcm',fcmtoken)
//           } 
//       } catch (error) {
//           console.log('error is coming from fcmtoken')
          
//       }
//   }
// }