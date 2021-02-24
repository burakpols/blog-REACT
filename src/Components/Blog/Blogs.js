import React,{Fragment,Component} from 'react';
import { connect } from 'react-redux';
import {CardImg} from "reactstrap";
import {Link} from "react-router-dom";
import "./BlogsStyle.css";
import { bindActionCreators } from 'redux';
import * as blogActions from "../../Redux/Action/BlogActions";

class Blogs extends Component {
    componentDidMount(){
        this.props.actions.getBlogsFirebase()
    }
    render() {
        return (
            <Fragment>
                <div className="container mb-5 mt-5">
                    <div className="row">
                        {
                            this.props.blogs.map(b=>(
                                <div className="col-md-4" key={b.id}>
                                    <div className="card mt-3">    
                                        <div className="product-1 align-items-center p-2 text-center">
                                            <img onClick={()=>this.props.actions.removeBlogFirebase(b.id)} className="float-left" src="https://img.icons8.com/cotton/30/000000/delete-sign--v2.png"/>
                                            <CardImg top width="100%" src="https://www.cybware.com/wp-content/uploads/2015/11/blog-img-4.jpg" alt="Card image cap" />
                                            <h5>{b.title}</h5>
                                            <div className="mt-3 info">
                                                <span className="text-1 d-block">Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </div>
                                        <Link onClick={()=>this.props.actions.blogDetail(b)} to={`/blogs/${b.id}`} className="p-3 shoe text-center text-white mt-3 cursor">
                                            <span className="text-uppercase">Read Blog</span>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </Fragment>
           
        )
    }
}




const mapStateToProps=(state)=>{
    return{
        blogs:state.blogReducer
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        actions:{
            blogDetail: bindActionCreators(blogActions.getBlogDetail,dispatch),
            removeBlogFirebase: bindActionCreators(blogActions.removeBlogFirebase,dispatch),
            getBlogsFirebase:bindActionCreators(blogActions.getBlogsFirebase,dispatch) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blogs)

