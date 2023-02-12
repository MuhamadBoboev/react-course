import "./index.css";
// import store from "./redux/store-c";
// import store from "./redux/redux-store";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";
import { Provider } from "react-redux";
// import { addPost, updateNewPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
        {/* <Provider store={store}>
          <App />
        </Provider> */}
      </BrowserRouter>
    </React.StrictMode>
  );
};
reportWebVitals();

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
