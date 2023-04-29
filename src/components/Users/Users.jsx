import classes from "./Users.module.css";
import userPhoto from "../../assets/img/UserPhoto.png";
import * as React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";


const Users = (props) => {

  return <div className={classes.content}>

    <h1 className={classes.main_name}>USERS</h1>
    <Paginator currentPage={props.currentPage}
               pageSize={props.pageSize}
               totalItemsCount={props.totalUsersCount}
               onPageChanged={props.onPageChanged}/>

    {props.users.map(u => <User user={u}
                                followingInProgress={props.followingInProgress}
                                key={u.id}
                                unfollow={props.unfollow}
                                follow={props.follow}/>)}

    </div>
    }
    export default Users;