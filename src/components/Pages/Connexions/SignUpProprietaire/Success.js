import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
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
            <h1 className="ttitle_Form">Merci de votre inscription</h1>
            <p className="">Vous recevrez un email de confirmation avec les instructions pour valider votre compte</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
