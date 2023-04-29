import classes from "./avatar.module.css";
import Ava from "./Ava/Ava";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const Ava_bio = (props) =>{
    if (!props.profile){
        return <Preloader/>
    }

    return(

    <div className={classes.prof}>
        <Ava profile={props}/>
        <div className={classes.Bio}>
            <h2>{props.profile.fullName}</h2>
            <ProfileStatusWithHooks status ={props.status}  updateStatus ={props.updateStatus}/>
            <p>
                age:10 years; <br/>
                skills: many;<br/>
                city: Minsk; <br/>
                education: BSUIR;<br/>
            </p>
        </div>
    </div>
    )
}
export default Ava_bio;