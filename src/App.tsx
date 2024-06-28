import "./App.css";
import Navbar from "./components/TopBar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import MainComponent from "./components/Main/MainComponent";
import Bottombar from "./components/BottomBar/Bottombar";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Jumbotron />
      </header>
      <main>
        <MainComponent />
      </main>
      <footer>
        <Bottombar />
      </footer>
    </div>
  );
}

export default App;
