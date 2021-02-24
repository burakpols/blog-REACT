import * as actionTypes from "../Action/ActionTypes";
import initialState from "./InitialState";

const blogReducer=(state= initialState.blogs, action)=>{
    switch (action.type) {
        case actionTypes.GET_BLOGS:
            return [...state]

        case actionTypes.ADD_BLOG:
            return [...state,action.payload]

        case actionTypes.REMOVE_BLOG:
            let newState=state.filter(b=>b.id!==action.payload)
            return [...newState]

        case actionTypes.UPDATE_BLOG:
            var updatedBlog= action.payload
            let updatedState= state.map(b=>{
                if(b.id==action.payload.id){
                    return Object.assign({},updatedBlog,{title: updatedBlog.title, description: updatedBlog.description})
                }
                return b
            })
            return [...updatedState]
            
            

        default:
            return state;
    }

}

export default blogReducer;