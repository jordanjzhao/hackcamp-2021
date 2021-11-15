import {Route, HashRouter as Router, Switch} from 'react-router-dom';

import './App.css';

import Landing from './components/Landing'
import Login from "./components/Login"
import Home from "./components/Home"
import Register from "./components/Register"
import Preferences from "./components/Preferences"
import Personalization from "./components/Personalization"
import Slider from "./components/Slider"


function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path='/' component={Landing}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/preferences' component={Preferences}/>
                <Route exact path='/personalization' component={Personalization}/>
                <Route exact path='/slider' component={Slider}/>

            </div>
        </Router>

    );
}

export default App;
