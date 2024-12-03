import React, { useEffect, useState } from "react";
import Jumbotron from "../../ui/Jumbotron/Jumbotron";
import MainComponent from "../Sections/Main/MainComponent";

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
        console.error("Error fetching the cat images:", error);
        setIsLoading(false);
        return error;
      });
  };

  useEffect(() => {
    loadCards().then((catsResponse: any) => setCats([...catsResponse]));
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
          loadCards().then((catsResponse: any) =>
            setCats([...cats, ...catsResponse])
          );
        }}
      />
    </>
  );
};

export default Home;
