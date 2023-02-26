import { connect } from "react-redux";
import {
  currentPageFn,
  follow,
  pageSizeFn,
  setIsFetching,
  totalUserCountFn,
  unfollow,
  usersAdd,
} from "../../redux/users-reducer";
import UsersComponenta from "./UsersComponenta";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    unfollow: (userId) => {
      {
        dispatch(unfollow(userId));
      }
    },
    follow: (userId) => {
      dispatch(follow(userId));
    },
    usersAdd: (users) => {
      dispatch(usersAdd(users));
    },
    pageSizeFn: (pages) => {
      dispatch(pageSizeFn(pages));
    },
    totalUserCountFn: (count) => {
      dispatch(totalUserCountFn(count));
    },
    currentPageFn: (page) => {
      dispatch(currentPageFn(page));
    },
    setIsFetching: (page) => {
      dispatch(setIsFetching(page));
    },
  };
};

const UsersContainer = connect(mapStateToProps, {
  unfollow: unfollow,
  follow: follow,
  usersAdd: usersAdd,
  pageSizeFn: pageSizeFn,
  totalUserCountFn: totalUserCountFn,
  currentPageFn: currentPageFn,
  setIsFetching: setIsFetching,
})(UsersComponenta);

export default UsersContainer;
