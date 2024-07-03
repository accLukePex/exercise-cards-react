import React, { useState } from "react";
import "./MainComponent.css";
import Loader from "./Loader/Loader";
import "./Button.css";
import Container from "../Container";
import Cardlist from "./Cardlist/Cardlist";

interface Cat {
  id: string;
  url: string;
}

interface MainComponentProps {
  cats: Cat[];
}

const MainComponent: React.FC<MainComponentProps> = ({ cats: initialCats }) => {
  const [cats, setCats] = useState(initialCats);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMoreCards = () => {
    setLoadingMore(true);
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCats((prevCats) => [...prevCats, ...data]);
        setLoadingMore(false);
      })
      .catch((error) => {
        console.error("Error fetching the cat images:", error);
        setLoadingMore(false);
      });
  };

  const LoadMoreButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <button className="load-more" onClick={onClick}>
        Load More
      </button>
    );
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

      <div className="load-more-container">
        {!loadingMore && <LoadMoreButton onClick={loadMoreCards} />}
        {loadingMore && <Loader />}
      </div>
    </Container>
  );
};

export default MainComponent;
