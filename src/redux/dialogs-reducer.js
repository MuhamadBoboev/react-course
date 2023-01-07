const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MASSAGE = "UPDATE-NEW-MASSAGE";

const dialogsReducer = (state, action) => {
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
export const sendMessageCreator = (textMessage) => {
  return { type: ADD_MESSAGE };
};
export default dialogsReducer;
