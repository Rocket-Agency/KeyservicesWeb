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
            values: { address_road_number, address_road_type, address_road_name, address_additional_info, address_state, address_city, address_zip_code, 
                    housing_type_property, housing_type, housing_nb_room, housing_nb_bathroom, housing_observation,
                    equipment_kitchen, equipment_heater, equipment_wifi, equipment_iron, equipment_working_space, equipment_private_bathroom, equipment_shampoo, equipment_air_conditioner, equipment_hangers, equipment_hair_dryer, equipment_television,
                    installation_parking, installation_gym, installation_pool, installation_jaccuzi,
                    info_stairs, info_pets, info_no_parking, info_shared_space, info_equipment_restriction, info_monitoring_device, info_weapons, info_dangerous_animals, info_noise,
                    rule_age_2, rule_age_2_12, rule_pets, rule_smoking, rule_event, rule_add,
                    info_area, info_around, info_infos, info_availability, observation,
                    price_starting, price_min, price_max,
                    ad_title, ad_description, ad_capacity, ad_notice, ad_arrival_time, ad_departure_time, ad_min_night, ad_max_night, ad_starting_date, ad_ending_date
            }
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
                                <h2 className="title-form-Announce title-form-Announce-active">6 - Validation</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce">7 - Nos services</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce ">8 - Paiement</h2>
                            </Col>
                            <Col sm>
                                <h2 className="title-form-Announce">9 - Paiement</h2>
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
                            <ListItemText primary="Type de propriété" secondary={housing_type_property} /> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Type de logement :" secondary={housing_type}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Nombre de chambre :" secondary={housing_nb_room}/> 
                        </ListItem>
            
                        <ListItem>
                            <ListItemText primary="Nombre de salle de bain :" secondary={housing_nb_bathroom}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Observertion :" secondary={housing_observation}/> 
                        </ListItem>

                        <br/>

                        <h2>Vos équipements et installation</h2>

                        <ListItem>
                            Vos équipements : 
                            <ListItemText secondary={equipment_kitchen} /> 
                            <ListItemText secondary={equipment_heater}/> 
                            <ListItemText secondary={equipment_wifi}/> 
                            <ListItemText secondary={equipment_iron}/> 
                            <ListItemText secondary={equipment_working_space}/> 
                            <ListItemText secondary={equipment_private_bathroom}/> 
                            <ListItemText secondary={equipment_shampoo}/> 
                            <ListItemText secondary={equipment_air_conditioner}/> 
                            <ListItemText secondary={equipment_hangers}/> 
                            <ListItemText secondary={equipment_hair_dryer}/> 
                            <ListItemText secondary={equipment_television}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Vos installations :" secondary={installation_parking}/> 
                            <ListItemText secondary={installation_gym}/> 
                            <ListItemText secondary={installation_pool}/> 
                            <ListItemText secondary={installation_jaccuzi}/> 
                        </ListItem>
                        <br/>

                        <h2>Vos informations et règles</h2>           
                        <ListItem>
                            <ListItemText primary="Vos informations :" secondary={info_stairs}/> 
                            <ListItemText secondary={info_pets}/> 
                            <ListItemText secondary={info_no_parking}/> 
                            <ListItemText secondary={info_shared_space}/> 
                            <ListItemText secondary={info_equipment_restriction}/> 
                            <ListItemText secondary={info_monitoring_device}/> 
                            <ListItemText secondary={info_weapons}/> 
                            <ListItemText secondary={info_dangerous_animals}/> 
                            <ListItemText secondary={info_noise}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Vos règles :" secondary={rule_age_2}/> 
                            <ListItemText secondary={rule_age_2_12}/> 
                            <ListItemText secondary={rule_pets}/> 
                            <ListItemText secondary={rule_smoking}/> 
                            <ListItemText secondary={rule_event}/> 
                            <ListItemText secondary={rule_add}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Transport à proximité" secondary={info_area}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Magasin à proximité:" secondary={info_around}/> 
                         </ListItem>

                         <ListItem>
                            <ListItemText primary="Ajouter une règle:" secondary={rule_add}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Informations utiles:" secondary={info_infos}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Disponibilité:" secondary={info_availability}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Au alentour:" secondary={observation}/> 
                        </ListItem>

                        <br/>

                        <h2>Tarif choisi</h2>           

                        <ListItem>
                            <ListItemText primary="Prix de base :" secondary={price_starting}/> 

                            <ListItemText primary="Prix minimum :" secondary={price_min}/> 

                            <ListItemText primary="Prix maximum :" secondary={price_max}/> 
                        </ListItem>

                        <br/>

                        <h2>Services sélectionner</h2>           

                            <ListItem>
                                <ListItemText primary="Prix de base :" secondary={price_starting}/> 

                                <ListItemText primary="Prix minimum :" secondary={price_min}/> 

                                <ListItemText primary="Prix maximum :" secondary={price_max}/> 
                            </ListItem>

                            <br/>

                        <h2>Votre annonce</h2>    
                        <ListItem>
                            <ListItemText primary="Titre de l'annonce :" secondary={ad_title}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Description de l'annonce :" secondary={ad_description}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Capacité d'accueil :" secondary={ad_capacity}/> 

                            <ListItemText primary="Préavis :" secondary={ad_notice}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Nuit minimum :" secondary={ad_min_night}/>

                            <ListItemText primary="Nuit maximum :" secondary={ad_max_night}/>       
                        </ListItem>

                         <ListItem>
                            <ListItemText primary="Date d'arrivée le" secondary={ad_starting_date}/>

                            <ListItemText primary="Heure d'arrivée à :" secondary={ad_arrival_time}/>  
                            
                            <ListItemText primary="Date de départ :" secondary={ad_ending_date}/>

                            <ListItemText primary="Heure départ :" secondary={ad_departure_time}/> 
                        </ListItem>
                    </List>
                
                </React.Fragment>
                <Row xs={12} md={12} className="d-flex justify-content-center pt-3 pb-3">


                    <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                    aria-label="Confirmer et valider l'inscription"
                    > Confirmer & Valider l'inscription</Button>
                </Row>
            </MuiThemeProvider>
        )
    }
}

export default AnnounceConfirm;