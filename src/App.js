import './App.css';
import Landing from './components/Landing'

import {Route, HashRouter as Router, Switch} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path='/' component={Landing}/>
            </div>
        </Router>

    );
}

export default App;
