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
  console.log(props);
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
                        <Dialogs appState={props.store} store={props.store} />
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
