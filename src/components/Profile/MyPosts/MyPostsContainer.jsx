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
