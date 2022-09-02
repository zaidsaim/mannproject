import { StyleSheet, Text, View ,TextInput,Button} from 'react-native'
import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import Formbutton from '../components/Formbutton'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../global/styles'


const ChangePassword = ({navigation}) => {

  const [oldpassword,setOldpassword]=useState()
  const [newpassword,setNewpassword]=useState()
  const [isDisabled, setDisabled] = useState(false);

  const [data,setData]=useState([])

//http://52.66.67.209:8087/ords/tasp/mobile/changepassword/?driverid=00000230&oldpassword=123456&newpassword=1234567





async function getUser() {
  console.log('ygwyugwiugwuigi',newpassword)
try {
  const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/changepassword/?driverid=00000230&oldpassword=${oldpassword}&newpassword=${newpassword}`
 );
  console.log(response.data);
  setData({data:response.data})
  console.log('changepass',data);
} catch (error) {
  console.error(error);
}
}



  return (
    <>
    <View>
    <Header type='chevron-left'  title='ChangePassword' navigation={navigation}/>
    </View>
    <View style={styles.container}>
    <TextInput 
      style ={styles.TextInput1}
      placeholder ="oldPassword"
     
     onChangeText = {(oldpassword)=>setOldpassword(oldpassword)}
     value ={oldpassword}
    />
    <TextInput 
    style ={styles.TextInput1}
    placeholder ="newPassword"
   
   onChangeText = {(newpassword)=>setNewpassword(newpassword)}
   value ={newpassword}
  />
  
  <TouchableOpacity >
  <View style={{backgroundColor:'#24ada2',marginHorizontal:30,marginTop:'20%',justifyContent:'center',color:'white',height:40}}>
  <Text style={{justifyContent:'center',alignSelf:'center',color:'white',}} onPress={()=>getUser()}>SIGN IN</Text>
  </View>
</TouchableOpacity>
</View>

</>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  TextInput1:{
    borderWidth:1,
    // borderColor:"#86939e",
    marginHorizontal:20,
    borderRadius:12,
    marginBottom:20,
    paddingLeft:15,
    color:colors.grey1
  },
  container :{
    flex:1,
    backgroundColor:'white',
    paddingTop:100
},
})

//#27292b

// <TouchableOpacity >
// <Formbutton buttonTitle='Submit' onPress={()=>getUser()}  disabled={
//   oldpassword === "" || newpassword === "" ? true : false
// }/>
// </TouchableOpacity>


