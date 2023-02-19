import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__body}>
        <ul className={s.navbar__links}>
          <li className={s.navbar__link}>
            <NavLink
              to="./profile"
              className={s["navbar__link-href"]}
              activeClassName={"activeLink"}
            >
              Profile
            </NavLink>
          </li>
          <li className={s.navbar__link}>
            <NavLink to="./dialogs" className={s["navbar__link-href"]}>
              Messages
            </NavLink>
          </li>
          <li className={s.navbar__link}>
            <NavLink to="News" className={s["navbar__link-href"]}>
              News
            </NavLink>
          </li>
          <li className={s.navbar__link}>
            <NavLink to="Music" className={s["navbar__link-href"]}>
              Music
            </NavLink>
          </li>
          <br></br>
          <li className={s.navbar__link}>
            <NavLink to="users" className={s["navbar__link-href"]}>
              Users
            </NavLink>
          </li>
          <br></br>
          <li className={s.navbar__link}>
            <NavLink to="Setting" className={s["navbar__link-href"]}>
              Setting
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
