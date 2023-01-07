const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST:
      state.newPostText = action.text;
      console.log(state);
      return state;
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
