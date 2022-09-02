// import { StyleSheet, Text, View } from 'react-native'
// import React ,{useState} from 'react'
// import Dialog from "react-native-dialog";


// const MyRides = ({navigation}) => {


//   const [data, setData] = useState();
//   const [visible, setVisible] = useState(true);

//   const handleCancel = (alert) => {
//     setVisible(true);
//   };

//   const handleDelete = () => {
//     // The user has pressed the "Delete" button, so here you can do your own logic.
//     // ...Your logic
//     setVisible(true);
//   };



//   async postRide(){
//     // const { data } = this.props.route.params;
//     console.log('drop points',data)
//     const {} = this.state;
//     try{
//   const response=await axios.post(`http://52.66.67.209:8087/ords/tasp/mobile/acknowledgement/?reservationnumber=22008736-01&mode=accept`,this.state)
         
//        console.log('ride data',response.data)
//        setData({data:response.data})
//     }catch(error) {
//         console.error(error);
//       }
//     }
    
 

//   return (
//     <Dialog.Container visible={visible}>
//     <Dialog.Title>Account delete</Dialog.Title>
//     <Dialog.Description>
//       Do you want to delete this account? You cannot undo this action.
//     </Dialog.Description>
//     <Dialog.Button label="Cancel" onPress={()=>navigation.goBack()} />
//     <Dialog.Button label="Accept" onPress={()=>navigation.navigate('RootClientTabs')}/>
//   </Dialog.Container>
//   )
// }

// export default MyRides

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import Dialog from "react-native-dialog";
import axios from 'axios';
import 'localstorage-polyfill'


const MyRides = ({navigation,route}) => {

 
  const rides=JSON.parse(localStorage.getItem('rides'))

  console.log('back data',rides)


  const [data,setData]=useState(rides.rides)
  const [visible,setVisible]=useState(true)
  const [datas,setDatas]=useState([])
  const [userdetails,setUserdetails]=useState(route.params.data)

 
  useEffect(()=>{
 
    const rides=JSON.parse(localStorage.getItem('rides'))

    console.log('back data',rides)
  },[])
 
 

  Cleardata=()=>(
    localStorage.clear()

)


  async function postRide(){
    console.log('myride data',rides[0].reservationnumber)
  
    try{
      const rides=JSON.parse(localStorage.getItem('rides'))
  const response=await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/acknowledgement/?reservationnumber=${rides[0].reservationnumber}&mode=accept`)
    if(response.data.Responce === '000') {
      navigation.navigate('MyBookingScreen')
    }    
       console.log('ride data',response.data)
    }catch(error) {
        console.error(error);
      }
    }




 

 const  handleCancel = (alert) => {
    setV
    isible({visible:true});
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
  setVisible({visible:true});
  };

  return (
    <Dialog.Container visible={visible}>
    <Dialog.Title> Do you want to start this ride?</Dialog.Title>
  
    <Dialog.Description>
     
     </Dialog.Description>
     <Dialog.Button label="Cancel" onPress={()=>navigation.goBack()} />
     <Dialog.Button label="Accept" onPress={()=>postRide()}/>
    </Dialog.Container>
  )
}

export default MyRides

const styles = StyleSheet.create({})






// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
//  import Dialog from "react-native-dialog";
// import axios from 'axios';
// import 'localstorage-polyfill'


// export default class MyRides extends Component {
  
// constructor(props){
 
//   super(props)
//   this.state={
//     data:[],
//     visible:true,
//     datas:'',
   
//       }
// }



//   //  const rides=(localStorage.getItem('rides'))





 

//   async postRide(){
//     // const { data } = this.props.route.params;
   
//     const { datas } = this.props.route.params;
//     console.log('myride data',this.datas)
//     console.log('rides data',this.rides)
//     try{
//   const response=await axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/acknowledgement/?reservationnumber=${datas.reservationnumber}&mode=accept`)
//     if(response.data.Responce === '000') {
//       console.log('consoleeeee',response.data)
//       this.props.navigation.navigate('RootClientTabs')
//     }    
//        console.log('ride data',response.data)
//       this.setState({data:response.data})
//     }catch(error) {
//         console.error(error);
//       }
//     }




 

//    handleCancel = (alert) => {
//     this.setState({visible:true});
//   };

//    handleDelete = () => {
//     // The user has pressed the "Delete" button, so here you can do your own logic.
//     // ...Your logic
//     this.setState({visible:true});
//   };




//   render() {
    
//     return (
//       <Dialog.Container visible={this.state.visible}>
//   <Dialog.Title> Do you want to start this ride?</Dialog.Title>
//   <Dialog.Description>
   
//    </Dialog.Description>
//    <Dialog.Button label="Cancel" onPress={()=>this.props.navigation.goBack()} />
//    <Dialog.Button label="Accept" onPress={()=>this.postRide()}/>
//   </Dialog.Container>
//     )
//   }
// }

// export default MyRides