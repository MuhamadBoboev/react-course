import React from "react";
import s from "./style.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.usersAdd([
      {
        id: 1,
        urlPhoto:
          "https://avatars.mds.yandex.net/i?id=f6419d2d294cab1c91e9e3f5aaf8c74cd527bbd2-8496937-images-thumbs&n=13&exp=1",
        followed: true,
        fullName: "Kiril",
        status: "I am a king",
        location: {
          country: "Belarus",
          city: "Minsk",
        },
      },
      {
        id: 2,
        urlPhoto:
          "https://avatars.mds.yandex.net/i?id=f6419d2d294cab1c91e9e3f5aaf8c74cd527bbd2-8496937-images-thumbs&n=13&exp=1",
        followed: false,
        fullName: "Masha",
        status: "I am a girl",
        location: {
          country: "USA",
          city: "New-York",
        },
      },
      {
        id: 3,
        urlPhoto:
          "https://avatars.mds.yandex.net/i?id=f6419d2d294cab1c91e9e3f5aaf8c74cd527bbd2-8496937-images-thumbs&n=13&exp=1",
        followed: true,
        fullName: "Anton",
        status: "I am a student",
        location: {
          country: "Russia",
          city: "Moscow",
        },
      },
    ]);
  }
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
                  {el.followed ? (
                    <button
                      onClick={() => {
                        props.unfollow(el.id);
                      }}
                    >
                      follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.follow(el.id);
                      }}
                    >
                      unfollow
                    </button>
                  )}
                  {/* {el.followed ? (
                    <button>
                      {
                        (onclick = () => {
                          props.unfollow(el.id);
                        })
                      }
                      unfollow
                    </button>
                  ) : (
                    <button>
                      follow
                      {
                        (onclick = () => {
                          props.follow(el.id);
                        })
                      }
                    </button>
                  )} */}
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
