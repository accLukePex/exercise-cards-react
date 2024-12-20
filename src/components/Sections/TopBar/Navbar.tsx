import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Container from "../../../ui/Container/Container";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <Container classname={styles.flex}>
        <div className="logo">
          <NavLink to="/">
            <i className="fa-solid fa-cat"></i>
            <span className="title">CATHOUSE</span>
          </NavLink>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work-with-us"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Work with us
              </NavLink>
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
