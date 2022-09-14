

import React, {Component} from 'react';
import { StyleSheet, Text, View,Dimensions , Modal,Alert,TouchableHighlight,TextInput,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import Headers from '../components/Headers';
import { colors } from '../global/styles'
import { COLORS, SIZES } from '../../constants'
import Formbutton from '../components/Formbutton'
import TextButton from '../components/TextButton';
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios';
import GarageReading from './GarageReading';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class PickupReading extends Component {
  state = {
    modalVisible: false,
    meaterreading:'',
    isLoading: true,
    status:'',
    datas:'',
    latitude:28.578039,
    longitude:77.338959

  };


  componentDidMount(){
    const user=JSON.parse(localStorage.getItem('user'))
    
    console.log('pickuplocal',user)
  }

  if(isLoading){
    return(
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E"/>
      </View>
    )
  }    


//  componentDidMount(){
//   this.postUser()
//  }

  async postUser(){
  
    // console.log('drop points',data)
    const {meaterreading,status,bookingid,latitude,longitude} = this.state;
    try{
      
      const user=JSON.parse(localStorage.getItem('user'))
      if(user[0].garagereading  < meaterreading)
{
  const response=await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/updatejob?bookingid=${user[0].bookingid}&status=3&meaterreading=${meaterreading}&latitude=&longitude=`)
  console.log('pick check reponse',response.data)
  if(response.status === 200){
    console.log('if',JSON.stringify(response.data))
    this.props.navigation.replace('MyBookingScreen') 
   

   }else{
    console.log('else',JSON.stringify(response.data))
    // this.props.navigation.navigate('MyBookingScreen') 
   }
  }
  else{

    alert('pickup reading should be greater than garage reading')
  }
    
       
    }catch(error) {
        console.error(error);
      }
    }
    
   
  
 


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    // const { data } = this.props.route.params;
    // console.log('pickup reading',data)
    const user=JSON.parse(localStorage.getItem('user'))
    console.log('uuuuuuuuuuuuu',user)

    return (
      <>
<View>
        <Headers  type='chevron-left' color='white' title='Driver Id' navigation={this.props.navigation}/>
        </View>
        <View style={{flex:1,backgroundColor:'white'}}>
    <View style={{marginTop:SIZES.padding,backgroundColor:'white'}}>
      <Text style={{color:colors.lightgreen,marginHorizontal:'30%',fontSize:SIZES.body2}}>Pick up Point</Text>
      <Text style={{color:colors.grey4,marginTop:SIZES.base,marginHorizontal:'25%',fontSize:SIZES.h3,}}>PALIKA PARKING PALACE</Text>
      <Text style={{color:colors.red,marginTop:SIZES.padding,marginHorizontal:'30%',fontSize:SIZES.body2,}}>Drop 0ff Point</Text>
      <Text style={{color:colors.grey4,marginTop:SIZES.base,fontSize:SIZES.h3,marginHorizontal:'25%'}}>PALIKA PARKING PALACE</Text>
      </View>
{/*<TouchableOpacity onPress={()=>{this.props.navigation.navigate('PickupReading')}}>
      <Text style={{marginTop:0}}>first driver</Text>
    </TouchableOpacity>*/}
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:height/3}}>
              <Text style={{fontSize:SIZES.h2}}>Enter Your Pickup Reading</Text>
             
              <KeyboardAvoidingView style={styles.inputGroup}>
              <TextInput
                  placeholder={'plese put meaterreading'}
                  value={this.state.meaterreading}
                  onChangeText={(meaterreading) =>this.setState({meaterreading})}
                  style={{fontSize:15}}
              />
              </KeyboardAvoidingView>
           
              <TouchableHighlight
                onPress={() => {
                  this.postUser()
                }}
                style={{width:width/4}}
                >
                <Text style={{fontSize:SIZES.h1,color:colors.red,backgroundColor:COLORS.gray3,textAlign:'center'}}
                >Ok</Text>
              </TouchableHighlight>
             
            </View>
            
          </View>
      
        </Modal>
      
        <TouchableHighlight
        onPress={() => {
          this.setModalVisible(true)}}
          style={{marginTop:height/3,backgroundColor:'white'}} 
          >
          <View style={{backgroundColor:'#24ada2',marginHorizontal:30,justifyContent:'center',color:'white',height:40,marginBottom:20}} >
          <Text style={{justifyContent:'center',alignSelf:'center',color:'white',}}  >My BOOKING</Text>
          </View>
        </TouchableHighlight>
        </View>
      </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
    inputGroup: {
     
        padding: 0,
        margin:10,
        marginBottom:5,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      fontSize:15
      },
     preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
      }

})
