import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { BreadProvider } from './index'
import './App.scss';
import './index.css';

//Import component for Header & Footer
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import FilAriane from './components/Layout/FilAriane';

//Import pages
import {Home} from './components/Pages/Home';
import KeyservicesPresentation from './components/Pages/KeyservicesPresentation';

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
import NotFound from './components/Pages/NotFound';

//Deconnexion
import Deconnexion from './components/Pages/Deconnexion';

function App() {
  return (
    <>
        <BreadProvider >
          <>    
            <div className="page-container">
              <div className="content-wrap">
            <Header/>
            <FilAriane />

                <Switch>
                  <Route path='/' component={Home} exact />
                  <Route path='/keyservicesPresentation' component={KeyservicesPresentation} exact/>
                  <Route path='/contact' component={Contact} exact/>
                  <Route path='/validationContactForm' component={ValidationContactForm} exact/>
                  <Route path='/monEspace' component={MonEspace} exact/>
                  <Route path='/loginProprietaire' component={LoginProprietaire} exact/>
                  <Route path='/loginLocataire' component={LoginLocataire} exact/>
                  <Route path='/indexProfil' component={IndexProfil} />
                  <Route path='/profile' component={Profile} />
                  <Route path='/profilePropriétaire' component={ProfileProprietaire} />
                  <Route path='/profileLocataire' component={ProfileLocataire} />
                  <Route path='/inscriptionProprietaire' component={InscriptionProprietaire} />
                  <Route path='/forgetPassword' component={ForgetPassword} />
                  <Route path='/dashboard' component={ProfileTabs} />
                  <Route path='/deconnexion' component={Deconnexion} />
                  <Route component={NotFound} />
                </Switch>

              </div>

            <Footer/>
          </div>
          </>
        </BreadProvider>
    </>
  );
}

export default App;
