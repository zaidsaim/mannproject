



import React, {Component} from 'react';
import { StyleSheet, Text, View,Dimensions , Modal,Alert,TouchableHighlight,TextInput,KeyboardAvoidingView} from 'react-native'
import Header from '../components/Header'
import { colors } from '../global/styles'
import { COLORS, SIZES } from '../../constants'
import Formbutton from '../components/Formbutton'
import TextButton from '../components/TextButton';
import { TouchableOpacity } from 'react-native-gesture-handler'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class PickupConfirm extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
<View>
        <Header  type='arrow-left' color='white' title='Driver Id' navigation={this.props.navigation}/>
    <View style={{marginTop:SIZES.padding,}}>
      <Text style={{color:colors.lightgreen,marginHorizontal:'30%',fontSize:SIZES.body2}}>Pick up Point</Text>
      <Text style={{color:colors.grey4,marginTop:SIZES.base,marginHorizontal:'25%',fontSize:SIZES.h3,}}>PALIKA PARKING PALACE</Text>
      <Text style={{color:colors.red,marginTop:SIZES.padding,marginHorizontal:'30%',fontSize:SIZES.body2,}}>Drop 0ff Point</Text>
      <Text style={{color:colors.grey4,marginTop:SIZES.base,fontSize:SIZES.h3,marginHorizontal:'25%'}}>PALIKA PARKING PALACE</Text>
      </View>
      
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
              <Text style={{fontSize:SIZES.h2}}>Please Press Ok Button</Text>
             
              <KeyboardAvoidingView style={styles.inputGroup}>
              <TextInput
                  placeholder={'plese put number'}
                  value={this.state.number}
                  onChangeText={() => {}}
                  style={{fontSize:15}}
              />
              </KeyboardAvoidingView>
           
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={{width:width/4}}
                >
                <Text style={{fontSize:SIZES.h1,color:colors.red,backgroundColor:COLORS.gray3,textAlign:'center'}}>Ok</Text>
             
                </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Text onPress={()=>this.props.navigation.navigate('BookingUpdated')}>update</Text>
        <TouchableHighlight
         
          style={{marginTop:height/2}}
          >
          <Formbutton buttonTitle='Start'  onPress={() => {
            this.setModalVisible(true);
          }}/>
        </TouchableHighlight>
        </View>
      </View>
     
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

})
