import React from "react";
import logo from "../../prof.gif";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className="_container">
        <div className={s.header__body}>
          <a href="../" className={s["header__bl-logo"]}>
            <img src={logo} width="40px" height="40px"></img>
          </a>
          <div className="">
            <img></img>
            {props.authData.isAuth ? (
              <p>{props.authData.login}</p>
            ) : (
              <p>Login</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
