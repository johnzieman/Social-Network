import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';


const Dialogs = (props) => {
    let state = props.dialogsPage;


    //state data part
    let dialogs = state.dataItems.map(
        element => <DialogsItem name={element.name} id={element.id} key={element.id} />
    );

    let messages = state.dataMessage.map(
        element => <MessagesItem message={element.message} key={element.id} />
    );


    //state callbacks part
    let onSendMessageClick = (value) => {
        props.sendMessageCreator(value.newMessageBody);
    }

 
    return (
        // Messages part
        <div className={classes.dialogs}>

            {/* Left side  */}
            <div className={classes.dialogsLeftSide}>
                {dialogs}
            </div>

            {/* Right side */}
            <div className={classes.dialogsRightSide}>
                {messages}
                    <AddMessageFormRedux onSubmit={onSendMessageClick} />
            </div>
        </div>
    );


}


const AddMessageCreator = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm(({form:'MessageCreator'}))(AddMessageCreator);

export default Dialogs;