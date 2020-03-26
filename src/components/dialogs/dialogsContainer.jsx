import React from 'react';
import Dialogs from "./Dialogs";
import { sendMessageCreator} from '../../redux file/dialogsReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../redux file/hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return { 
        dialogsPage: state.dialogsPage 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

let composeAll = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)



export default composeAll;