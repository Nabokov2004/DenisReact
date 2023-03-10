import classes from './MyPost.module.css';
import Feedback from "./feedback/Feedback";

let feedbackData=[
    {id:1, message:'How are you?'},
    {id:2, message:' are you?'},
    {id:3, message:'How are you?'},
    {id:4, message:'How are you?'},
]


const MyPost = (props) => {
    return (<div className={classes.wrapper}>
        <h3> My post</h3>
    <input className={classes.textNew} type="text" value="text..."/>
    <button className={classes.send}>Send</button>
   <Feedback message={feedbackData[0].message}/>
   <Feedback message={feedbackData[1].message}/>
   </div>
)
}
export default MyPost;