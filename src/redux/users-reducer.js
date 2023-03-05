import { usersApi, followingApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";
const PAGE_SIZE = "PAGE_SIZE";
const TOTAL_USER_COUNT = "TOTAL_USER_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 40,
  totalUserCount: 20,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [28255],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        followed: false,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case USERS: {
      return {
        ...state,
        // users: [...state.users, ...action.users],
        users: [...action.users],
      };
    }
    case PAGE_SIZE: {
      return { ...state, pageSize: action.pages };
    }
    case TOTAL_USER_COUNT: {
      return { ...state, totalUserCount: action.count };
    }
    case CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const usersAdd = (users) => ({ type: USERS, users });
export const pageSizeFn = (pages) => ({ type: PAGE_SIZE, pages });
export const totalUserCountFn = (count) => ({
  type: TOTAL_USER_COUNT,
  count,
});
export const currentPageFn = (page) => ({
  type: CURRENT_PAGE,
  page,
});
export const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFolowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});
export const getUsers = (pageSize, totalUserCount) => {
  return (dispatch) => {
    // dispatch(setIsFetching(true));
    // debugger;
    usersApi.getUsers(pageSize, totalUserCount).then((response) => {
      dispatch(usersAdd(response.data.items));
      dispatch(totalUserCountFn(response.data.totalCount));
      dispatch(setIsFetching(false));
    });
  };
};

export const followTh = (userId) => {
  return (dispatch) => {
    dispatch(toggleFolowingInProgress(true, userId));
    followingApi.deleteFollowing(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleFolowingInProgress(false, userId));
    });
  };
};
export const unfollowTh = (userId) => {
  return (dispatch) => {
    dispatch(toggleFolowingInProgress(true, userId));
    followingApi.postFollowing(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleFolowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
