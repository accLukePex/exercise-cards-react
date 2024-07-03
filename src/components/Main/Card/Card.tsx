import "./Card.css";

interface CardProps {
  url: string;
}

const Card: React.FC<CardProps> = ({ url }) => {
  return (
    <div className="card">
      <img src={url} alt="Cat" tabIndex={0} />
    </div>
  );
};

export default Card;
