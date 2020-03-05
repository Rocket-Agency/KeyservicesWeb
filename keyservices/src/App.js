import React from 'react';
import './App.css';
import Navigation from './Layout/Navigation';
import {Accueil} from './components/Accueil';
import {Contact} from './components/Contact';
import {KeyservicesPresentation} from './components/KeyservicesPresentation';
import {MonEspace} from './components/MonEspace';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="container">
      
      <h3 className="m-3 d-flex justify-content-center">
      Test
      </h3>
      <h5 className="m-3 d-flex justify-content-center">
      Voici le site keyservices
      </h5>

    <Navigation/>

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

export default App;
