import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__body}>
        <ul className={s.navbar__links}>
          <li className={s.navbar__link}>
            <a href="Profile" className={s["navbar__link-href"]}>
              Profile
            </a>
          </li>
          <li className={s.navbar__link}>
            <a href="Messeges" className={s["navbar__link-href"]}>
              Messages
            </a>
          </li>
          <li className={s.navbar__link}>
            <a href="News" className={s["navbar__link-href"]}>
              News
            </a>
          </li>
          <li className={s.navbar__link}>
            <a href="Music" className={s["navbar__link-href"]}>
              Music
            </a>
          </li>
          <br></br>
          <li className={s.navbar__link}>
            <a href="Setting" className={s["navbar__link-href"]}>
              Setting
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
