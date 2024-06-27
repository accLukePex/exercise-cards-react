import './Bottombar.css';
import Container from '../Container';

function Bottombar() {
    return (
        <div className='footer'>
            <Container>
                <div className="row-footer">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Privacy police</a></li>
                            <li><a href="#">Affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Order status</a></li>
                            <li><a href="#">Payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online shop</h4>
                        <ul>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">Bag</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className='social-links'>
                            <a href="www.facebook.com"><i className='fab fa-facebook-f'></i></a>
                            <a href="www.twitter.com"><i className='fab fa-twitter'></i></a>
                            <a href="www.instagram.com"><i className='fab fa-instagram'></i></a>
                            <a href="wwww.linkedin.com"><i className='fab fa-linkedin-in'></i></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Bottombar;