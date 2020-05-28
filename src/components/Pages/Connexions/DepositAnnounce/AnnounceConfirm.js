import React, {Component} from 'react';
import axios from 'axios';
import '../../../../css/Announce.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Button } from 'reactstrap';
import { Col, Row } from 'react-bootstrap';

export class AnnounceConfirm extends Component {

    constructor (props) {
        super(props)
      }

    continue = e => {
        var aValue = localStorage.getItem('id');

        const body = new FormData();
        // console.log(this.props.values.files.length);
        for(var x = 0; x<this.props.values.files.length; x++){
            // console.log(this.props.values.files[x]);
            body.append('file', this.props.values.files[x])
        }
        //ajout de photo utilise le append pour faire le format formDATA
        // file.append('ad_Id', 1);
        // for (var value of file.values()) {
        //     console.log(value); 
        // }
        // axios.post("http://localhost:3001/photo/savePhotos/",file);

        body.append('userId',aValue);

        body.append('address_road_number',this.props.values.address_road_number);
        body.append('address_road_type',this.props.values.address_road_type);
        body.append('address_road_name',this.props.values.address_road_name);
        body.append('address_additional_info',this.props.values.address_additional_info);
        body.append('address_state',this.props.values.address_state);
        body.append('address_city',this.props.values.address_city);
        body.append('address_zip_code',this.props.values.address_zip_code);

        body.append('equipment_kitchen',!!(this.props.values.equipment_kitchen)?1:0);
        body.append('equipment_heater',!!(this.props.values.equipment_heater)?1:0);
        body.append('equipment_wifi',!!(this.props.values.equipment_wifi)?1:0);
        body.append('equipment_iron', !!(this.props.values.equipment_iron)?1:0);
        body.append('equipment_working_space', !!(this.props.values.equipment_working_space)?1:0);
        body.append('equipment_private_bathroom',!!(this.props.values.equipment_private_bathroom)?1:0);
        body.append('equipment_shampoo',!!(this.props.values.equipment_shampoo)?1:0);
        body.append('equipment_air_conditioner', !!(this.props.values.equipment_air_conditioner)?1:0);
        body.append('equipment_hangers',!!(this.props.values.equipment_hangers)?1:0);
        body.append('equipment_hair_dryer',!!(this.props.values.equipment_hair_dryer)?1:0);
        body.append('equipment_television',!!(this.props.values.equipment_television)?1:0);

        body.append('installation_parking', !!(this.props.values.installation_parking)?1:0);
        body.append('installation_gym', !!(this.props.values.installation_gym)?1:0);
        body.append('installation_pool', !!(this.props.values.installation_pool)?1:0);
        body.append('installation_jaccuzi', !!(this.props.values.installation_jaccuzi)?1:0);

        body.append('info_infos', !!(this.props.values.info_infos)?1:0);
        body.append('info_availability', !!(this.props.values.info_availability)?1:0);
        body.append('info_area', !!(this.props.values.info_area)?1:0);
        body.append('info_around', !!(this.props.values.info_around)?1:0);
        body.append('info_stairs', !!(this.props.values.info_stairs)?1:0);
        body.append('info_noise', !!(this.props.values.info_noise)?1:0);
        body.append('info_pets', !!(this.props.values.info_pets)?1:0);
        body.append('info_no_parking', !!(this.props.values.info_no_parking)?1:0);
        body.append('info_shared_space', !!(this.props.values.info_shared_space)?1:0);
        body.append('info_equipment_restriction', !!(this.props.values.info_equipment_restriction)?1:0);
        body.append('info_monitoring_device', !!(this.props.values.info_monitoring_device)?1:0);
        body.append('info_weapons', !!(this.props.values.info_weapons)?1:0);
        body.append('info_dangerous_animals', !!(this.props.values.info_dangerous_animals)?1:0);

        body.append('age2', !!(this.props.values.rule_age_2)?1:0);
        body.append('age_2', !!(this.props.values.rule_age_2)?1:0);
        body.append('pets', !!(this.props.values.rule_age_2)?1:0);
        body.append('smoking', !!(this.props.values.rule_age_2)?1:0);
        body.append('event', !!(this.props.values.rule_age_2)?1:0);
        body.append('addrule', !!(this.props.values.rule_add)?this.props.values.rule_add:0);

        body.append('housing_type_property', this.props.values.housing_type_property);
        body.append('housing_type', this.props.values.housing_type);
        body.append('housing_nb_room', this.props.values.housing_nb_room);
        body.append('housing_nb_bathroom', this.props.values.housing_nb_bathroom);
        body.append('housing_observation', this.props.values.housing_observation);

        body.append('price_starting', this.props.values.price_starting);
        body.append('price_min', this.props.values.price_min);
        body.append('price_max', this.props.values.price_max);

        body.append('ad_title', this.props.values.ad_title);
        body.append('ad_description', this.props.values.ad_description);
        body.append('ad_capacity', this.props.values.ad_capacity);
        body.append('ad_notice', this.props.values.ad_notice);
        body.append('ad_arrival_time', this.props.values.ad_arrival_time);
        body.append('ad_departure_time', this.props.values.ad_departure_time);
        body.append('ad_min_night', this.props.values.ad_min_night);
        body.append('ad_max_night', this.props.values.ad_max_night);
        body.append('ad_starting_date', this.props.values.ad_starting_date);
        body.append('ad_ending_date', this.props.values.ad_ending_date);

        axios.post("http://localhost:3001/api/adcreate/",body).then(res=>{
            if(res.data.message == 'Ad was registered successfully!'){
                this.props.saveAd();
            }
        }).then(done=>{e.preventDefault();
            this.props.nextStep();});

       
        
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
                    price_starting, price_min, price_max, files, ad_id,
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
                            <ListItemText primary="N° de rue :" secondary={address_road_number}/> 
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
                            <ListItemText primary="Type de propriété :" secondary={housing_type_property} /> 
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
                            <ListItemText primary="Transport à proximité :" secondary={info_area}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Magasin à proximité :" secondary={info_around}/> 
                         </ListItem>

                         <ListItem>
                            <ListItemText primary="Ajouter une règle :" secondary={rule_add}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Informations utiles :" secondary={info_infos}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Disponibilité :" secondary={info_availability}/> 
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Aux alentours :" secondary={observation}/> 
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
                            <ListItemText primary="Date d'arrivée le :" secondary={ad_starting_date}/>

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