import React from 'react';
import classes from './MessageItem.module.css'


const MessagesItem = (props) => {
    return (
        <div className={classes.messagePart}>
            <div className={classes.message}>
                {props.message}
            </div>
        </div>
    );

}

export default MessagesItem;