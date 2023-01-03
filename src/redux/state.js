let state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Anton" },
      { id: 2, name: "Roman" },
      { id: 3, name: "Sasha" },
      { id: 4, name: "Filip" },
      { id: 5, name: "Kirill" },
      { id: 6, name: "Sergey" },
    ],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Yo" },
      { id: 3, message: "aslo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "loser" },
      { id: 6, message: "Yo" },
    ],
  },
  profilePage: {
    posts: [
      { message: "Hi, a am student", likesCount: 20 },
      { message: "Hey, why nobody love me?", likesCount: 2 },
      { message: "Hi, m asad", likesCount: 2 },
      { message: "y love me?", likesCount: 22 },
      { message: "Hi, ", likesCount: 2 },
      { message: "Hey, why nobody love me?", likesCount: 2 },
      { message: "Hey, why nobody love me?", likesCount: 200 },
    ],
  },
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
};

export default state;
