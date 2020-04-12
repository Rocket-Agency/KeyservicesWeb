import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
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
    const {
      values: { sexe, firstName, lastName, tel, dateOfBirth, factureAdress, postCode, email, password }
    } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <h2>Information générale</h2>
            <ListItem>
              <ListItemText primary="Civilité" secondary={sexe} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Nom" secondary={lastName} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Prénom" secondary={firstName} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Tel" secondary={tel} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Date de naissance" secondary={dateOfBirth} /> 
            </ListItem>
            <br/>
            <h2>Information de votre adresse</h2>
            <ListItem>
              <ListItemText primary="Adresse de facturation" secondary={factureAdress} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Code postale" secondary={postCode} /> 
            </ListItem>

            <h2>Information de connexion</h2>
            <ListItem>
              <ListItemText primary="Emai" secondary={email} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Mot de passe" secondary={password} /> 
            </ListItem>
          </List>
          <br />
        
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirmer & Continuer</Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;