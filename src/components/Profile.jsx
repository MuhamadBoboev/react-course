import React from "react";
import fon from "../fon.jpg";
import prof from "../prof.gif";
import s from "./Profile.module.css";
import MyPosts from "./Profile/MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <div className="content__bl-img">
        <img src={fon} width="100%" height="150" className="content__img"></img>
      </div>
      <div className={s.profile}>
        <div className={s["profile__bl-photo"]}>
          <img
            src={prof}
            width="50"
            height="50"
            className={s.profile__photo}
          ></img>
        </div>
        <div className={s.profile__data}>
          <div className={s.profile__name}>Boboev M</div>
          <ul className={s["profile__bl-info"]}>
            <li className={s.profile__li}>
              Data of Birth:
              <span className={s.profile__info}> 21 october</span>
            </li>
            <li className={s.profile__li}>
              City:
              <span className={s.profile__info}>Dushanbe</span>
            </li>
            <li className={s.profile__li}>
              Education:
              <span className={s.profile__info}>MIET</span>
            </li>
            <li className={s.profile__li}>
              Web Site:
              <a href="#" className={s.profile__info}>
                https://vk.com/edit
              </a>
            </li>
          </ul>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
