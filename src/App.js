import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { BreadProvider } from './index';
import { BreadcrumbItem } from './index';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import './App.scss';
import './index.css';

//Import component for Header & Footer
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CGU from './components/Pages/CGU';

import FilAriane from './components/Layout/FilAriane';

//Import pages
import {Home} from './components/Pages/Home';
import KeyservicesPresentation from './components/Pages/KeyservicesPresentation';

import {Contact} from './components/Pages/Contact';

import {ValidationContactForm} from './components/Pages/Molecule/ValidationContactForm';
import {MonEspace} from './components/Pages/MonEspace';

//Connexion pages
import {LoginProprietaire} from './components/Pages/Connexions/Login/LoginProprietaire';
import {LoginLocataire} from './components/Pages/Connexions/Login/LoginLocataire';

import {ForgetPassword} from './components/Pages/Connexions/Profiles/ForgetPassword';

//Page d'inscription
import {InscriptionProprietaire} from './components/Pages/Connexions/SignUpProprietaire/InscriptionProprietaire';

//Dashboard
import ProfileTabs from './components/Pages/Dashboard';

//Deconnexion
import Deconnexion from './components/Pages/Molecule/Deconnexion';
import ConnexionConcierge from './components/AppKeyservicesGestion/ConnexionConcierge';
import HomepageApp from './components/LayoutApp/HomepageApp';
import MapApp from './components/LayoutApp/MapApp';
import SettingsApp from './components/LayoutApp/SettingsApp';
// import NotFound from './components/Pages/NotFound';

//Connexion
// import ConnexionC from './components/Mobile/ConnexionConcierge'

function App() {
  return (
    <>
        <BreadProvider >
          <>    
            <div className="page-container">
              <div className="content-wrap">
              <Header />
              <FilAriane />
              
                <Switch>
                  <Route path='/' component={Home} exact />
                  <Route path='/presentation' component={KeyservicesPresentation} exact/>
                  <Route path='/contact' component={Contact} exact/>
                  <Route path='/validationContactForm' component={ValidationContactForm} exact/>
                  <Route path='/monEspace' component={MonEspace} exact/>
                  <Route path='/loginProprietaire' component={LoginProprietaire} exact/>
                  <Route path='/loginLocataire' component={LoginLocataire} exact/>
                  <Route path='/inscriptionProprietaire' component={InscriptionProprietaire} />
                  <Route path='/forgetPassword' component={ForgetPassword} />
                  <Route path='/dashboard' component={ProfileTabs} />
                  <Route path='/deconnexion' component={Deconnexion} />
                  <Route path='/cgu' component={CGU} />
                  <Route path='/loginConcierge' component={ConnexionConcierge} />
                  <Route path='/homepageApp' component={HomepageApp} />
                  <Route path='/mapApp' component={MapApp} />
                  <Route path='/settingsApp' component={SettingsApp} />
                  
                  {/* <Route component={NotFound} /> */}
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
