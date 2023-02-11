import "./App.css";
import "./reset.css";
import "./normalize.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { updateNewPost } from "./redux/redux-store";

// import "./img/fon";
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <wrapper className="wrapper">
          <Header />
          <main className="main">
            <div className="_container">
              <div className="main__body">
                <Navbar />
                <div className="main-content">
                  <Routes>
                    <Route
                      path="profile"
                      element={
                        <Profile
                          appState={props.state.profilePage}
                          dispatch={props.dispatch}
                        />
                      }
                    ></Route>
                    <Route
                      path="dialogs"
                      element={
                        <Dialogs
                          store={props.state.dialogsPage}
                          dispatch={props.dispatch}
                        />
                      }
                    ></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
