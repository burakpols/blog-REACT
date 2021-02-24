import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import * as authActions from "../Redux/Action/AuthActions";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this)
        this.logout= this.logout.bind(this)
    }
    login(){
        this.props.dispatch(authActions.loginAuth())
    }

    logout(){
        this.props.dispatch(authActions.logoutAuth())
    }

    render() {
        return (
            <Fragment>
                <div onClick={()=>this.login()} className="btn btn-primary mt-5 d-block">Login</div>
                <div onClick={()=>this.logout()} className="btn btn-danger mt-3 d-block">Logout</div>
                <h1>{this.props.authReducer.uid?this.props.authReducer.name:""}</h1>  
            </Fragment>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        authReducer: state.authReducer
    }

}


export default connect(mapStateToProps)(HomePage);
