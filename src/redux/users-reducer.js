const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";
const PAGE_SIZE = "PAGE_SIZE";
const TOTAL_USER_COUNT = "TOTAL_USER_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 20,
  currentPage: 2,
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
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const usersAC = (users) => ({ type: "USERS", users });
export const pageSizeAC = (pages) => ({ type: "PAGE_SIZE", pages });
export const totalUserCountAC = (count) => ({
  type: "TOTAL_USER_COUNT",
  count,
});
export const currentPageAC = (page) => ({
  type: "CURRENT_PAGE",
  page,
});

export default usersReducer;
