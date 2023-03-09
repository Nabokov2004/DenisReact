import classes from './Profile.module.css';
import Ava_bio from "./avatar/avatar";
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <main className={classes.content}>
            <img className={classes.main_photo} src="https://mobimg.b-cdn.net/v3/fetch/0d/0d71f406f62559bc188deadc9af2397e.jpeg" alt=""/>

            <Ava_bio />
            <MyPost/>

        </main>

    )

}
export default Profile;