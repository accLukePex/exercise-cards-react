import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Main/Loader/Loader";
import Navbar from "./components/TopBar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import MainComponent from "./components/Main/MainComponent";
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
        <Navbar />
        <Jumbotron />
      </header>
      <main>
        <MainComponent cats={cats} />
      </main>
      <footer>
        <Bottombar />
      </footer>
    </div>
  );
}

export default App;
