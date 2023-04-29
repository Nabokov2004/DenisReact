import classes from './Dialogs.module.css';
import React, {createRef} from "react";
import DialogName from "./Dialogs.name/DialogName";
import Message from "./Message/Message";
import {Navigate} from "react-router";
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props) =>{
    return(<form onSubmit={props.handleSubmit} className={classes.send}>
        <Field className={classes.SendMessage } component={"textarea"} name={'newMessageBody'} placeholder={'Enter your message...'}/>

        <button className={classes.AddMessage}> Go </button>

    </form>)
}


const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)



const Dialogs = (props) => {
    let state = props.dialogPage
    let AddMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    let DialogsNameElement = state.dialogsData.map((dialog) => <DialogName name={dialog.name} id={dialog.id}
                                                                                 src={dialog.scr}/>);

    let messagesDataElement = state.messagesData.map((message) => <Message message={message.message}
                                                                                 id={message.id}/>);

    if (!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={classes.wrapper}>
            <div className={classes.Dialog}>
                {DialogsNameElement}

            </div>
            <section>
                <div className={classes.Message}>
                    {messagesDataElement}
                </div>
                <AddMessageFormRedux onSubmit={AddMessage}  />

            </section>
        </div>
    )
}
export default Dialogs;

