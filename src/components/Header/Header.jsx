
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return(

        <header className={classes.header}>
            <img src="https://avatars.mds.yandex.net/i?id=576303378e29c276316831f7441c2dbe6a4335ac-7662450-images-thumbs&n=13" alt=""/>
            <div className={classes.login}>

                {props.isAuth ?<div> {props.login} - <button onClick={props.logout}> log out</button> </div>:
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )


}

export default Header;