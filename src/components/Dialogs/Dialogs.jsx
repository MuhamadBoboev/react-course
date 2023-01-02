import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialog = (props) => {
  return (
    <li className={s.dialog__li + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </li>
  );
};
const Message = (props) => {
  return <li className={s["d-message"]}>{props.message}</li>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Anton" },
    { id: 2, name: "Roman" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Filip" },
    { id: 5, name: "Kirill" },
    { id: 6, name: "Sergey" },
  ];
  let messageData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Yo" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__body}>
        <div className={s.dialog__left}>
          <ul className={s.dialog__ul}>
            {dialogsData.map((el) => {
              return <Dialog id={el.id} name={el.name}></Dialog>;
            })}
            {/* <Dialog id={dialogsData[0].id} name={dialogsData[0].name}></Dialog>
            <Dialog id={dialogsData[1].id} name={dialogsData[1].name}></Dialog>
            <Dialog id="2" name="Fary"></Dialog>
            <Dialog id="3" name="Andrey"></Dialog> */}
          </ul>
        </div>
        <div className={s.dialog__right}>
          <ul className={s["d-messages"]}>
            <Message id={messageData[0].id} message={messageData[0].message} />
            <Message id={messageData[1].id} message={messageData[1].message} />
            <Message message="Bro" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
