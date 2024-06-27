import './Jumbotron.css';
import Container from '../Container';
import styles from '../TopBar/Navbar.module.css';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <Container className={styles.flex}>
                <div className="main-title">
                    Find Your Perfect Feline Friend: <br /> Adorable Kittens Awaiting <br /> Their Forever Home!
                </div>
            </Container>
        </div>
    )
}

export default Jumbotron;