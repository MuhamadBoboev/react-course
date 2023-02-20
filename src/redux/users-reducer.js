const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";

let initialState = {
  users: [],
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
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const usersAC = (users) => ({ type: "USERS", users });

export default usersReducer;
