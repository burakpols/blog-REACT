import React, { Component, Fragment } from 'react';
import "./AddBlogStyle.css";
import * as blogActions from "../../Redux/Action/BlogActions";
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';

class AddBlog extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            description:""
        }
        this.submitBlog=this.submitBlog.bind(this)
    }
 
    submitBlog(e){
        e.preventDefault()
        this.props.dispatch(blogActions.addBlogFirebase(this.state))
        document.querySelector("#title").value=""
        document.querySelector("#description").value=""
        this.props.history.push("/blogs");
        
    }
 
    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitBlog} className="mt-5">
                    <FormGroup>
                        <Input onChange={(e)=>this.setState({title:e.target.value})} type="text" name="title" id="title" placeholder="Your title" />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={(e)=>this.setState({description:e.target.value})} type="textarea" name="description" id="description" placeholder="Your descriptions" />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </Fragment>
        )
    }
}

export default connect()(AddBlog);
