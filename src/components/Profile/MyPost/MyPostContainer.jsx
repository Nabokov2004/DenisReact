
import React from "react";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return{

        feedbackData: state.profilePage.feedbackData,
       // NewPostText : state.profilePage.NewPostText


    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        AddPost:(newPostText)=>{
            dispatch(addPostActionCreator(newPostText))
        },


    }
}
const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
export default MyPostContainer;