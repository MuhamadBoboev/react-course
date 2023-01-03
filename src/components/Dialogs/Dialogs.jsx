import React from "react";
import { NavLink } from "react-router-dom";
import Dialog from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/message";

const Dialogs = (props) => {
  let dialogsElements = props.appState.dialogs.map((el) => (
    <Dialog id={el.id} name={el.name}></Dialog>
  ));
  let messagesElements = props.appState.messages.map((el) => (
    <Message id={el.id} message={el.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__body}>
        <div className={s.dialog__left}>
          <ul className={s.dialog__ul}>{dialogsElements}</ul>
        </div>
        <div className={s.dialog__right}>
          <ul className={s["d-messages"]}>{messagesElements}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
