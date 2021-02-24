import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as blogActions from "../../Redux/Action/BlogActions";

class UpdateBlog extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.currentBlog.id,
            title: this.props.currentBlog.title,
            description:this.props.currentBlog.description  
        };
        this.submitBlog=this.submitBlog.bind(this);
    }
    submitBlog(e){
        e.preventDefault();
        this.props.actions.updateBlogFirebase(this.state);
        this.props.history.push("/blogs");

    }
    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitBlog} className="mt-5">
                    <FormGroup>
                        <Input onChange={(e)=>this.setState({title:e.target.value})}
                             type="text" name="title" id="title" placeholder="Your title"
                             value={this.state.title} />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={(e)=>this.setState({description:e.target.value})}
                            type="textarea" name="description" id="description" placeholder="Your descriptions"
                            value={this.state.description} />
                    </FormGroup>
                    <Button type="submit" color="warning">Update</Button>
                </Form>
            </Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        currentBlog: state.blogDetailReducer,
        getBlogs: state.blogReducer
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        actions:{
            updateBlogFirebase: bindActionCreators(blogActions.updateBlogFirebase,dispatch)

        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBlog);

