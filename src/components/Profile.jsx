import React from "react";
import fon from "../fon.jpg";
import prof from "../prof.gif";
import s from "./Profile.module.css";
import MyPosts from "./Profile/MyPosts/MyPosts";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="content">
      <div className="content__bl-img">
        <img src={fon} width="100%" height="150" className="content__img"></img>
      </div>

      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
