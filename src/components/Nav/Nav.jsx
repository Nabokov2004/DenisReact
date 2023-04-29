import classes from './Nav.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {Navigate} from "react-router-dom";
import React from "react";

const Nav = () => {
    const navigate = useNavigate()
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
                    <NavLink to="/users" className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                      Users
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
                <li> <button onClick={()=>{
                   return navigate('/users')
                }}>Test</button></li>

            </ul>
        </nav>

    )

}
export default Nav;