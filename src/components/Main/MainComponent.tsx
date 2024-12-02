import "./MainComponent.css";
import Loader from "./Loader/Loader";
import "./Button.css";
import Container from "../Container";
import Cardlist from "./Cardlist/Cardlist";
import { Button } from "../../ui/style";

interface Cat {
  id: string;
  url: string;
}

interface MainComponentProps {
  cats: Cat[];
  isLoading?: boolean;
  loadMoreCards: () => void;
}

const MainComponent: React.FC<MainComponentProps> = ({
  cats,
  isLoading,
  loadMoreCards,
}) => {
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
        {!isLoading && (
          <Button className="load-more" onClick={() => loadMoreCards()}>
            Load More
          </Button>
        )}
        {isLoading && <Loader />}
      </div>
    </Container>
  );
};

export default MainComponent;
