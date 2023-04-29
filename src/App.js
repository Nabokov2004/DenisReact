import './App.css';
import Nav from "./components/Nav/Nav";
import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }else{
    return (

      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav/>
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer store={this.props.store}/>}/>
            <Route path="/profile/:userId?" element={<ProfileContainer store={this.props.store}/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer store={this.props.store}/>}/>
            <Route path="/users/*" element={<UsersContainer/>}/>
            <Route path="/login/*" element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>


    );

  }}
}
const mapStateToProps =(state)=> ({
  initialized:state.app.initialized
})

export default connect(mapStateToProps,{initializeApp})(App);
