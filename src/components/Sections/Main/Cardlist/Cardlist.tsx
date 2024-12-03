import Card from "../Card/Card";
import "./Cardlist.css";

interface Cat {
  id: string;
  url: string;
}

interface CardlistProps {
  cats: Cat[];
}

const Cardlist: React.FC<CardlistProps> = ({ cats }) => {
  return (
    <div className="row">
      {cats.map((cat) => (
        <Card key={cat.id} url={cat.url} />
      ))}
    </div>
  );
};

export default Cardlist;
