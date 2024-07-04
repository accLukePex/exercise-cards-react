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
  return (
    <div className="app">
      <Router>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
        </Routes>
      </Router>

      <footer>
        <Bottombar />
      </footer>
    </div>
  );
}

export default App;
