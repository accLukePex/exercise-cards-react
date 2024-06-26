import './Navbar.css';
import Links from './Navlinks';

function Navbar() {
    return (
        <nav>
            <div className="container">
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
            </div>
        </nav>
    )
}

export default Navbar;