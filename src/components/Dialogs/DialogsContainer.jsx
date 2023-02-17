import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialog from "./DialogItem/Dialog";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Messages/message";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        let onSendNewMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };
        return (
          <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            onNewMessageChange={onNewMessageChange}
            onSendNewMessageClick={onSendNewMessageClick}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

const mapStateToProps = (state) => {
  // debugger;
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    onSendNewMessageClick: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const superDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default superDialogsContainer;
