import {combineReducers} from "redux";
import blogReducer from "./BlogReducer";
import blogDetailReducer from "./BlogDetailReducer"
import authReducer from "./AuthReducer";

const reducers= combineReducers({
    blogReducer,
    blogDetailReducer,
    authReducer
})

export default reducers;