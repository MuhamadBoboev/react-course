import React from "react";
import prof from "../../../../prof.gif";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={s.post__li}>
      <div className={s["post__bl-img"]}>
        <img src={prof} className={s.post__img}></img>
      </div>
      <div className={s["post__bl-text"]}>
        <p className={s.post__text}>{props.message}</p>
      </div>
    </li>
  );
};

export default Post;
