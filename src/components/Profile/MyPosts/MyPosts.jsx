import React from "react";
import prof from "../../../prof.gif";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { message: "Hi, a am student", likesCount: 2 },
    { message: "Hey, why nobody love me?", likesCount: 2 },
    { message: "Hi, m asad", likesCount: 2 },
    { message: "y love me?", likesCount: 2 },
    { message: "Hi, ", likesCount: 2 },
    { message: "Hey, why nobody love me?", likesCount: 2 },
  ];
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
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </ul>
    </div>
  );
};

export default MyPosts;
