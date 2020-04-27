import React, { Component } from 'react'
import '../../../../css/InscriptionProprietaire.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


export class Success extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider > 
        <React.Fragment>
            <AppBar title="Success"/>
              <div className="text-center success">
                  <h1>Merci de votre inscription</h1>
                  <p>Vous recevrez un email de confirmation avec les instructions pour valider votre compte</p>
                     <div className="d-flex justify-content-center align-items-center">
                      <div id="container">                    
                        <button className="retour-login" aria-label="Retour à la page d'inscription">
                          <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                          </span>
                          <Link className="button-text" to="/loginProprietaire" aria-label="Retour page d'inscription">
                            Retourner à la page d'inscription
                          </Link>
                        </button>
                    </div>
                  </div>
              </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;