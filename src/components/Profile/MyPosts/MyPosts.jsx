import React from "react";
import prof from "../../../prof.gif";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.post}>
      <h2 className={s.post__title}>My posts</h2>
      <div className={s.post__content}>
        <div className={s["post__bl-input"]}>
          <input className={s.post__input} placeholder="your news"></input>
        </div>
        <a href="#" className={`${s.btn} ${s.btn__post}`}>
          Send
        </a>
      </div>
      <ul className={s.post__ul}>
        <Post message="Hi, a am student" />
        <Post message="Hey, why nobody love me?" />
      </ul>
    </div>
  );
};

export default MyPosts;
