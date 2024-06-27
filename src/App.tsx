import './App.css';
import Navbar from './components/TopBar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import MainComponent from './components/Main/MainComponent';

function App() {
    return (
        <div className='app'>
            <header>
                <Navbar />
                <Jumbotron />
            </header>
            <main>
                <MainComponent />
            </main>
            <footer>
                
            </footer>
        </div>
    );
}

export default App;
