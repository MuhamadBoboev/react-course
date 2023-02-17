const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

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

      return stateCopy;
    case UPDATE_NEW_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.text;
      return stateCopy;
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

export default profileReducer;
