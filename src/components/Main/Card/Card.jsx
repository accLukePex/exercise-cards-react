import './Card.css';

const Card = ({ url }) => {
    return (
        <div className="card">
            <img src={url} alt="Cat" tabIndex="0" />
        </div>
    );
};

export default Card;