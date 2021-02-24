import {applyMiddleware, createStore} from "redux";
import reducers from "./index";
import thunk from "redux-thunk"

const configureStore=()=>{
    return createStore(reducers,applyMiddleware(thunk))
}

export default configureStore;