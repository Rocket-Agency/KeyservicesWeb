import React, { Component } from 'react';
import axios from 'axios';
import '../../../../css/InscriptionProprietaire.scss';

import { Col } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Button } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class Confirm extends Component {

  constructor(props) {
    super(props);
  }

  continue = e => {
    axios.post("http://localhost:3001/api/auth/signup",
        {
            first_name: this.props.values.first_name,
            last_name: this.props.values.last_name,
            birth: this.props.values.dateOfBirth,
            sexe: this.props.values.sexe,
            photo: 'test.png',
            email: this.props.values.email,
            password: this.props.values.password,
            adresse: this.props.values.factureAdress + this.props.values.zipCode,
            groups: ["proprietaire"]
        }
      )
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { sexe, first_name, last_name, tel, dateOfBirth, factureAdress, zipCode, email, password }
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
              <ListItemText primary="Nom" secondary={last_name} /> 
            </ListItem>

            <ListItem>
              <ListItemText primary="Prénom" secondary={first_name} /> 
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

            <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
          </List>
          <br />
        
          <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-3"> 
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              aria-label="Retour"
              >Retour</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              aria-label="Confirmer et valider l'inscription"
             > Confirmer & Valider l'inscription</Button>
          </Col>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;