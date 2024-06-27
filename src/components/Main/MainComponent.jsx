import './MainComponent.css';
import Container from "../Container";

function MainComponent() {
    return (
        <Container>
            <div className='box-title'>
                <h2>Gatti in vendita a Milano</h2>
            </div>
            <div className='box-sub-title'>
                <h3>230 Gatti in vendita a Milano</h3>
            </div>
        </Container>
    )
}

export default MainComponent;