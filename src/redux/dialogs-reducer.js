const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MASSAGE = "UPDATE-NEW-MASSAGE";
let initialState = {
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
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE:
      state.newMessageText = action.body;
      return state;

    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MASSAGE, body: body };
};
export const sendMessageCreator = () => {
  return { type: ADD_MESSAGE };
};
export default dialogsReducer;
