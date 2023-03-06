import React from "react";
import { Navigate } from "react-router-dom";

import Dialog from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((el) => (
    <Dialog id={el.id} name={el.name}></Dialog>
  ));

  let messagesElements = props.messages.map((el) => (
    <Message id={el.id} message={el.message} />
  ));

  let newMessageBody = props.newMessageText;

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.onNewMessageChange(body);
  };
  let onSendNewMessageClick = () => {
    props.onSendNewMessageClick();
  };
  // <Navigate to="/login"></Navigate>;
  // debugger;

  if (!props.isAuth) return <Navigate to="/login"></Navigate>;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__body}>
        <div className={s.dialog__left}>
          <ul className={s.dialog__ul}>{dialogsElements}</ul>
        </div>
        <div className={s.dialog__right}>
          <ul className={s["d-messages"]}>{messagesElements}</ul>
          <div className={s.dialog__right__bottom}>
            <div className={s.dialog__right__bl_text}>
              <textarea
                onChange={onNewMessageChange}
                value={newMessageBody}
                className={s.dialog__right__send_text}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className={s.dialog__right__sen_btn}>
              <button onClick={onSendNewMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
