import { profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_STATUS = "SET_STATUS";
const SET_ADD = "SET_ADD";

let initialState = {
  posts: [
    { message: "Hi, a am student", likesCount: 20 },
    { message: "Hey, why nobody love me?", likesCount: 2 },
    { message: "Hi, m asad", likesCount: 2 },
    { message: "y love me?", likesCount: 22 },
    { message: "Hi, ", likesCount: 2 },
    { message: "Hey, why nobody love me?", likesCount: 2 },
    { message: "Hey, why nobody love me?", likesCount: 200 },
  ],
  newPostText: "asd",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case SET_ADD: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST",
  text: text,
});

export const profileAdd = (profile) => ({
  type: "SET_ADD",
  profile,
});
export const setStatus = (status) => ({
  type: "SET_STATUS",
  status,
});
export const profileAPI = (userId) => (dispatch) => {
  return profileApi.getProfile(userId).then((response) => {
    dispatch(profileAdd(response.data));
  });
};
export const getStatusAPI = (userId) => (dispatch) => {
  return profileApi.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatusAPI = (status) => (dispatch) => {
  return profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
