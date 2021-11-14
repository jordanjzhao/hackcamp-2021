import './App.css';
import Landing from './components/Landing'
import icon from './assets/icon.png'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={icon} className="App-logo" alt="logo" />
                <h1><i>Welcome to Lippie</i></h1>
                <Landing/>
            </header>
        </div>
    );
}

export default App;
