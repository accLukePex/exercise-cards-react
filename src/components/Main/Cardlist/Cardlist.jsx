import Card from '../Card/Card';
import './Cardlist.css';

const Cardlist = ({ cats }) => {
    return (
        <div className="row">
            {cats.map(cat => (
                <Card key={cat.id} url={cat.url} />
            ))}
        </div>
    );
};

export default Cardlist;