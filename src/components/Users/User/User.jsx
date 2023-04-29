import classes from "./User.module.css";
import userPhoto from "../../../assets/img/UserPhoto.png";
import * as React from "react";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow, key, ...props}) => {

  return (
    <div key={key} className={classes.wrap}>
      <section className={classes.firstSection}>
        <NavLink to={'/profile/' + user.id}>
          <div className={classes.circle_ava}><img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt=""/></div>
        </NavLink>
        <div className={classes.name_subscribe}>
          <div className={classes.name}>
            {user.name}
          </div>
          <div className={classes.subscribe}>
            {
              user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                  unfollow(user.id)
                }}> Unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                  follow(user.id)

                }}> follow</button>
            }
          </div>
        </div>
      </section>
      <section className={classes.secondSection}>
        <p>About me: <br/>
          {user.status}
        </p>
        <p>Location: <br/>
          Minsk, Belarus
        </p>
      </section>
    </div>)
}


export default User;