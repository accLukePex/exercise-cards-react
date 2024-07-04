import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from "../Container";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <Container classname={styles.flex}>
        <div className="logo">
          <i className="fa-solid fa-cat"></i>
          <span className="title">CATHOUSE</span>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/work-with-us">Work with us</Link>
            </li>
          </ul>
        </div>
        <div className="log-in-button">
          <a href="#">Log In</a>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
