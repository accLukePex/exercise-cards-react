import './App.css';
import Navbar from './components/TopBar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';

function App() {
    return (
        <div className='app'>
            <header>
                <Navbar />
                <Jumbotron />
            </header>
            <main>

            </main>
            <footer>
                
            </footer>
        </div>
    );
}

export default App;
