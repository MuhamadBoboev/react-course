import "./App.css";
import "./reset.css";
import "./normalize.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./img/fon";

function App() {
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
                    <Route path="profile" element={<Profile />}></Route>
                    <Route path="dialogs" element={<Dialogs />}></Route>
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
