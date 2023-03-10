import classes from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import DialogName from "./Dialogs.name/DialogName";

const Message = (props) =>{
    return(<div className="Message">
            {props.message}
        </div>

    )
}


let dialogsData=[
    {name:'Denchik', id:1},
    {name:'Maks', id:2},
    {name:'den', id:3},
    {name:'Inna', id:4},
    {name:'Vika', id:5}
]
let messageData=[
    {message:'Hi,how are you?'},
    {message:'hey'},
    {message:'nice'},
    {message:'you?'}
]


const Dialogs = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.Dialog}>
                {/*<BrowserRouter></BrowserRouter>*/}


               <DialogName name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogName name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogName name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogName name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogName name={dialogsData[4].name} id={dialogsData[4].id} />




            </div>
            <div className={classes.Message}>
               <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>

            </div>


        </div>
    )

}
export default Dialogs;