import React, { useEffect, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfoFormHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  let activateEditMode = () => {
    setEditMode(true);
  };
  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatusAPI(status);
  };
  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  if (!props.profile) {
    return <Preloader />;
  }
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
        <div className="sad">
          {!editMode && (
            <div className="sad_1">
              <span
                onDoubleClick={activateEditMode.bind(this)}
                className="sad_2"
              >
                {props.status || "-----"}
              </span>
            </div>
          )}
          {editMode && (
            <div className="sad_1">
              <input
                autoFocus
                onBlur={deactivateEditMode.bind(this)}
                onChange={onStatusChange}
                className="sad_2"
                value={status}
              ></input>
            </div>
          )}
        </div>
        <ul className={s["profile__bl-info"]}>
          <li className={s.profile__li}>
            Статус:
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

export default ProfileInfoFormHooks;
