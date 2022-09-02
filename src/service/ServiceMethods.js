export const getApi=(url,others)=>{
    try {
        const response = await 
        axios.get('http://52.66.67.209:8087/ords/tasp/mobile/getloginstatus/?loginid=RAJBIR&&password=123456&&token=AA11212',{
          loginid,password
        });
        if(response === 200){
    // navigation.navigate('ClientTab')
        }
        console.log('response=>',response.data);
        setData({data:response.data})
      //   console.log(data);
      }
       catch (error) {
        console.error(error);
      }
}