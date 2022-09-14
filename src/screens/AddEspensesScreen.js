import { StyleSheet, Text, View ,TextInput,ScrollView,Button,Image,TouchableOpacity,Dimensions, PushNotificationIOS, Platform,Alert} from 'react-native'
import React , { Component } from 'react'
import Header from '../components/Header'
import DatePicker from 'react-native-datepicker'
import {Picker} from '@react-native-picker/picker';
import { colors } from '../global/styles';
import Formbutton from '../components/Formbutton';
import axios from 'axios';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Icon
   } from 'react-native-elements'
  //  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
  // import * as ImagePicker from 'react-native-image-picker';
  // import   {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import LineDivider from '../components/LineDivider';
import { Actionsheet,Toast,Root, ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

// import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

 class AddEspensesScreen extends React.Component {
    constructor(props) {
      super(props)
     
      this.state = {
        data:[],
        image:'file:///storage/emulated/0/Android/data/com.travel/files/Pictures/bf534e7c-bc38-4f83-a575-a7006871f47a.jpg',
        amount:'',
        expensedate:"02:02:2022",
        //  expensetime:new Date(),
        expensetime:'04:60',
         reservationid:'',
        mode:'time',
        expensetype:'',
        datas:'',
        loading: false,
        browseslip:'',
        resourcePath: {},
        isDatePickerVisible:false,
        DatePickerVisibility:'true',
        show:false,
        date:new Date(),
        
        group: "",
      grps: [
        {
          itemName: "electronic"
        },
        {
          itemName: "clothes"
        },
        
      ],
      }


    }
      inputValueUpdate = (val, prop) => {

   
        // alert(val)
          const state = this.state;
          state[prop] = val;
      
          this.setState(state)
          this.setState({val})
         
        }
     
     
       
          // if(val=== 'electronic'){
          //   this.setState({sctgory:[...this.state.grpsnew]})
      
          // }else{
          //   this.setState({sctgory:[...this.state.categoryNew]})
      
          // }
          componentDidMount(){
            const user=JSON.parse(localStorage.getItem('user'))
            // console.log('uuuuuuuuuuuuu',user)
          }



      onClickAddImage=()=>{
        ActionSheet.show({
          options: BUTTONS,
          cancelButtonIndex: 2,
          title: 'Select a Photo'
        }, 
          buttonIndex => {
            switch (buttonIndex) {
              case 0:
                break;
              case 1:
                break;
              default:
                break;
            }
        })
      }


      // onClickImage=()=>{
      // ImagePicker.openPicker({
      //   width: 300,
      //   height: 400,
      //   cropping: true
      // }).then(image => {
      //   this.setState({image})
      //   console.log(image);
      // });}


      // onClickAddImage=()=>{
      //   ImagePicker.openCamera({
      //     width: 300,
      //     height: 400,
      //     cropping: true,
      //   }).then(image => {
      //     this.setState({image})
      //     console.log(image);
      //   });}

//http://52.66.67.209:8087/ords/tasp/mobile/getexpansehead?


// selectFile = () => {
//   var options = {
//     title: 'Select Image',
//     customButtons: [
//       { 
//         name: 'customOptionKey', 
//         title: 'Choose file from Custom Option' 
//       },
//     ],
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   }}

//    OpenPicker(){

//     launchCamera( res => {
//     console.log('Response = ', res);
//     if (res.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (res.error) {
//       console.log('ImagePicker Error: ', res.error);
//     } else if (res.customButton) {
//       console.log('User tapped custom button: ', res.customButton);
//       alert(res.customButton);
//     } else {
//       let source = res;
//       this.setState({
//         resourcePath: source,
//       });
//     }
//   });
// };




    
bs = React.createRef()
fall=new Animated.Value(1)



 takePhotoFromCamera = () => {
  ImagePicker.openCamera({
    compressImageMaxWidth: 300,
    compressImageMaxHeight: 300,
    cropping: true,
    compressImageQuality: 0.7
  }).then(image => {
    console.log(image);
    this.setState({image:image.path});
    this.bs.current.snapTo(1);
  });
}

 choosePhotoFromLibrary = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 300,
    cropping: true,
    compressImageQuality: 0.7
  }).then(image => {
    console.log(image);
    this.setState({image});
    this.bs.current.snapTo(1);
  });
}


renderInner = () => (
  <View style={styles.panel}>
    <View style={{alignItems: 'center'}}>
      <Text style={styles.panelTitle}>Upload Photo</Text>
      <Text style={styles.panelSubtitle}>Choose Your Expenses Picture</Text>
    </View>
    <TouchableOpacity style={styles.panelButton} onPress={this.takePhotoFromCamera}>
      <Text style={styles.panelButtonTitle}>Take Photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.panelButton} onPress={this.choosePhotoFromLibrary}>
      <Text style={styles.panelButtonTitle}>Choose From Library</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.panelButton}
      onPress={() => this.bs.current.snapTo(1)}>
      <Text style={styles.panelButtonTitle}>Cancel</Text>
    </TouchableOpacity>
  </View>
);
 


renderHeader = () => (
  <View style={styles.header}>
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle} />
    </View>
  </View>
);







 showDatePicker = () => {
  // this.setDatePickerVisibility(true);
  this.setState({  isDatePickerVisible:true})
};

 hideDatePicker = () => {
  // this.setDatePickerVisibility(false);
  this.setState({  isDatePickerVisible:false})
};

 handleConfirm = (time) => {
  let tetmpdate=new Date(currentDate)
  let expensetime='Hours:   ' + tetmpdate.getHours() + ' | Minutes: ' + tetmpdate.getMinutes() 
  console.warn("A date has been picked: ", expensetime);
  this.hideDatePicker();
};




onchange =(event,selectedDate)=>{
   const currentDate= selectedDate || date
   this.setState({show:Platform.OS === 'ios'})
   this.setState({date:currentDate})

   let tetmpdate=new Date(currentDate)
   let fDate= tetmpdate.getDate() + ' :' + tetmpdate.getMonth()+ ' :' + tetmpdate.getFullYear()
   let fTime= tetmpdate.getHours() + ' :' + tetmpdate.getMinutes() 
   this.setState({expensetime:fTime})
   this.setState({expensedate:fDate})
}


 showMode = (currentMode) => {
  // this.setState({  isDatePickerVisible:false})
   this.setState({show:true})
   this.setState({mode:currentMode})
} 



Confirm = (date) => {
  console.warn("A date has been picked: ", date);
  hideDatePicker();
};



async imageUser() {
 try {
  const itemsSubmit=JSON.parse(localStorage.getItem('itemsSubmit'))
  console.log('itemsimageeeeeeeeeeeeiddddddddddd===========',itemsSubmit.ID)
  console.log('apiitmessubmit',itemsSubmit)
   const response = await axios.post(`http://52.66.67.209:8087/ords/tasp/mobile/addexpbill?expid=${itemsSubmit.ID}?expbill=${this.state.image}`)
   // setIsLoading(false)
   console.log('imageUser',JSON.stringify(response.data))
 } catch (error) {
   console.error(error);
 }
}




componentDidMount(){
 this.getUser()
}

 async getUser() {
  try {
    const response = await axios.get('http://52.66.67.209:8087/ords/tasp/mobile/getexpansehead')
    // console.log('eseseseseseses',response.data);
    // console.log('espenses screennnnn data',response.data)
    console.log('S',JSON.stringify(response.data))
    this.setState({data:response.data.ExpanseList})
    console.log('espenses s data',this.state.data)
    // setIsLoading(false)
  } catch (error) {
    console.error(error);
  }
}




 
  async postUser() {
    const {mode,reservationid, image, amount, expensedate, expensetime,datas} = this.state;
    this.setState({
      loading: true,
    });
   try {
    const { datas } = this.props.route.params;
    const items=JSON.parse(localStorage.getItem('items'))
    console.log('ITEMDATA',items)
    console.log('itwmadata',datas)

     const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/addexpense/?mode=addnew&expensetype=${this.state.expensetype}&amount=${this.state.amount}&expensedate=${this.state.expensedate}&expensetime=${this.state.expensetime}&driverid=${items.driverid}&reservationid=${this.state.datas.reservationid}`)
     console.log('addddddexpeeeeeeee',JSON.stringify(response.data))
     localStorage.setItem('itemsSubmit',JSON.stringify(response.data))
     console.log('itemsSumitdata',itemsSubmit)
     const itemsSubmit=JSON.parse(localStorage.getItem('itemsSubmit'))
     console.log('itemsSumitdataaaaaaaaaaaaaaaaaaaaa',itemsSubmit)
     this.setState({
      loading: false,
     })
     // setIsLoading(false)
     if (response.data.Responce === '000') {
      Alert.alert("Registration successful", response.message);
      //do something

   } else {
     alert('An error occurred. Please try again later.');
   }
   } catch (error) {
     console.error(error);
   }
 }


// componentDidMount(){
//   const datas = this.props.navigation.getParam('datas', 'some default value');
//   this.setState({
//   datas
//   });
//   console.log('send screen data',datas)
//   }









 



        onDateChange = (date, type) => {
            //function to handle the date change
            if (type === 'END_DATE') {
              this.state.selectedEndDate(date);
            } else {
             this.state.selectedEndDate(null);
              this.state.selectedStartDate(date);
            }
          };

        render(){
       
          const { datas } = this.props.route.params;
    console.log('Add expenses details data ',datas)



          const {mode, expensetype, amount, expensedate,expensetime,driverid,reservationid,image,} = this.state;
      

  return (
    <View style={{flex:1}}>
    <View>
      <Header type='chevron-left'  title='Add Expenses' navigation={this.props.navigation}/>
      </View>
      <ScrollView style={styles.containers}>
    <BottomSheet
    ref={this.bs}
    snapPoints={[330,0]}
    initialSnap={1}
    renderContent={this.renderInner}
    renderHeader={this.renderHeader}
    callbackNode={this.fall}
    enabledGestureInteraction={true}
    />
    
      <View style={styles.inputGroup}>
      <TextInput
       type={'number'}
          placeholder={datas.reservationid}
          value={this.state.reservationid}
          onChangeText={(reservationid) =>this.setState({reservationid:reservationid})}
          style={{fontSize:18}}
      />
    </View>


    <View style={styles.viewStyle}>
   
    <Text style={{fontSize:18,color:colors.grey3}}>Expenses Type</Text>

  <View style={{ flex: 0.9, fontSize: 18 }}>
    <Picker
      itemStyle={styles.itemStyle}
      mode="dropdown"
      style={styles.pickerStyle}
      selectedValue={this.state.expensetype}
      // onValueChange={(val) => this.inputValueUpdate(val, 'data.[0].ExpanseHead')}
      onValueChange={(val) => this.inputValueUpdate(val, 'expensetype')}
    >
      {this.state.data.map((item, index) => (
        <Picker.Item
          color="#0087F0"
          label={item.ExpanseHead}
          value={item.ExpanseHead}
          index={index}
        />
      ))}
    </Picker>
  </View>
</View>
 
<LineDivider style={{marginHorizontal:10}}/>


     <View style={styles.inputGroup}>
        <TextInput
         type={'number'}
            placeholder={'Amount'}
            value={this.state.amount}
            onChangeText={(amount) => this.setState({amount})}
            style={{fontSize:18,}}
        />
      </View>


      {/*<View style={styles.inputGroup}>
      <TextInput
          placeholder={'Browse Slip'}
          value={this.state.browseslip}
          onChangeText={(browseslip) => this.setState({browseslip})}
          style={{fontSize:18}}
      />
      </View>*/}


    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:18,alignItems:'center',margin:10}}>  
    <View>
    <Text style={{ fontSize: 18,color:'gray'}}>
    {this.state.expensetime}
  </Text>
    </View>

    <Icon 
    type ="material-community"
    name = "clock-outline"
    color ='gray'
    size ={30}
    onPress={()=>this.showMode('time')} style={{backgroundColor:'white'}}
/>
{this.state.show  &&(
    <DateTimePicker
    testID='dateTimePicker'
    value={this.state.date}
    mode={this.state.mode}
    is24Hour={true}
    disabled='default'
    onChange={this.onchange}
    />)}
  </View>

  
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,alignItems:'center',margin:10}}>  
    <View>
    <Text style={{ fontSize: 18,color:'gray'}}>
    {this.state.expensedate}
  </Text>
  </View>

  <Icon 
  type ="material-community"
  name = "calendar-month"
  color ='gray'
  size ={30}
  onPress={()=>this.showMode('date')} style={{backgroundColor:'white'}}
/>

 
</View>



     <View style={{flexDirection:'row',}}>
     {/*} <Image
        source={{
          uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={{ uri: this.state.resourcePath.uri }}
        style={{ width: 200, height: 200 }}
      />*/}
      <Text style={{ alignItems: 'center' }}>
        {this.state.resourcePath.uri}
      </Text>
     
      <View style={styles.button}>
      <Icon 
      type ="material-community"
      name = "camera"
      color ='white'
      size ={30}
      onPress={()=>this.bs.current.snapTo(0)}
  /> 
          </View> 
    </View>



<View style={{marginTop:50}}>
<View style={{backgroundColor:'#24ada2',marginHorizontal:30,justifyContent:'center',color:'white',height:40}}>
  <Text style={{justifyContent:'center',alignSelf:'center',color:'white',}} onPress={()=>{this.postUser()}}>SUBMIT</Text>
  </View>

</View>
    </ScrollView>
   
    </View>
    
  )
}

}


export default AddEspensesScreen


const styles = StyleSheet.create({
    contain: {
    height:250,
   fontSize:25,
      margin:18,
      width:'auto',
    },
    viewStyle: {
     
      alignSelf: "center",
      flexDirection: "row",
      width: "100%",
      padding:10,
      
      justifyContent: "space-between",
      alignItems: "center",
     fontSize:25
    },
    itemStyle: {
      fontSize:25,
      fontFamily: "Roboto-Regular",
      color: "#007aff",
      padding:18
    },
    pickerStyle: {
      width: "100%",
      height: 40,
      fontFamily: "Roboto-Regular",
      fontSize:25,
      color: "#007aff",
      padding:18
   
    },
    textStyle: {
      fontSize:25,
      fontFamily: "Roboto-Regular"
    },
    containers: {
      flex: 1,
      padding: 5,
      margin:10,
     fontSize:25,
      backgroundColor:'white'
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      margin:10,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      fontSize:25
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center'
    },
    contains: {
   marginTop:18,
     textAlign:'center',
    fontSize:25
    
  },
  cont: {
    marginTop:18,
      textAlign:'center',
      marginBottom:18,
     fontSize:25
   },
  input: {
      height: 40,
      width: '70%',
      borderColor: 'steelblue',
      borderWidth: 2,
      textAlign:'center',
   fontSize:25
  },
  
    containerpicker: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#ffffff',
      padding: 16,
    },
    textStyle: {
      marginTop: 10,
    },
    titleStyle: {
      textAlign: 'center',
      fontSize: 25,
      margin: 18,
    },







    button: {
      width:'80%',
      height: 30,
      backgroundColor: 'gray',
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginBottom:6,
      marginTop:30,
      marginHorizontal:40
     
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      color: '#fff'
    },




    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  
  })


//   const [Email, SetEmail] = useState('');
// const [Password, SetPassword] = useState('');

// const SendLogin = (props) => {
//     console.log(Email, Password)
//     fetch(".......", {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             "username": Email,
//             "password": password
//         })
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }




// <DateTimePickerModal
//       isVisible={this.state.isDatePickerVisible}
//       mode={"time"}
//       onConfirm={this.handleConfirm}
//       onCancel={this.hideDatePicker}
//       time={this.state.expensetime}
//       confirmBtnText="Confirm"
//       cancelBtnText="Cancel"
//       placeholder="select date"
//       locale="en_GB" // Use "en_GB" here
//       date={new Date()}
//       format="HH:mm"
//       style={{width: 180,fontSize:18}}
//       customStyles={{
//         dateIcon: {
//           position: 'absolute',
//           left: 0,
//           top: 4,
//           marginLeft: 0
//         },
//         dateInput: {
//           marginLeft: 36
//         }
//         // ... You can check the source to find the other keys.
//       }}
//       // onTimeChange={(expensetime) => {this.setState({expensetime: expensetime})}}
//       onChange={( expensetime)=>this.setState({ expensetime: expensetime})}
//     />










// <View style={{flexDirection:'row',marginTop:18,justifyContent:'space-between',alignItems:'center',margin:10}}>
// <Text style={{fontSize:18,color:colors.grey3}}>{this.state.expensedate}</Text>
// <DatePicker
    
//       date={this.state.expensedate}
//       mode="date"
      
//       format="DD-MM-YYYY"
//       minDate="02-02-2022"
//       maxDate="06-06-2050"
//       confirmBtnText="Confirm"
//       cancelBtnText="Cancel"
     
//       onDateChange={(expensedate) => {this.setState({expensedate: expensedate})}}
//     />
//      </View>
