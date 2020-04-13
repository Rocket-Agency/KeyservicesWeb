import React, { Component } from 'react'
import '../../../../css/InscriptionProprietaire.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Button } from 'react-bootstrap';


export class Success extends Component {
    // Proceed to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
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
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                     >
                      Button Link
                    </Link>

                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.continue}
                      >Retourner à la page d'inscription
                    </Button>
              </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;