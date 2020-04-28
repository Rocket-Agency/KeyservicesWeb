import React from 'react';
import {Switch, Route} from 'react-router-dom';
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
import {ForgetPassword} from './components/Pages/Connexions/Profiles/ForgetPassword';

//Page d'inscription
import {InscriptionProprietaire} from './components/Pages/Connexions/SignUpProprietaire/InscriptionProprietaire';

//Dashboard
import ProfileTabs from './components/Pages/Dashboard';

//Error
import NotFound from './components/NotFound';
import Sticky from 'react-sticky-el';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">

      <Header/>

      {/* <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb> */}

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
          <Route path='/forgetPassword' component={ForgetPassword} />
          <Route path='/dashboard' component={ProfileTabs} />
          <Route component={NotFound} />
        </Switch>

      </div>

      <Footer/>
    </div>
  );
}

export default App;
