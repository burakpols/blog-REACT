import * as actionTypes from "./ActionTypes";
import {database} from "../../Firebase/FirebaseConfig";
import initialState from "../Reducer/InitialState";

export const addBlog = (blog) => {
    return {type: actionTypes.ADD_BLOG, payload: blog}
}

export const addBlogFirebase=(blog)=>{
    return (dispatch)=>{
        database.ref().push(blog)
            .then((res)=>{
                dispatch(addBlog({
                    id: res.key,
                    ...blog
                }))
            })
            .catch((error)=>console.log(error))
    }
}

export const removeBlog=(blogId)=>{
    return{type: actionTypes.REMOVE_BLOG, payload: blogId}
}

export const removeBlogFirebase=(blogId)=>{
    return (dispatch)=>{
        database.ref(blogId).remove().then(()=>{dispatch(removeBlog(blogId));})
                                     .catch((err)=>console.log(err));
        
    }
}

export const updateBlog=(blog)=>{
    return{type: actionTypes.UPDATE_BLOG, payload: blog}
}

export const updateBlogFirebase=(blog)=>{
    return (dispatch)=>{
        database.ref(blog.id).update(blog).then(()=>dispatch(updateBlog(blog)))
                                          .catch((err)=>console.log(err));
    }

}

export const getBlogs=(blogs)=>{
    return{type: actionTypes.GET_BLOGS, paylaod: blogs}
}

export const getBlogsFirebase=()=>{
    return (dispatch)=>{
        database.ref().once("value").then((snapshot)=>{
            const blogs= initialState.blogs

            snapshot.forEach((blog)=>{
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            });
            dispatch(getBlogs(blogs))

        })
    }
}

export const getBlogDetail=(blog)=>{
    return{type: actionTypes.GET_BLOG_DETAIL, payload: blog}
}

