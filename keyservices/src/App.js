import React, {Components} from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {Accueil} from './components/Accueil';
import {Contact} from './components/Contact';
import {KeyservicesPresentation} from './components/KeyservicesPresentation';
import {MonEspace} from './components/MonEspace';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button'


function App() {
  return (
    <Router>
    <div className="container">
      
      <Switch>
        <Route path='/' component={Accueil} exact />
        <Route path='/contact' component={Contact} />
        <Route path='/keyservicesPresentation' component={KeyservicesPresentation} />
        <Route path='/monespace' component={MonEspace} />
      </Switch>

    </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1>Accueil</h1>
//   </div>
// )


export default App;
