import classes from "./Ava.module.css";


const Ava = (props) => {
    return(
        <img className={classes.Avatar}
             src={props.profile.profile.photos.large}
             alt=""/>
    )
}
export default Ava;