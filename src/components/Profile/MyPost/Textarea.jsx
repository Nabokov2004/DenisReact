import React from "react";
import classes from './Textarea.module.css'


const Textarea = ({field,...props}) =>{
    return(
        <div >

            <input  {...field} {...props}/>
            {/*{(props.form.errors.newPostText || !props.form.dirty) ? <span>Error</span> : undefined}*/}

        </div>
    )
    
}
export default Textarea;