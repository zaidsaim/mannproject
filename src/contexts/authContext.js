import React, {createContext,useReducer,useState,initialState,useEffect} from 'react'
import { SignInReducer } from '../reducers/authReducers'

export const SignInContext = createContext()

 export const SignInContextProvider = (props)=>{

const [signedIn,dispatchSignedIn] = useReducer(SignInReducer,{
    token:null,
})

return(
    <SignInContext.Provider value = {{signedIn,dispatchSignedIn}}>
        {props.children}
    </SignInContext.Provider>
)

 }
//setAuthState
// Create a context
// export const AuthContext = React.createContext();

//  const AuthProvider = ({ children }) => {
//   const [items, setAuthState] = useState();

//   // Get current auth state from AsyncStorage
//   const getAuthState = async () => {
//     try {
//       const authDataString = await AsyncStorage.getItem("items");
//       const authData = JSON.parse(authDataString || {});
//       // Configure axios headers
//       configureAxiosHeaders(authData);
//       setAuthState(authData);
//     } catch (err) {
//         setAuthState({});
//     }
//   };

//   // Update AsyncStorage & context state
//   const setItems = async (items) => {
//     try {
//       await AsyncStorage.setItem("items", JSON.stringify(items));
//       // Configure axios headers
//       configureAxiosHeaders(items);
//       setAuthState(items);
//     } catch (error) {
//       Promise.reject(error);
//     }
//   };

//   useEffect(() => {
//     getAuthState();
//   }, []);

// console.log('fffffffffffffffffff',items)

//   return (
//     <AuthContext.Provider value={{ items,setItems}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default  AuthProvider



