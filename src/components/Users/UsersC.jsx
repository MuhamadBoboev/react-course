import React from "react";
import s from "./style.module.css";
import axios from "axios";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        // `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`
        `https://social-network.samuraijs.com/api/1.0/users`
      )
      .then((response) => {
        this.props.usersAdd(response.data.items);
      });
  }
  onPageTarget = (e) => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}`)
      .then((response) => {
        this.props.usersAdd(response.data.items);
      });
  };

  render() {
    let a = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let mass = [];
    for (let i = 1; i <= a; i++) {
      mass.push(i);
    }

    return (
      <div className={s["users-section"]}>
        <div className={s.page_block}>
          <ul className={s.pages}>
            {mass.map((el) => {
              return (
                <li
                  className={`${this.props.currentPage === el && s.selected} ${
                    s.page_count
                  }`}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={s.users}>
          {this.props.users.map((el) => (
            <li className={s.user}>
              <div className="body">
                <div className="left">
                  <div className="block-foto">
                    <img
                      src={
                        "https://avatars.mds.yandex.net/i?id=f6419d2d294cab1c91e9e3f5aaf8c74cd527bbd2-8496937-images-thumbs&n=13&exp=1"
                      }
                      className="user-foto"
                      width={50}
                      height={50}
                    ></img>
                  </div>
                  <div className="user-follow__block">
                    {el.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(el.id);
                        }}
                      >
                        follow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(el.id);
                        }}
                      >
                        unfollow
                      </button>
                    )}
                  </div>
                </div>
                <div className="right">
                  <div className="right__body">
                    <div className="right__left">
                      <div className="user-text">{el.name}</div>
                      <div className="user-small-text">{el.status}</div>
                    </div>
                    <div className="right__right">
                      <div className="user-text">{"el.location.country"}</div>
                      <div className="user-text">{"el.location.city"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
