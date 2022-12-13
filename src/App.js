import "./App.css";
import "./reset.css";
import "./normalize.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";

// import "./img/fon";

function App() {
  return (
    <div className="App">
      <wrapper className="wrapper">
        <Header />
        {/* <Header /> */}
        <main className="main">
          <div className="_container">
            <div className="main__body">
              <Navbar />
              <Profile />
            </div>
          </div>
        </main>
      </wrapper>
    </div>
  );
}

export default App;
