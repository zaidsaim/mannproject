// import { StyleSheet, Text, View,Dimensions , Modal,} from 'react-native'
// import React, { useState } from 'react'
// import Header from '../components/Header'
// import { colors } from '../global/styles'
// import { SIZES } from '../../constants'
// import Formbutton from '../components/Formbutton'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;



// const Driver = ({navigation}) => {





//   return (
//     <View>
//     <Header  type='arrow-left' color='white' title='Driver Id' navigation={navigation}/>
//     <View style={{marginTop:SIZES.padding,}}>
//       <Text style={{color:colors.lightgreen,marginHorizontal:'35%',fontSize:SIZES.h3,}}>Pick up Point</Text>
//       <Text style={{color:colors.grey4,marginTop:SIZES.base,marginHorizontal:'25%',fontSize:SIZES.h3,}}>PALIKA PARKING PALACE</Text>
//       <Text style={{color:colors.red,marginTop:SIZES.padding,marginHorizontal:'35%',fontSize:SIZES.h3,}}>Drop 0ff Point</Text>
//       <Text style={{color:colors.grey4,marginTop:SIZES.base,fontSize:SIZES.h3,marginHorizontal:'25%'}}>PALIKA PARKING PALACE</Text>
//       </View>
//       <TouchableOpacity style={{marginTop:height/2}} >

//       <Formbutton buttonTitle='Start'/>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Driver

// const styles = StyleSheet.create({})






import React, {Component} from 'react';
import { StyleSheet, Text, View,Dimensions , Modal,Alert,TouchableHighlight,TextInput,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import Header from '../components/Header'
import { colors } from '../global/styles'
import { COLORS, SIZES } from '../../constants'
import Formbutton from '../components/Formbutton'
import TextButton from '../components/TextButton';
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class GarageReading extends Component {
  constructor(props){
    super(props)
      this.state = {
        modalVisible: false,
        meaterreading:'',
        isLoading: true,
        status:'',
        items:'',
        datas:'',
        latitude:28.578039,
        longitude:77.338959
        
    
      
    }
    
  }

   
componentDidMount(){
  const user=JSON.parse(localStorage.getItem('user'))
  // console.log('uuuuuuuuuuuuu',user)
}
 

  
async gettUser(){
  // const { data } = this.props.route.params
  const {meaterreading,status,bookingid,latitude,longitude} = this.state;
  try{
     
const user=JSON.parse(localStorage.getItem('user'))
// let URL=`http://52.66.67.209:8087/ords/tasp/mobile/updatejob?bookingid=${user[0].bookingid}&status=2&meaterreading=${meaterreading}&latitude=&longitude=`

const response=await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/updatejob?bookingid=${user[0].bookingid}&status=2&meaterreading=${meaterreading}&latitude=&longitude=`)
console.log('garage data',JSON.stringify(response.data))
console.log('garage check reponse',response)

if(response.status === 200){
  console.log('if',JSON.stringify(response.data))
  this.props.navigation.navigate('MyBookingScreen') 
 }else{
  console.log('else',JSON.stringify(response.data))
 }
  }catch(error) {
      console.error(error);
    }
  }  
  

// componentDidMount(){
//   this.postUser()
// }



//http://52.66.67.209:8087/ords/tasp/mobile/updatejob?bookingid=18009174-36&status=3&meaterreading=1000&latitude=XX&longitude=XX

  async postUser(){
    // const { data } = this.props.route.params
    const {meaterreading,status,bookingid,latitude,longitude} = this.state;
    try{
       
  const user=JSON.parse(localStorage.getItem('user'))
  // let URL=`http://52.66.67.209:8087/ords/tasp/mobile/updatejob?bookingid=${user[0].bookingid}&status=2&meaterreading=${meaterreading}&latitude=&longitude=`
  
  const response=await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/updatejob?bookingid=${user[0].bookingid}&status=1&meaterreading=${meaterreading}&latitude=&longitude=`)
  console.log('garage data',JSON.stringify(response.data))
  console.log('garage check reponse',response)

  if(response.status === 200){
    console.log('if',JSON.stringify(response.data))
   
    // this.props.navigation.navigate('MyBookingScreen') 
   }else{
    console.log('else',JSON.stringify(response.data))
   }
    }catch(error) {
        console.error(error);
      }
    }
    
    // status "status": 200,

    if(isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
  
  
  
 


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    // const rides=JSON.parse(localStorage.getItem('rides'))
    
    // console.log('garagedatastore',rides)
    const user=JSON.parse(localStorage.getItem('user'))
    console.log('uuuuuuuuuuuuu',user)

   
    return (
      <>
<View>
        <Header  type='chevron-left' color='white' title='Driver Id' navigation={this.props.navigation}/>
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
              <Text style={{fontSize:SIZES.h2}}>Enter Your Garage Reading</Text>
             
              <KeyboardAvoidingView style={styles.inputGroup}>
              <TextInput
                  placeholder={'plese put meaterreading'}
                  value={this.state.meaterreading}
                  onChangeText={(meaterreading) =>this.setState({meaterreading})}
                  style={{fontSize:15}}
              />
              </KeyboardAvoidingView>
           
              <TouchableHighlight
                onPress={() => 
                  this.postUser(this.gettUser())
                }
                style={{width:width/4}}
                >
                <Text style={{fontSize:SIZES.h1,color:colors.red,backgroundColor:COLORS.gray3,textAlign:'center'}}
                >Ok</Text>
              </TouchableHighlight>
             
            </View>
            
          </View>
      
        </Modal>
      
        <TouchableHighlight
         
          style={{marginTop:height/3,backgroundColor:'white'}}
          >
          <View style={{backgroundColor:'#24ada2',marginHorizontal:30,justifyContent:'center',color:'white',height:40}}>
          <Text style={{justifyContent:'center',alignSelf:'center',color:'white',}} onPress={() => {
            this.setModalVisible(true) }}  >START</Text>
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
