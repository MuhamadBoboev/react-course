import "./App.css";
import "./reset.css";
import "./normalize.css";

import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { Routes, Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/LoginContainer";
import { Login } from "./components/Login/Login-hookForm";
// import { MyEnhancedForm } from "./components/Login/LOGIN-formik";
function App() {
  return (
    <div className="App">
      <wrapper className="wrapper">
        <HeaderContainer />
        <main className="main">
          <div className="_container">
            <div className="main__body">
              <Navbar />
              <div className="main-content">
                <Routes>
                  <Route
                    path={`profile/`}
                    element={<ProfileContainer />}
                  ></Route>
                  <Route
                    path={`profile/:userID`}
                    element={<ProfileContainer />}
                  ></Route>
                  <Route path="dialogs" element={<DialogsContainer />}></Route>
                  <Route path="users" element={<UsersContainer />}></Route>
                  <Route path="login" element={<Login />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </main>
      </wrapper>
    </div>
  );
}

export default App;
