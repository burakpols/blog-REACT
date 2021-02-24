import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

function BlogDetail(props) {
    const {id,title,description}= props.currentBlog
    return (
        <Fragment>
            <h1 className="mt-5">{title} 
                <Link to={`/updateblog/${id}`} className="btn btn-warning float-right"><img src="https://img.icons8.com/nolan/30/approve-and-update.png"/> Update Blog</Link>
            </h1>
            <div className="container">
                <p>{description}</p>
            </div>
        </Fragment>     
        
    )
}

const mapStateToProps=(state)=>{
    return{
        currentBlog:state.blogDetailReducer
    }
}

export default connect(mapStateToProps)(BlogDetail);
