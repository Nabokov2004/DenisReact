import Header from "./Header";
import React, {Component} from "react";
import axios from "axios";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";



class HeaderContainer extends Component {
    componentDidMount() {
    this.props.getAuthUserData();
    }

    render() {
        return (

            <Header {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({
     isAuth: state.auth.isAuth,
    login: state.auth.login

    })

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);