import React from "react";

import {
  actionCreatorAddMessage,
  actionCreatorChangeMessage
} from "../../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogs: state.dialogPages.dialogs,
    messages: state.dialogPages.messages,
    newMessageText: state.dialogPages.newMessageText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(actionCreatorAddMessage());
    },
    onMessageChange: text => {
      let action = actionCreatorChangeMessage(text);
      dispatch(action);
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
