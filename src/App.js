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
import {LoginProprietaire} from './components/Pages/Connexions/SignIn/LoginProprietaire';
import {LoginLocataire} from './components/Pages/Connexions/SignIn/LoginLocataire';
import {ConnexionProfile} from './components/Pages/Connexions/ConnexionProfile';
import {Profile} from './components/Pages/Connexions/Profiles/Profile';
import {ProfileProprietaire} from './components/Pages/Connexions/Profiles/ProfileProprietaire';
import {ProfileLocataire} from './components/Pages/Connexions/Profiles/ProfileLocataire';

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
            <Route path='/loginProprietaire' component={LoginProprietaire} />
            <Route path='/loginLocataire' component={LoginLocataire} />
            <Route path='/profile' component={Profile} />
            <Route path='/profilePropriétaire' component={ProfileProprietaire} />
            <Route path='/profileLocataire' component={ProfileLocataire} />
          </Switch>

        <Footer/>
        
       </div>
    </Router>
  );
}

export default App;