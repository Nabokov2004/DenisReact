import classes from "./Feedback.module.css";


const Feedback = (props) => {
    return (

        <div className={classes.Feedback}>
            <div className={classes.circle}>

            </div>
            <div className={classes.question}>
                {props.message}
            </div>
        </div>

)
}
export default Feedback;