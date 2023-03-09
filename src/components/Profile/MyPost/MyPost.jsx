import classes from './MyPost.module.css';
import Feedback from "./feedback/Feedback";

const MyPost = (props) => {
    return (<div className={classes.wrapper}>
        <h3> My post</h3>
    <input className={classes.textNew} type="text" value="text..."/>
    <button className={classes.send}>Send</button>
   <Feedback message='How are you?'/>
   <Feedback message='This is first post'/>
   </div>
)
}
export default MyPost;