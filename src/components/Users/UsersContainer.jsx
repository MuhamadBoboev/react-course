import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    follow: (userId) => {
      dispatch(followAC(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
