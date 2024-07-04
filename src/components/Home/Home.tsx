import MainComponent from "../Main/MainComponent";
import Jumbotron from "../Jumbotron/Jumbotron";
import React, { useEffect, useState } from "react";
import Loader from "../Main/Loader/Loader";

const Home: React.FC<{}> = () => {
  const [cats, setCats] = useState<any[]>([]);
  const [loadingMore, setIsLoading] = useState(false);

  const loadCards = () => {
    setIsLoading(true);
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        return data;
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  };

  useEffect(() => {
    loadCards().then((catsResponse) => setCats([...catsResponse]));
  }, []);

  return (
    <>
      <Jumbotron
        imageUrl="/assets/jumbotron-home.jpg"
        text="Find Your Perfect Feline Friend: Adorable Kittens Awaiting Their Forever Home!"
      />
      <MainComponent
        cats={cats}
        isLoading={loadingMore}
        loadMoreCards={() => {
          loadCards().then((catsResponse) =>
            setCats([...cats, ...catsResponse]),
          );
        }}
      />
    </>
  );
};

export default Home;
