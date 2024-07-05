import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/TopBar/Navbar";
import Bottombar from "./components/BottomBar/Bottombar";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import WorkWithUs from "./components/Work/WorkWithUs";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
        </Routes>
      </main>
      <footer>
        <Bottombar />
      </footer>
    </div>
  );
}

export default App;
