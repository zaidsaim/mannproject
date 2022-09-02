export const SignInReducer = (state,action) =>{
    switch(action.type){
        case  'UPDATE_SIGN_IN':
            return{
                token:action.payload.token
            }
        default:
            return state
    }
}