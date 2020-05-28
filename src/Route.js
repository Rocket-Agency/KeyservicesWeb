import React, {Component} from 'react';
import { Switch, Route } from 'react-router';

//Import component for Header & Footer
import CGU from './components/Pages/CGU';

//Import pages
import {Home} from './components/Pages/Home';
import KeyservicesPresentation from './components/Pages/KeyservicesPresentation';

import {Contact} from './components/Pages/Contact';

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

//Application
import ConnexionConcierge from './components/AppKeyservicesGestion/ConnexionConcierge';
import HomepageApp from './components/AppKeyservicesGestion/LayoutApp/HomepageApp';
import MapApp from './components/AppKeyservicesGestion/LayoutApp/MapApp';
import SettingsApp from './components/AppKeyservicesGestion/LayoutApp/SettingsApp';
import TasksApp from './components/AppKeyservicesGestion/LayoutApp/TasksApp';
import ProfilUserConcierge from './components/AppKeyservicesGestion/LayoutApp/ProfilUserConcierge';
import LogoutApp from './components/AppKeyservicesGestion/LayoutApp/LogoutApp';

import NotFound from './components/Pages/NotFound';

function Routing (){
    return(
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/presentation' component={KeyservicesPresentation} exact/>
            <Route path='/contact' component={Contact} exact/>
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
            <Route path='/tasksApp' component={TasksApp} />
            <Route path='/settingsApp' component={SettingsApp} />
            <Route path='/profilUserConcierge' component={ProfilUserConcierge} />
            <Route path='/logoutApp' component={LogoutApp} />
            <Route component={NotFound} />
          </Switch>
      )
}

export default Routing