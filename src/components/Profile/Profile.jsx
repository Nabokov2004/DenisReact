import classes from './Profile.module.css';
import Ava_bio from "./avatar/avatar";
import Friends from "./Friends/Friends";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <main className={classes.content}>
            <img className={classes.main_photo} src="https://mobimg.b-cdn.net/v3/fetch/0d/0d71f406f62559bc188deadc9af2397e.jpeg" alt=""/>

            <Ava_bio profile = {props.profile} status={props.status} updateStatus={props.updateStatus} />
            <Friends/>

            <MyPostContainer/>
            {/*<MyPostContainer store={props.store}/>  было так*/}


        </main>

    )

}
export default Profile;