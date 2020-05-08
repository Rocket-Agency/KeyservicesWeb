import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Button } from 'reactstrap';

export class AnnounceConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider >
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <h2>Votre addresse</h2> 
                        <ListItem>
                            <ListItemText primary="N° de rue" /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Type de rue :" /> 
                        </ListItem>
            
                        {/* <ListItem>
                        <ListItemText primary="Prénom" secondary={first_name} /> 
                        </ListItem>
            
                        <ListItem>
                        <ListItemText primary="Tel" secondary={tel} /> 
                        </ListItem>
            
                        <ListItem>
                        <ListItemText primary="Date de naissance" secondary={dateOfBirth} /> 
                        </ListItem> */}
                        <br/>
                        <h2>Information de votre adresse</h2>
                        {/* <ListItem>
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
                        /> */}
                    </List>
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default AnnounceConfirm;