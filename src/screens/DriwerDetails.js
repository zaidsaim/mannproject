import { Text, View ,Dimensions,Image} from 'react-native'
import React, { Component } from 'react'
import LineDivider from '../components/LineDivider'
import Header from '../components/Header'
import { colors } from '../global/styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export class DriwerDetails extends Component {

   rides=JSON.parse(localStorage.getItem('rides'))
 

  render() {
    
   console.log('driwer d',this.rides)
    const items=JSON.parse(localStorage.getItem('items'))
    return (
        <>
        <View>
        <Header type='chevron-left'  title='Driver Details' navigation={this.props.navigation}/>
       
        </View>
        <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{paddingTop:50,backgroundColor:'white'}}>
        <Image style={{width:100,height:100,alignSelf:'center',paddingTop:30}} source={require('../assets/imagesdriver.png')}/>
        </View>
      <View style={{padding:20,justifyContent:'center'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20,fontSize:20}}>
      <View>
        <Text style={{fontSize:16,color:colors.grey1}}>Driwer Name</Text>
        </View>
        <View>
        <Text style={{fontSize:16}}>{items.drivername}</Text>
        </View>
    </View>
    <LineDivider/>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
    <View>
      <Text style={{fontSize:16,color:colors.grey1}}>Driwer Code</Text>
      </View>
      <View>
      <Text style={{fontSize:16}}>{items.drivercode}</Text>
      </View>
  </View>
  <LineDivider/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
  <View>
    <Text style={{fontSize:16,color:colors.grey1}}>Vehicle Type</Text>
    </View>
    <View>
    <Text style={{fontSize:16}}>DriwerDetails</Text>
    </View>
</View>
<LineDivider/>
<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
<View>
  <Text style={{fontSize:16,color:colors.grey1}}>Vehicle Number</Text>
  </View>
  <View>
  <Text style={{fontSize:16}}>DriwerDetails</Text>
  </View>
</View>

<LineDivider/>
<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
<View>
  <Text style={{fontSize:16,color:colors.grey1}}>Garage Location</Text>
  </View>
  <View>
  <Text style={{fontSize:16}}></Text>
  </View>
  
</View>

      </View>
      </View>
      </>
    )
  }
}

export default DriwerDetails