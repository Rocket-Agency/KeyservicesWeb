import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


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
              <div className="text-center">
                  <h1>Merci de votre inscription</h1>
                  <p>Vous recevrez un email de confirmation avec les instructions pour valider votre compte</p>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                     >
                      Button Link
                    </Link>
              </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;