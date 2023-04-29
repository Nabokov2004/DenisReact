import React from "react";
import classes from './Textarea.module.css'


const TextareaError = (msg) =>{
    return(
        <div >

        <span className={classes.errorSpan}>{msg.error}</span>

        </div>
    )
    
}
export default TextareaError;