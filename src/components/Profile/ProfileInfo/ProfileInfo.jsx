import React from "react";
import fon from "../../../fon.jpg";
import prof from "../../../prof.gif";
import Preloader from "../../common/Preloader/Preloader";
import MyPosts from "../MyPosts/MyPosts";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <div className={s.profile}>
      <div className={s["profile__bl-photo"]}>
        <img
          src={props.profile.photos.large}
          width="50"
          height="50"
          className={s.profile__photo}
        ></img>
      </div>
      <div className={s.profile__data}>
        <div className={s.profile__name}>{props.profile.fullName}</div>
        <ul className={s["profile__bl-info"]}>
          <li className={s.profile__li}>
            Кто я:
            <span className={s.profile__info}>{props.profile.aboutMe}</span>
          </li>
          <li className={s.profile__li}>
            Ищу ли я работу?:
            <span className={s.profile__info}>
              {props.profile.lookingForAJob ? "Yes" : "no"}
            </span>
          </li>
          <li className={s.profile__li}>
            Чем занимаюсь:
            <span className={s.profile__info}>
              {props.profile.lookingForAJobDescription}
            </span>
          </li>
          <li className={s.profile__li}>
            ВК:
            <a href="#" className={s.profile__info}>
              {props.profile.contacts.vk}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
