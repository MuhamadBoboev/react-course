import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const Dialog = (props) => {
  return (
    <li className={s.dialog__li + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </li>
  );
};
export default Dialog;
