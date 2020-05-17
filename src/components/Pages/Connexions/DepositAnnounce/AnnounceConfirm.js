import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Button } from 'reactstrap';
import { Col, Container, Row, Form } from 'react-bootstrap';

export class AnnounceConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider >
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <h2>Adresse de votre logement</h2> 
                        <ListItem>
                            <ListItemText primary="N° de rue" /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Type de rue :" /> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Nom de rue :" /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Information complémentaire :" /> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Région :" /> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Ville :" /> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Code postal :" /> 
                        </ListItem>
 
                        <br/>

                        <h2>Information de votre logement</h2>
                        <ListItem>
                            <ListItemText primary="Type de propriété" /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Type de logement :" /> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Nombre de chambre :" /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Nombre de salle de bain :" /> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Observertion :" /> 
                        </ListItem>

                        <br/>

                        <h2>Information de vos équipements et installation</h2>
                        <ListItem>
                            <ListItemText primary="Vos équipement :" /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Vos installations :" /> 
                        </ListItem>

                        <br/>

                        <h2>Vos information et règles</h2>
                        <ListItem>
                            <ListItemText primary="Vos information complémentaire :" /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Vos règles :" /> 
                        </ListItem>

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
                    <Row xs={12} md={12} className="d-flex justify-content-center pt-3 pb-3">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.continue}
                                aria-label="Continuer"
                                >Continuer
                            </Button>
                        </Row>
            </MuiThemeProvider>
        )
    }
}

export default AnnounceConfirm;