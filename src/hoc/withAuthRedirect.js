import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";
export const withAuthRedirect = (Component) => {
     class RedirectComponent extends React.Component{
         render(){

             if(!this.props.isAuth) return <Navigate to = {'/login'}/>
             return <Component {...this.props}/>
         }
     }
    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth

    })
    let ConnectedAuthRedirectConponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectConponent
 }