import React from "react";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersApi } from "../../api/api";
class UsersComponenta extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersApi
      .getUsers(this.props.pageSize, this.props.pageSize)
      .then((response) => {
        this.props.usersAdd(response.data.items);
        this.props.totalUserCountFn(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }
  onPageTarget = (e) => {
    this.props.currentPageFn(e);
    this.props.setIsFetching(true);
    usersApi.getUsers(e, this.props.pageSize).then((response) => {
      this.props.usersAdd(response.data.items);
      this.props.setIsFetching(false);
    });
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageTarget={this.onPageTarget}
        />
      </>
    );
  }
}

export default UsersComponenta;
