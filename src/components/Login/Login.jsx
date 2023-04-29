import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import React from "react";
import Basic from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";



const Login = () =>{

    return( <div className={classes.wrapper}>
        <h1 className={classes.title}>Login</h1>

        <Basic />
    </div>)
}

export default Login;