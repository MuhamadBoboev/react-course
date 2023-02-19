import "./App.css";
import "./reset.css";
import "./normalize.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <wrapper className="wrapper">
        <Header />
        <main className="main">
          <div className="_container">
            <div className="main__body">
              <Navbar />
              <div className="main-content">
                <Routes>
                  <Route path="profile" element={<Profile />}></Route>
                  <Route path="dialogs" element={<DialogsContainer />}></Route>
                  <Route path="users" element={<UsersContainer />}></Route>
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
