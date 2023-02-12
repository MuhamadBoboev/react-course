import React from "react";
import prof from "../../../prof.gif";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef();
  let addPostElement = () => {
    props.addPostElement();
    // console.log("asd");
    newPostElement.current.value = "";
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChanged(text);
  };
  return (
    <div className={s.post}>
      <h2 className={s.post__title}>My posts</h2>
      <div className={s.post__content}>
        <div className={s["post__bl-input"]}>
          <input
            onChange={onPostChange}
            ref={newPostElement}
            className={s.post__input}
            placeholder="your news"
          ></input>
        </div>
        <div onClick={addPostElement} className={`${s.btn} ${s.btn__post}`}>
          Send
        </div>
      </div>
      <ul className={s.post__ul}>{postsElements}</ul>
    </div>
  );
};

export default MyPosts;
