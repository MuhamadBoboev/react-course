import React from "react";
import { connect } from "react-redux";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPostElement: () => {
      dispatch(addPostActionCreator());
      console.log("1111");
    },
    onPostChanged: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};
const SuperMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default SuperMyPostsContainer;
