import React, { useEffect } from "react";
import Jumbotron from "../../ui/Jumbotron/Jumbotron";
import MainComponent from "../Sections/Main/MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../store/cardsSlice";
import { AppDispatch, RootState } from "../../store/store";

const Home: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cards, isLoading } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const loadMoreCards = () => {
    dispatch(fetchCards());
  };

  return (
    <>
      <Jumbotron
        imageUrl="/assets/jumbotron-home.jpg"
        text="Find Your Perfect Feline Friend: Adorable Kittens Awaiting Their Forever Home!"
      />
      <MainComponent
        cats={cards}
        isLoading={isLoading}
        loadMoreCards={loadMoreCards}
      />
    </>
  );
};

export default Home;
