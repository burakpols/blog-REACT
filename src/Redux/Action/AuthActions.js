import * as actionTypes from "./ActionTypes";
import {provider,firebase} from "../../Firebase/FirebaseConfig";


export const loginAuthSuccess=(user)=>{
    return{type: actionTypes.LOGIN_AUTH_SUCCESS, payload: user}

}

export const loginAuth=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(provider)
        .then((response)=>{   
            dispatch(loginAuthSuccess(response.user))
        })
        .catch((err)=>{console.log(err)})
    }
}

export const logoutAuthSuccess=()=>{
    return{type: actionTypes.LOGOUT_AUTH_SUCCESS}
}

export const logoutAuth=()=>{
    return(dispatch)=>{
        firebase.auth().signOut()
        .then(()=>{
            dispatch(logoutAuthSuccess())
            
        })
        .catch(((err)=>console.log(err)))
    }
}