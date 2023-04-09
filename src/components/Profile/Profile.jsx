import React from "react";
import fon from "../../fon.jpg";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoFormHooks from "./ProfileInfo/ProfileInfoFormHooks";
const Profile = (props) => {
  // debugger;

  return (
    <div className="content">
      <div className="content__bl-img">
        <img src={fon} width="100%" height="150" className="content__img"></img>
      </div>

      <ProfileInfoFormHooks
        profile={props.profile}
        status={props.status}
        updateStatusAPI={props.updateStatusAPI}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
