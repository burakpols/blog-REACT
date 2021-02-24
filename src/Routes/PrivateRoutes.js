import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

class PrivateRoutes extends Component {
    private(){
        return(
            <Route exact path={this.props.path} component={this.props.component}  />
        )
    }
    
    render() {   
        return (
            this.props.isThereAuth?this.private():<Redirect to="/"/>   
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        isThereAuth: !!state.authReducer.uid
    }
}

export default connect(mapStateToProps)(PrivateRoutes)