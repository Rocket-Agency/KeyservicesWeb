import React, { Component } from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Button } from 'reactstrap';

export class Confirm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { sexe, firstName, lastName, tel, dateOfBirth, factureAdress, zipCode, email, password }
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
              <ListItemText primary="Code postale" secondary={zipCode} /> 
            </ListItem>
            <br/>
            <h2>Information de connexion</h2>
            <ListItem>
              <ListItemText primary="Emai" secondary={email} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Mot de passe" secondary={password} /> 
            </ListItem>
          </List>
          <br />
        
          <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-3"> 
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
             > Confirmer & Valider l'inscription</Button>
          </Col>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;