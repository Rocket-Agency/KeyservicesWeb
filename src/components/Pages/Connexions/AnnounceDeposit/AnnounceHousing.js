import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

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
                    <h2>Votre logement</h2>
                    <Container fluid>
                        <Form.Row>
                            <Form.Label className="d-flex align-items-center label-info-generales">
                                Type de propriété :
                            </Form.Label>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="Maison"
                                    control={<Radio color="primary" />}
                                    label="Maison"
                                    labelPlacement="start"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                />                                   
                                 <FormControlLabel
                                    value="Appartement"
                                    control={<Radio color="primary" />}
                                    label="Appartement"
                                    labelPlacement="start"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                />
                                <FormControlLabel
                                    value="Chambre"
                                    control={<Radio color="primary" />}
                                    label="Chambre"
                                    labelPlacement="start"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                 />
                                <FormControlLabel
                                    value="Auberge de jeunesse"
                                    control={<Radio color="primary" />}
                                    label="Auberge de jeunesse"
                                    labelPlacement="start"
                                    // defaultValue={values.sexe} 
                                    // onChange={handleChange('sexe')}
                                />
                            </RadioGroup>
                        </Form.Row>

                        <Form.Row>
                        <Form.Label className="d-flex align-items-center label-info-generales">
                            Type de logement :
                        </Form.Label>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="Logement entier"
                                    control={<Radio color="primary" />}
                                    label="Logement entier"
                                    labelPlacement="start"
                                />                               

                                 <FormControlLabel
                                    value="Chambre privé"
                                    control={<Radio color="primary" />}
                                    label="Chambre privé"
                                    labelPlacement="start"
                                />

                                <FormControlLabel
                                    value="Chambre partagée"
                                    control={<Radio color="primary" />}
                                    label="Chambre partagée"
                                    labelPlacement="start"
                                 />
                            </RadioGroup>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm={12} md={12} lg={4} controlId="formGridName">
                                <Form.Label column lg={6} className="d-flex align-items-center label-info-generales"> Nombre de chambre :</Form.Label>
                                <Form.Control name="fhousing_nb_room" type="number"  />
                            </Form.Group>

                            <Form.Group as={Col} sm={12} md={12} lg={5} controlId="formGridName">
                                <Form.Label column lg={6} className="d-flex align-items-center label-info-generales"> Nombre de salle de bain :</Form.Label>
                                <Form.Control name="housing_nb_bathroom" type="number" />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="TextareaObservation">
                                <Form.Label>Observation</Form.Label>
                                <Form.Control name="observation" as="textarea" rows="3"/>
                            </Form.Group>
                        </Form.Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceHousing;