import classes from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.Dialog}>
                {/*<BrowserRouter></BrowserRouter>*/}


                <div className={classes.Name}>
                    <NavLink to={'1'}>
                        Den
                    </NavLink>
                </div>
                <div className={classes.Name}>
                    <NavLink to={'2'}>
                        Maks
                    </NavLink>
                </div>
                <div className={classes.Name}>
                    <NavLink to={'3'}>
                        Arseny
                    </NavLink>
                </div>
            </div>
            <div className={classes.Message}>
                <div className="Message">
                    Hi, how are you?
                </div>
                <div className="Message">
                    Nice!
                </div>
            </div>


        </div>
    )

}
export default Dialogs;