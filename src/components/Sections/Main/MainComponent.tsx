import "./MainComponent.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../../store/thunkCalls";
import { AppDispatch, RootState } from "../../../store/store";
import Loader from "../../../ui/Loader/Loader";
import "./Button.css";
import Container from "../../../ui/Container/Container";
import Cardlist from "../../../ui/Cardlist/Cardlist";
import { Button } from "../../../ui/style";

const MainComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cards, isLoading } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchCards());
    }
  }, [cards, dispatch]);

  const loadMoreCards = () => {
    dispatch(fetchCards());
  };

  return (
    <Container>
      <div className="box-title">
        <h2>Gatti in vendita a Milano</h2>
      </div>
      <div className="box-sub-title">
        <h3>230 Gatti in vendita a Milano</h3>
      </div>
      <Cardlist cats={cards} />

      <div className="load-more-container">
        {!isLoading && (
          <Button className="load-more" onClick={loadMoreCards}>
            Load More
          </Button>
        )}
        {isLoading && <Loader />}
      </div>
    </Container>
  );
};

export default MainComponent;
