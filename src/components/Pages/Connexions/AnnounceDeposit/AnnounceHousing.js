import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import 'react-phone-input-2/lib/bootstrap.css'


export class AnnounceHousing extends Component {
    
    render() {
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2 className="mb-4">Votre logement</h2>
                    <fieldset>
                    <Container fluid>
                        <Form.Row>
                            <Form.Label className="d-flex align-items-center label-info-annonce">
                                Type de propriété :
                            </Form.Label>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="Maison"
                                    control={<Radio color="primary" />}
                                    label="Maison"
                                    labelPlacement="start"
                                    name="housing_type_property"
                                    // defaultValue={values.sexe} 
                                    // onChange={handleChange('sexe')}
                                />                                   
                                 <FormControlLabel
                                    value="Appartement"
                                    control={<Radio color="primary" />}
                                    label="Appartement"
                                    labelPlacement="start"
                                    name="housing_type_property"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                />
                                <FormControlLabel
                                    value="Chambre"
                                    control={<Radio color="primary" />}
                                    label="Chambre"
                                    labelPlacement="start"
                                    name="housing_type_property"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                 />
                                <FormControlLabel
                                    value="Auberge de jeunesse"
                                    control={<Radio color="primary" />}
                                    label="Auberge de jeunesse"
                                    labelPlacement="start"
                                    name="housing_type_property"
                                    // defaultValue={values.sexe} 
                                    // onChange={handleChange('sexe')}
                                />
                            </RadioGroup>
                        </Form.Row>

                        <Form.Row>
                        <Form.Label className="d-flex align-items-center label-info-annonce">
                            Type de logement :
                        </Form.Label>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="Logement entier"
                                    control={<Radio color="primary" />}
                                    label="Logement entier"
                                    labelPlacement="start"
                                    name="housing_type"
                                />                               

                                 <FormControlLabel
                                    value="Chambre privé"
                                    control={<Radio color="primary" />}
                                    label="Chambre privé"
                                    labelPlacement="start"
                                    name="housing_type"
                                />

                                <FormControlLabel
                                    value="Chambre partagée"
                                    control={<Radio color="primary" />}
                                    label="Chambre partagée"
                                    labelPlacement="start"
                                    name="housing_type"
                                 />
                            </RadioGroup>
                        </Form.Row>

                        <Row>
                            <Col xs={12} md={6} >
                                <Form.Row>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={7} className="d-flex align-items-center label-info-annonce"> 
                                            Nombre de chambre :
                                        </Form.Label>
                                        <Col sm={4}>
                                            <Form.Control name="housing_nb_room" type="number"  />
                                        </Col>
                                </Form.Group>
                                </Form.Row>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Row>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={7} className="d-flex align-items-center label-info-annonce"> 
                                            Nombre de salle de bain :
                                        </Form.Label>
                                        <Col sm={4}>
                                            <Form.Control name="housing_nb_bathroom" type="number"  />
                                        </Col>
                                </Form.Group>
                                </Form.Row>
                            </Col>  
                        </Row> 

                        <Form.Row>
                            <Form.Group as={Col} controlId="TextareaObservation">
                                <Form.Label className="label-info-annonce">Observation</Form.Label>
                                <Form.Control name="housing_observation" as="textarea" rows="3"/>
                            </Form.Group>
                        </Form.Row>
                    </Container>
                    </fieldset>

                                              
                    <Container fluid>
                        <h2 className="mt-4 mb-4">Vos Équipements et installations</h2>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-annonce">
                                   Équipements :
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Cuisine" name="equipment_kitchen" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Chauffage" name="equipment_heater"/>
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Wifi" name="quipment_wifi"/>
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Fer à repasser" name="equipment_iron"/>
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Espace de travail" name="equipment_working_space" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Salle de bain privée" name="equipment_private_bathroom"/>
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Produits d'entretiens" name="equipment_shampoo" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Climatiseur" name="equipment_air_conditioner"/>
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Cintres" name="equipment_hangers" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Sèche cheveux" name="equipment_hair_dryer"/>
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Télévision" name="equipment_television"/>
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-annonce">
                                    Installations :
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Parking" name="installation_parking" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Salle de sport/ Équipement musculaire" name="installation_gym" />
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Piscine" name="installation_pool"/>
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Jaccuzi" name="installation_jaccuzi" />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceHousing;