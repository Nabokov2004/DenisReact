import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                        Profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                        Messages
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <a href="#">
                        News
                    </a>
                </li>
                <li className={classes.item}>
                    <a href="#">
                        Music
                    </a>
                </li>
                <li className={classes.settings}>
                    <a href="#">
                        Settings
                    </a>
                </li>

            </ul>
        </nav>
    )

}
export default Nav;