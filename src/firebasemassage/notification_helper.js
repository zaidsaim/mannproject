import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}


async function GetFCMToke(){
    let fcmtoken = await AsyncStorage.getItem('fcmtoken')
      console.log(fcmtoken,'oldtoken')
    if(!fcmtoken){
        try {
            let fcmtoken=messaging().getToken()
            if (fcmtoken) {
                console.log(fcmtoken,'newtoken')
              await  AsyncStorage.setItem('fcmtoken',fcmtoken)
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
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });


      messaging().onMessage(async remoteMessage=>{
           console.log('notification on fgroung',remoteMessage)
      })
}