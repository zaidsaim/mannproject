import { StyleSheet, Text, View ,Button, TouchableOpacity,TouchableHighlight} from 'react-native'
import React, { Component } from 'react'
import  Rating from 'react-native-easy-rating';
import { colors } from '../global/styles';
import {Picker} from '@react-native-picker/picker';
// import DropDownPicker from 'react-native-dropdown-picker';
import { Divider } from "@rneui/themed";
import SignatureCapture from 'react-native-signature-capture';
import Dialog from "react-native-dialog";
import axios from 'axios';
import {  Card, Title, Paragraph } from 'react-native-paper';

export default class RatingScreen extends Component {
  constructor(){
    super()
    this.state={
      chauffeur_punctuality:'',
      outlook_of_chauffeu:'',
      knowledge_of_route:'',
      car_cleanliness_interior:'',
      car_cleanliness_exterior:'',
      needvehiclenextday:'',
      date:new Date(),
      time:'',
      nextpickuplocation:'',
     
      signature:'',
      visible:false,
   
      unsignedreason:'',
      grps: [
        {
          itemName: "Client referred to office for signature"
        },
        {
          itemName: "Client was in hurry"
        },
        {
          itemName: "Released on phone call"
        },
      ],
    }
  }
  
  
//http://52.66.67.209:8087/ords/tasp/mobile/ratings?

inputValueUpdate = (val, prop) => {
  // alert(val)
    const state = this.state;
    state[prop] = val;
   
      this.setState({val})
}

      
timeuser = () => {
  let tetmpdate=new Date()
  let time= tetmpdate.getHours() + ' :' + tetmpdate.getMinutes() 
  this.setState({time:time})
};



componentDidMount(){
  const user=JSON.parse(localStorage.getItem('user'))
  console.log('Ratinguser',user)
}
   
//http://52.66.67.209:8087/ords/tasp/mobile/ratings?bookingid=${}&&chauffeur_punctuality=${chauffeur_punctuality}&&outlook_of_chauffeur=${outlook_of_chauffeu}&&P_Knowledge_Of_Route=${knowledge_of_route}&&car_cleanliness_interior=${car_cleanliness_interior}&&car_cleanliness_exterior=${car_cleanliness_exterior}&&needvehiclenextday=""&&date=''&&time=''&&nextpickuplocation=""&&unsignedreason=${unsignedreason}





  async ratingUser() {
    const user=JSON.parse(localStorage.getItem('user'))
    console.log('ratinglocaldata',user)
   try {
   
    this.timeuser()
     const response = await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/ratings?bookingid=${user[0].bookingid}&&chauffeur_punctuality=${this.state.chauffeur_punctuality}&&outlook_of_chauffeur=${this.state.outlook_of_chauffeu}&&P_Knowledge_Of_Route=${this.state.knowledge_of_route}&&car_cleanliness_interior=${this.state.car_cleanliness_interior}&&car_cleanliness_exterior=${this.state.car_cleanliness_exterior}&&needvehiclenextday=&&date=&&time=&&nextpickuplocation=&&unsignedreason=${this.state.unsignedreason}`)
     // setIsLoading(false)
     if(response.data.Responce === '000'){
      console.log('ratingdata',JSON.stringify(response.data))
      this.props.navigation.navigate('MyBookingScreen')
     }
    
    
   } catch (error) {
     console.error(error);
   }
 }


//  async signatureUser() {
//  try {
//   const user=JSON.parse(localStorage.getItem('user'))
//    const response = await axios.put('http://52.66.67.209:8087/ords/tasp/mobile/addclintsign/',{
//     'reservationid':user[0].reservationid,
//   'signature':'\/9j\/'
//   })
//   this.saveSign()
//    // setIsLoading(false)
//    console.log('signaturedata',JSON.stringify(response.data))
//  } catch (error) {
//    console.error(error);
//  }
// }


 useSignature =()=>{
  const user=JSON.parse(localStorage.getItem('user'))
  const formdata = new FormData();

  this.state.signature = {
   uri:'/storage/emulated/0/Android/data/com.manntravel/files/saved_signature/signature.png', // File path uri you get from signature library
   type: 'signature.png', // image type
   name: 'pathName', // name of the image
 };
 
 formdata.append("signature", this.state.signature);
 formdata.append('reservationid',user[0].reservationid)


 fetch('http://52.66.67.209:8087/ords/tasp/mobile/addclintsign/', {
       method: 'put',
       headers: {
         'Content-Type': 'multipart/form-data',
       },
       body: this.formdata,
     })
       .then((response) => {

         console.log('image uploaded',response);
       })
       .catch((err) => {
         console.log(err);
       });
}
 









  showDialog = () => {
  this.setState({visible:true});
};

 handleCancel = () => {
  this.setState({visible:false});
};



 handleDelete = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
this.setState({visible:false});
};


saveSign() {
  this.refs["sign"].saveImage();
}

resetSign() {
  this.refs["sign"].resetImage();
}

_onSaveEvent(result) {
  result.encoded 
  // - for the base64 encoded png
  result.pathName 
  // - for the file path name
  console.log(result);
}
_onDragEvent() {
   // This callback will be called when the user enters signature
  console.log("dragged");
}



 render() {
 const user=JSON.parse(localStorage.getItem('user'))

  return (
    <View style={{flex:1,padding:10,backgroundColor:'white',paddingTop:20}}>
    <View style={{justifyContent:'center',alignSelf:'center',}}>
    <Text style={{fontSize:16,color:'#24ada2'}}>Rate Our Service</Text>
    </View>
    <Divider style={{paddingTop:5}}/>
   
<Card style={{elevation:2,marginHorizontal:10,height:80,marginTop:7}}>
<Card.Content>
<View style={{justifyContent:'flex-start',}}>
<Text style={{fontSize:14,color:colors.grey3}}>Chauffeur Punctuality:</Text>
<Rating
style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.chauffeur_punctuality}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(chauffeur_punctuality)=>this.setState({chauffeur_punctuality:chauffeur_punctuality})}/>
</View>
 </Card.Content>
 </Card>

 <Card style={{elevation:2,marginHorizontal:10,height:80,marginTop:7}}>
<Card.Content>
    <View style={{justifyContent:'flex-start',}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Outlook of Chauffeur:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.outlook_of_chauffeu}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(outlook_of_chauffeu)=>this.setState({outlook_of_chauffeu:outlook_of_chauffeu})}/>
    </View>
    </Card.Content>
    </Card>

    
    <Card style={{elevation:2,marginHorizontal:10,height:80,marginTop:7}}>
<Card.Content>
    <View style={{justifyContent:'flex-start',}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Routes Knowledge:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.knowledge_of_route}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(knowledge_of_route)=>this.setState({knowledge_of_route:knowledge_of_route})}/>
    </View>
    </Card.Content>
    </Card>


    <Card style={{elevation:2,marginHorizontal:10,height:80,marginTop:7}}>
    <Card.Content>
    <View style={{justifyContent:'flex-start',}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Car cleanliness- Interior:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.car_cleanliness_interior}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(car_cleanliness_interior)=>this.setState({car_cleanliness_interior:car_cleanliness_interior})}/>
    </View>
    </Card.Content>
    </Card>

    <Card style={{elevation:2,marginHorizontal:10,height:80,marginTop:7}}>
    <Card.Content>
    <View style={{justifyContent:'flex-start',}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Car cleanliness- Exterior:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.car_cleanliness_exterior}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(car_cleanliness_exterior)=>this.setState({car_cleanliness_exterior:car_cleanliness_exterior})}/>
    </View>
    </Card.Content>
    </Card>

    <Card style={{elevation:2,marginHorizontal:10,height:177,marginTop:3}}>
<Card.Content>
   <View style={{justifyContent:'flex-start',}}>
   <Text style={{fontSize:15,color:colors.grey3}}>Unsigned Reason</Text>
   </View>

   <View style={styles.viewStyle}>
  
   <View style={{ flex: 2, fontSize: 15 }}>
   <Picker
     itemStyle={styles.itemStyle}
     mode="dropdown"
     style={styles.pickerStyle}
     selectedValue={this.state.unsignedreason}
     onValueChange={(val) => this.inputValueUpdate(val, 'unsignedreason')}
   >
     {this.state.grps.map((item, index) => (
       <Picker.Item
         color="#0087F0"
         label={item.itemName}
         value={item.itemName}
         index={index}
       />
     ))}
   </Picker>
 </View>
 </View>
<View style={{backgroundColor:colors.grey2,marginHorizontal:100,paddingVertical:7}}> 
<TouchableOpacity onPress={()=>this.showDialog()}>
 <View>
 <Text style={{justifyContent:'center',textAlign:'center',color:'white'}}>Signature</Text>
 </View>
 </TouchableOpacity>
 <Dialog.Container visible={this.state.visible} >
 <View  style={{ height: '70%', width: '70%' }}>
        <Dialog.Title>Signature</Dialog.Title>
        <Dialog.Description>
        <SignatureCapture
        style={[{flex:1},styles.signature]}
        ref="sign"
        onSaveEvent={this._onSaveEvent}
        onDragEvent={this._onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor="#ff00ff"
        strokeColor="#ffffff"
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={"portrait"}/>
        </Dialog.Description>
        </View>
       
        <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableHighlight style={styles.buttonStyle}
        onPress={() => { this.handleCancel() } } >
        <Text>Cancel</Text>
    </TouchableHighlight>
                   

                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() =>this.resetSign() } >
                        <Text>Reset</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyle}
                    onPress={() => { this.useSignature() } } >
                    <Text>Save</Text>
                </TouchableHighlight>
                </View>
      </Dialog.Container>
 
 </View>
 <TouchableOpacity onPress={()=>this.ratingUser()}>
 <View style={{backgroundColor:'#24ada2',marginHorizontal:100,marginTop:10,paddingVertical:7}}>
 <Text style={{justifyContent:'center',textAlign:'center',color:'white'}}>Submit</Text>
 </View>
 </TouchableOpacity>
 </Card.Content>
    </Card>
    </View>
     
  
  )
}

}

 const styles = StyleSheet.create({
  itemStyle: {
    fontSize:15,
    fontFamily: "Roboto-Regular",
    color: "#007aff",
    padding:20
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    fontFamily: "Roboto-Regular",
    fontSize:15,
    color: "#007aff",
    padding:20
 
  },
  viewStyle: {
   
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
   fontSize:15
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
},
buttonStyle: {
  flex: 1, justifyContent: "center", alignItems: "center", height: 50,
  backgroundColor: "#eeeeee",
  margin: 10
}
})





// <View style={{ flex: 0.8 }}>
// <Text style={{fontSize:15,color:colors.grey3}}>Unsigned Reason</Text>
// </View>



// <View style={{justifyContent:'flex-start',padding:10,}}>
// // <Text style={{fontSize:14,color:colors.grey3}}>Garage Reading:</Text>
// // </View>