//App;js
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

//Connexion pages
import {LoginProprietaire} from './components/Pages/Connexions/Login/LoginProprietaire';
import {LoginLocataire} from './components/Pages/Connexions/Login/LoginLocataire';
import {IndexProfil} from './components/Pages/Connexions/Profiles/IndexProfil';
import {Profile} from './components/Pages/Connexions/Profiles/Profile';
import {ProfileProprietaire} from './components/Pages/Connexions/Profiles/ProfileProprietaire';
import {ProfileLocataire} from './components/Pages/Connexions/Profiles/ProfileLocataire';

//Page d'inscription
import {InscriptionProprietaire} from './components/Pages/Connexions/InscriptionProprietaire';

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
            <Route path='/indexProfil' component={IndexProfil} />
            <Route path='/profile' component={Profile} />
            <Route path='/profilePropriétaire' component={ProfileProprietaire} />
            <Route path='/profileLocataire' component={ProfileLocataire} />
            <Route path='/inscriptionProprietaire' component={InscriptionProprietaire} />
          </Switch>

        <Footer/>
        
       </div>
    </Router>
  );
}

export default App;
