import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Signature from "react-native-signature-canvas";

export const SignatureScreen = ({navigation}) => {
  const [signature, setSign] = useState(null);

//   const handleOK = (signature) => {
    
//     console.log('SIGNATUREDATA',signature);
//     setSign(signature);

    
//   };

  const handleEmpty = () => {
    console.log("Empty");
  };

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    console.log('Signatureuser',user)
  },[])



  const useSignature = (signature)=>{
    console.log('SIGNATUREDATA',signature);
    setSign(signature);
    const user=JSON.parse(localStorage.getItem('user'))
    const formdata = new FormData();
  
//     const signature = {
//      uri:'data:image/png;base64', // File path uri you get from signature library
//      type: 'signature.png', // image type
//      name: 'pathName', // name of the image
//    };
   
   formdata.append("signature", signature);
   formdata.append('reservationid',user[0].reservationid)
  
  
   fetch('http://52.66.67.209:8087/ords/tasp/mobile/addclintsign/', {
         method: 'put',
         headers: {
           'Content-Type': 'multipart/form-data',
         },
         body: formdata,
       })
         .then((response) => {
  
           console.log('image uploaded',response);
           navigation.goBack('RatingScreen')
         })
         .catch((err) => {
           console.log(err);
         });
  };
   



  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={useSignature}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});