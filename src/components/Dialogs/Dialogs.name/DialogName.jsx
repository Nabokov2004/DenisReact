import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogName = (props) => {
    let path ="/dialogs/" + props.id;
    return(
    <div className={classes.Name}>

    <NavLink  className={classes.fullName} to={path}>
        <div className={classes.circle}><img src={props.src} alt=""/></div>
        {props.name}
    </NavLink>
    </div>
)
}
export default DialogName;