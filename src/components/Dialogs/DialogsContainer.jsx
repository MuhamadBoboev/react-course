import React from "react";
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

export default DialogsContainer;
