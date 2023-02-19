import React from "react";
import s from "./style.module.css";

const Users = (props) => {
  // debugger;
  let follow = () => {};

  return (
    <div className={s["users-section"]}>
      <ul className={s.users}>
        {props.users.map((el) => (
          <li className={s.user}>
            <div className="body">
              <div className="left">
                <div className="block-foto">
                  <img
                    src={el.urlPhoto}
                    className="user-foto"
                    width={50}
                    height={50}
                  ></img>
                </div>
                <div className="user-follow__block">
                  <button>
                    {el.followed
                      ? (onclick = () => {
                          props.follow(el.id);
                        })
                      : (onclick = () => {
                          props.unfollow(el.id);
                        })}
                  </button>
                </div>
              </div>
              <div className="right">
                <div className="right__body">
                  <div className="right__left">
                    <div className="user-text">{el.fullName}</div>
                    <div className="user-small-text">{el.status}</div>
                  </div>
                  <div className="right__right">
                    <div className="user-text">{el.location.country}</div>
                    <div className="user-text">{el.location.city}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
