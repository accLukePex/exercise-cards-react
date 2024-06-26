import './Jumbotron.css';
import jumbotronImage from '../../assets/Jumbotron-image.jpg';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <img src={jumbotronImage} alt="immagine gatto per il jumbotron inziale" />
            
            <div className="main-title">
                Find Your Perfect Feline Friend: <br /> Adorable Kittens Awaiting <br /> Their Forever Home!
            </div>
        </div>
    )
}

export default Jumbotron;