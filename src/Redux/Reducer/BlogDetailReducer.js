import * as actionTypes from "../Action/ActionTypes";
import initialState from "./InitialState";

const blogDetailReducer=(state=initialState.currentBlog, action)=>{
    switch(action.type){
        case actionTypes.GET_BLOG_DETAIL:
            return action.payload;
        default:
            return state;
    }
}

export default blogDetailReducer;