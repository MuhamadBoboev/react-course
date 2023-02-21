import { connect } from "react-redux";
import {
  currentPageAC,
  followAC,
  pageSizeAC,
  totalUserCountAC,
  unfollowAC,
  usersAC,
} from "../../redux/users-reducer";
import UsersC from "./UsersC";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
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
    pageSizeFn: (pages) => {
      dispatch(pageSizeAC(pages));
    },
    totalUserCountFn: (count) => {
      dispatch(totalUserCountAC(count));
    },
    currentPageFn: (page) => {
      dispatch(currentPageAC(page));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
