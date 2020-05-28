import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class AnnounceRulesInformations extends Component {
    constructor(props){
        super(props)
    }
    values = {
        info_stairs: '',
        info_pets: '',
        info_no_parking: '',
        info_shared_space: '',
        info_equipment_restriction: '',
        info_monitoring_device: '',
        info_weapons: '',
        info_dangerous_animals: '',
        info_noise: '',
    
        rule_age_2: '',
        rule_age_2_12: '',
        rule_pets: '',
        rule_smoking: '',
        rule_event: '',
    
        info_area: '',
        info_around: '',
        rule_add: '',
        info_infos: '',
        info_availability: '',
        observation: ''
    }

    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <Row>
                        <Col sm>
                            <h2 className="title-form-Announce">1 - Votre addresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">2 - Votre logement </h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce title-form-Announce-active ">3 - Règles et informations</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">4 - Tarif</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">5 - Votre annonce</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">6 - Validation</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">7 - Nos services</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce ">8 - Paiement</h2>
                        </Col>
                    </Row>
                <h2 className="mb-4">Informations et Règles</h2>

                    <Container fluid>
                        <fieldset>
                            <Form.Group as={Row} className="mt-4">
                                <Form.Label column sm={2} className="label-info-annonce">
                                    Informations
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Escalier"  
                                            color="primary" />}
                                            defaultValue={values.info_stairs} 
                                            onChange={handleChange('info_stairs')}
                                            label="Escalier" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Animaux"  
                                            color="primary" />}
                                            defaultValue={values.info_pets} 
                                            onChange={handleChange('info_pets')}
                                            label="Animaux" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Pas de parking"  
                                            color="primary" />}
                                            defaultValue={values.info_no_parking} 
                                            onChange={handleChange('info_no_parking')}
                                            label="Pas de parking" 
                                        />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Espace partagé"  
                                            color="primary" />}
                                            defaultValue={values.info_shared_space} 
                                            onChange={handleChange('info_shared_space')}
                                            label="Espace partagé" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Restriction équipements"  
                                            color="primary" />}
                                            defaultValue={values.info_equipment_restriction} 
                                            onChange={handleChange('info_equipment_restriction')}
                                            label="Restriction équipements" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Vidéo surveillance"  
                                            color="primary" />}
                                            defaultValue={values.info_monitoring_device} 
                                            onChange={handleChange('info_monitoring_device')}
                                            label="Vidéo surveillance" 
                                        />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Armes"  
                                            color="primary" />}
                                            defaultValue={values.info_weapons} 
                                            onChange={handleChange('info_weapons')}
                                            label="Armes" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Animaux dangereux"  
                                            color="primary" />}
                                            defaultValue={values.info_dangerous_animals} 
                                            onChange={handleChange('info_dangerous_animals')}
                                            label="Animaux dangereux" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Nuissance sonore"  
                                            color="primary" />}
                                            defaultValue={values.info_noise} 
                                            onChange={handleChange('info_noise')}
                                            label="Nuissance sonore" 
                                        />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row} className="mt-4">
                                <Form.Label column sm={2} className="label-info-annonce">
                                    Règles
                                </Form.Label>
                                <Col sm={4}>
                                     <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Ne convient pas aux enfants de moins de 2 ans"  
                                            color="primary" />}
                                            defaultValue={values.rule_age_2} 
                                            onChange={handleChange('rule_age_2')}
                                            label="Ne convient pas aux enfants de moins de 2 ans" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Ne convient pas à un enfant entre 2 et 12 ans"  
                                            color="primary" />}
                                            defaultValue={values.rule_age_2_12} 
                                            onChange={handleChange('rule_age_2_12')}
                                            label="Ne convient pas à un enfant entre 2 et 12 ans" 
                                        />
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Animaux autorisés"  
                                            color="primary" />}
                                            defaultValue={values.rule_pets} 
                                            onChange={handleChange('rule_pets')}
                                            label="Animaux autorisés" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Fumeurs autorisés"  
                                            color="primary" />}
                                            defaultValue={values.rule_smoking} 
                                            onChange={handleChange('rule_smoking')}
                                            label="Fumeurs autorisés" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Évènements autorisés"  
                                            color="primary" />}
                                            defaultValue={values.rule_event} 
                                            onChange={handleChange('rule_event')}
                                            label="Évènements autorisés" 
                                        />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                   Transports à proximité
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="TextareaObservation">
                                        <Form.Control 
                                            type="text" 
                                            defaultValue={values.info_area} 
                                            onChange={handleChange('info_area')}
                                        />
                                        </Form.Group>
                                    </Form.Row>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>
                                    Magasins à proximité
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="TextareaObservation">
                                            <Form.Control 
                                                type="text" 
                                                defaultValue={values.info_around} 
                                                onChange={handleChange('info_around')} 
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label>Ajouter une règle</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows="2"
                                        defaultValue={values.rule_add} 
                                        onChange={handleChange('rule_add')}
                                    />
                                </Form.Group>
                            </Form.Row>
                        </fieldset>
                        <fieldset>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label>Informations utiles</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        defaultValue={values.info_infos} 
                                        onChange={handleChange('info_infos')}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label>Disponibilité</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        label="checkbox jour de la semaine"
                                        defaultValue={values.info_availability} 
                                        onChange={handleChange('info_availability')}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label>Aux alentours</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        defaultValue={values.observation} 
                                        onChange={handleChange('observation')}
                                    />
                                </Form.Group>
                            </Form.Row>
                        </fieldset>
                    </Container>
                </Container>
            </div>

        )
    }
}

export default AnnounceRulesInformations;