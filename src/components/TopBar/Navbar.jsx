import './Navbar.css';
import Links from './Navlinks';
import Container from '../Container';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav>
            <Container className={styles.flex}>
                <div className="logo">
                    <i class="fa-solid fa-cat"></i>
                    <span className="title">CATHOUSE</span>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <Links name="Home"/>
                        </li>
                        <li>
                            <Links name="About" />
                        </li>
                        <li>
                            <Links name="Gallery"/>
                        </li>
                        <li>
                            <Links name="Blog"/>
                        </li>
                        <li>
                            <Links name="Work with us"/>
                        </li>
                    </ul>
                </div>
                <div className="log-in-button">
                    <a href="#">Log In</a>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;