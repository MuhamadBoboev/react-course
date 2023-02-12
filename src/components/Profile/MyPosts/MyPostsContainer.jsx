import React from "react";
import { connect } from "react-redux";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

import Post from "./Post/Post";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPostElement = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChanged = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            addPostElement={addPostElement}
            onPostChanged={onPostChanged}
            posts={state.profilePage.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
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
      // console.log();
    },
  };
};
const SuperMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default SuperMyPostsContainer;
