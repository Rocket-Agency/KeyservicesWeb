import React from 'react';
import './App.scss';

//Import component for Header & Footer
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';


//Import pages
import {Home} from './components/Pages/Home';
import {KeyservicesPresentation} from './components/Pages/KeyservicesPresentation';
import {Contact} from './components/Pages/Contact';
import {ValidationContactForm} from './components/Pages/ValidationContactForm';
import {MonEspace} from './components/Pages/MonEspace';
import {ConnexionProprietaire} from './components/Pages/Connexions/ConnexionProprietaire';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
        <Header/>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/keyservicesPresentation' component={KeyservicesPresentation} />
            <Route path='/contact' component={Contact} />
            <Route path='/validationContactForm' component={ValidationContactForm} />
            <Route path='/monespace' component={MonEspace} />
            <Route path='/connexionProprietaire' component={ConnexionProprietaire} />
          </Switch>

          <Footer/>
        
       </div>
    </Router>
  );
}

export default App;