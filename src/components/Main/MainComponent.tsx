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
  isLoading?: boolean;
  loadMoreCards: () => void;
}

const MainComponent: React.FC<MainComponentProps> = ({
  cats,
  isLoading,
  loadMoreCards,
}) => {
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
        {!isLoading && <LoadMoreButton onClick={() => loadMoreCards()} />}
        {isLoading && <Loader />}
      </div>
    </Container>
  );
};

export default MainComponent;
