import React, { useState, useEffect } from "react";
import "./MainComponent.css";
import Container from "../Container";
import Cardlist from "./Cardlist/Cardlist";

function MainComponent() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
      })
      .catch((error) => {
        console.error("Error fetching the cat images:", error);
      });
  };

  return (
    <Container>
      <div className="box-title">
        <h2>Gatti in vendita a Milano</h2>
      </div>
      <div className="box-sub-title">
        <h3>230 Gatti in vendita a Milano</h3>
      </div>

      <Cardlist cats={cats} />
    </Container>
  );
}

export default MainComponent;
