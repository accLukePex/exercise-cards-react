import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Main/Loader/Loader";
import Navbar from "./components/TopBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Blog from "./components/Blog/Blog";
import WorkWithUs from "./components/Work/WorkWithUs";
import Bottombar from "./components/BottomBar/Bottombar";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula il caricamento iniziale con un ritardo
    setTimeout(() => {
      loadCards();
    }, 2000); // 2 secondi di ritardo
  }, []);

  const loadCards = () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the cat images:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="app">
      <header>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home initialCats={cats} />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
          </Routes>
        </Router>
      </header>
      <footer>
        <Bottombar />
      </footer>
    </div>
  );
}

export default App;
