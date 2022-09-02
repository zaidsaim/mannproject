import { StyleSheet, Text, View ,TextInput,Button,TouchableOpacity,Dimensions} from 'react-native'
import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import Formbutton from '../components/Formbutton'
import axios from 'axios'
import { colors } from '../global/styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Support = ({navigation}) => {

  const [number,setNumber]=useState('6397688464')
  const [email,setEmail]=useState('zaidansari335gmail.com')

  const [disabled, setDisabled] = useState(false);
  const [enabled, setEnabled] = useState(false);
  

//http://52.66.67.209:8087/ords/tasp/mobile/changepassword/?driverid=00000230&oldpassword=123456&newpassword=1234567




  return (
    <>
    <View style={{backgroundColor:'white'}}>
    <Header type='chevron-left'  title='Support' navigation={navigation}/>
    </View>
    <View style={styles.container}>
    <TextInput 
      style ={styles.TextInput1}
      placeholder ="number"
     
     onChangeText = {(number)=>setNumber(number)}
     value ={number}
    
    />
    <TextInput 
    style ={styles.TextInput1}
    placeholder ="Email"
   
   onChangeText = {(email)=>setEmail(email)}
   value ={email}
  />
 
</View>

</>
  )
}

export default Support

const styles = StyleSheet.create({
  TextInput1:{
    borderWidth:1,
    borderColor:"#86939e",
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