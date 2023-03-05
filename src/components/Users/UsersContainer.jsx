import { connect } from "react-redux";
import {
  currentPageFn,
  follow,
  pageSizeFn,
  setIsFetching,
  unfollow,
  toggleFolowingInProgress,
  getUsers,
  followTh,
  unfollowTh,
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.totalUserCount);
  }
  onPageTarget = (e) => {
    this.props.setIsFetching(true);
    this.props.currentPageFn(e);
    this.props.getUsers(e, this.props.pageSize);
  };
  render() {
    return (
      <>
        <div className="">{this.props.isFetching ? <Preloader /> : null}</div>
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUserCount}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          onPageTarget={this.onPageTarget}
          followingInProgress={this.props.followingInProgress}
          toggleFolowingInProgress={this.props.toggleFolowingInProgress}
          followTh={this.props.followTh}
          unfollowTh={this.props.unfollowTh}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  // unfollow: unfollow,
  // follow: follow,
  pageSizeFn: pageSizeFn,
  currentPageFn: currentPageFn,
  setIsFetching: setIsFetching,
  // toggleFolowingInProgress: toggleFolowingInProgress,
  getUsers: getUsers,
  followTh: followTh,
  unfollowTh: unfollowTh,
})(UsersContainer);
