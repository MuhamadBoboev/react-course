import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <li className={s["d-message"]}>{props.message}</li>;
};

export default Message;
