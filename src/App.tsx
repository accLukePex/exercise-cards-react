import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Sections/TopBar/Navbar";
import Bottombar from "./components/Sections/BottomBar/Bottombar";
import Home from "./components/Home/Home";
import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Gallery from "./components/Pages/Gallery/Gallery";
import WorkWithUs from "./components/Pages/Work/WorkWithUs";

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
