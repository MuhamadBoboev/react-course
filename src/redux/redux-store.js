import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
