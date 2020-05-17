import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Button } from 'reactstrap';
import { Col, Container, Row, Form } from 'react-bootstrap';

export class AnnounceConfirm extends Component {

    // state = {
    //     address_road_number: this.props.values.address_road_number,
    //     address_road_type: this.props.values.address_road_type,
    //     address_road_name: this.props.values.address_road_name,
    //     address_additional_info: this.props.values.address_additional_info,
    //     address_state: this.props.values.address_state,
    //     address_city: this.props.values.address_city,
    //     address_zip_code: this.props.values.address_zip_code,
    //   };


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
            values: { address_road_number, address_road_type, address_road_name, address_additional_info, address_state, address_city, address_zip_code }
          } = this.props;
        return(
            <MuiThemeProvider >
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <Row>
                            <Col sm>
                                <h2 className="title-form-Announce">1 - Votre addresse</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce">2 - Votre logement </h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce">3 - Règles et informations</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce">4 - Tarif</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce">5 - Votre annonce</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce title-form-Announce-active ">6 - Validation</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce">7 - Paiement</h2>
                            </Col>
                        </Row>
                        <h2>Adresse de votre logement</h2> 
                        <ListItem>
                            <ListItemText primary="N° de rue" secondary={address_road_number}/> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Type de rue :" secondary={address_road_type}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Nom de rue :" secondary={address_road_name} /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Information complémentaire :" secondary={address_additional_info}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Région :" secondary={address_state}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Ville :" secondary={address_city} /> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Code postal :" secondary={address_zip_code} /> 
                        </ListItem>
 
                        <br/>

                        <h2>Information de votre logement</h2>
                        <ListItem>
                            <ListItemText primary="Type de propriété" secondary={address_zip_code} /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Type de logement :" secondary={address_zip_code}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Nombre de chambre :" secondary={address_zip_code}/> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Nombre de salle de bain :" secondary={address_zip_code}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Observertion :" secondary={address_zip_code}/> 
                        </ListItem>

                        <br/>

                        <h2>Information de vos équipements et installation</h2>
                        <ListItem>
                            <ListItemText primary="Vos équipement :" secondary={address_zip_code}/> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Vos installations :" secondary={address_zip_code}/> 
                        </ListItem>

                        <br/>

                        <h2>Vos information et règles</h2>
                        <ListItem>
                            <ListItemText primary="Vos information complémentaire :" secondary={address_zip_code}/> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Vos règles :" secondary={address_zip_code}/> 
                        </ListItem>
                    </List>
                
                </React.Fragment>
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
            </MuiThemeProvider>
        )
    }
}

export default AnnounceConfirm;