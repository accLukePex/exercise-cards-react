import "./Jumbotron.css";
import Container from "../Container";
import styles from "../TopBar/Navbar.module.css";

interface JumbotronProps {
  imageUrl: string;
  text: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ imageUrl, text }) => {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Container classname={styles.flex}>
        <div className="main-title">{text}</div>
      </Container>
    </div>
  );
};

export default Jumbotron;
