import React, { Component, Fragment ,useContext,useState} from 'react'
import { Text, SafeAreaView, View, StyleSheet,TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Forminput from '../components/Forminput'
import Formbutton from '../components/Formbutton'
import ErrorMessage from '../components/ErrorMessage'


// import { AuthContext } from '../navigation/AuthProvider'
import Feather from 'react-native-vector-icons/Feather'
import { Appbar } from 'react-native-paper';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email')
})
export default function ForgotPassword({navigation}) {

    const [email,setEmail]= useState()
    // const {passwordReset}=useContext(AuthContext)

//   handlePasswordReset = async (values, actions) => {
//     const { email } = values

//     try {
//       await this.props.auth.passwordReset(email)
//       console.log('Password reset email sent successfully')
//       this.props.navigation.navigate('Login')
//     } catch (error) {
//       actions.setFieldError('general', error.message)
//     }
//   }

 
    return (
      <>
      <Appbar.Header style={{backgroundColor:'#0281f0'}}>
      <TouchableOpacity  onPress={()=>navigation.navigate('loginScreen')}>
      <Feather name='arrow-left' size={30} style={{color:'white'}} />
   </TouchableOpacity>
        <Appbar.Content  />
          
      {/* <Text style={{color:'white',marginRight:'40%'}} >ReportTwo</Text> */}
      </Appbar.Header>
      <SafeAreaView style={{flex:1,backgroundColor:'white',}}>
         <Text style={styles.text}>Forgot Password?</Text>
           
              <Forminput
                name='email'
                
                onChangeText={(userEmail)=>setEmail(userEmail)}
                placeholder='Enter email'
                autoCapitalize='none'
                iconName='ios-mail'
                iconColor='#2C384A'
                // onBlur={handleBlur('email')}
              />
             
              <View style={styles.buttonContainer}>
                <Formbutton
                  buttonType='outline'
                  // onPress={()=>passwordReset(email)}
                  buttonTitle='Send Email'
                  buttonColor='#0281f0'
                 
                />
              </View>
            
       
          
     
      </SafeAreaView>
      </>
    )
  }


const styles = StyleSheet.create({
  
  text: {
    color: '#333',
    fontSize: 24,
    marginLeft: 25,
    marginTop:30
  },
  buttonContainer: {
    margin: 25
  }
})


