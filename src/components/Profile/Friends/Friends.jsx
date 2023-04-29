import classes from "./friends.module.css"

const Friends = (props) => {
    return(
        <div className={classes.wrapperFriends}>
            <h2>Friends</h2>
            <section className={classes.wrapImg}>
                <div className={classes.circle}><img src="https://yt3.ggpht.com/9oObspGOzVDjzX0pt5UFi6ZSPB32fhHEv6I05reZ8qQ9RoKEYZ-gclDuN-iKrBrMPtAxpdy0=s900-c-k-c0x00ffffff-no-rj" alt=""/></div>
                <div className={classes.circle}><img src="https://yt3.ggpht.com/9oObspGOzVDjzX0pt5UFi6ZSPB32fhHEv6I05reZ8qQ9RoKEYZ-gclDuN-iKrBrMPtAxpdy0=s900-c-k-c0x00ffffff-no-rj" alt=""/></div>
                <div className={classes.circle}><img src="https://yt3.ggpht.com/9oObspGOzVDjzX0pt5UFi6ZSPB32fhHEv6I05reZ8qQ9RoKEYZ-gclDuN-iKrBrMPtAxpdy0=s900-c-k-c0x00ffffff-no-rj" alt=""/></div>
            </section>
        </div>
    )

}
export default Friends;