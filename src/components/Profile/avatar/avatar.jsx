import classes from "./avatar.module.css";
import Ava from "./Ava";



const Ava_bio = () =>{
    return(

    <div className={classes.prof}>
        <Ava />
        <div className={classes.Bio}>
            <h2>Vinny Pux</h2>
            <p>
                age:10 years; <br/>
                skills: many;<br/>
                city: Minsk; <br/>
                education: BSUIR;<br/>
            </p>
        </div>
    </div>
    )
}
export default Ava_bio;