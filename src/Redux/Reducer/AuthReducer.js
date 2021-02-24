import * as actionTypes from "../Action/ActionTypes";
import initialState from "./InitialState";

const authReducer=(state= initialState.auth, action)=>{
    switch (action.type) {
        case actionTypes.LOGIN_AUTH_SUCCESS:
            let newState={
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
                photoURL: action.payload.photoURL
            }
            return newState
        case actionTypes.LOGOUT_AUTH_SUCCESS:
            return {}
        default:
            return state;
    }
}

export default authReducer;