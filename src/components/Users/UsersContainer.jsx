import { connect } from "react-redux";
import { followAC, unfollowAC, usersAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    unfollow: (userId) => {
      {
        dispatch(unfollowAC(userId));
      }
    },
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    usersAdd: (users) => {
      dispatch(usersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
