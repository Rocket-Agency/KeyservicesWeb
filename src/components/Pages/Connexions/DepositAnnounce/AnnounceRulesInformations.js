import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class AnnounceRulesInformations extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

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
                            <h2 className="title-form-Announce">7 - Paiement</h2>
                        </Col>
                    </Row>
                <h2 className="mb-4">Imformations et Régles</h2>

                    <Container fluid>
                        <fieldset>
                            <Form.Group as={Row} className="mt-4">
                                <Form.Label column sm={2} className="label-info-annonce">
                                    Informations :
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
                                            value="Pas da parking"  
                                            color="primary" />}
                                            defaultValue={values.info_no_parking} 
                                            onChange={handleChange('info_no_parking')}
                                            label="Pas da parking" 
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
                                    Règles :
                                </Form.Label>
                                <Col sm={4}>
                                     <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Ne convient pas aux enfants de moins de 2ans"  
                                            color="primary" />}
                                            defaultValue={values.rule_age_2} 
                                            onChange={handleChange('rule_age_2')}
                                            label="Ne convient pas aux enfants de moins de 2ans" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Ne convient pas à un enfant entre 2 et 12ans"  
                                            color="primary" />}
                                            defaultValue={values.rule_age_2_12} 
                                            onChange={handleChange('rule_age_2_12')}
                                            label="Ne convient pas à un enfant entre 2 et 12ans" 
                                        />
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Animaux autorisé"  
                                            color="primary" />}
                                            defaultValue={values.rule_pets} 
                                            onChange={handleChange('rule_pets')}
                                            label="Animaux autorisé" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Fumeurs autorisé"  
                                            color="primary" />}
                                            defaultValue={values.rule_smoking} 
                                            onChange={handleChange('rule_smoking')}
                                            label="Fumeurs autorisé" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Évènement autorisé"  
                                            color="primary" />}
                                            defaultValue={values.rule_event} 
                                            onChange={handleChange('rule_event')}
                                            label="Évènement autorisé" 
                                        />
                                        <Form.Check 
                                        type="checkbox" 
                                        label="Évènement autorisé" 
                                        defaultValue={values.rule_event} 
                                        onChange={handleChange('rule_event')}
                                    />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                   Transport à proximité :
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
                                    Magasins à proximité :
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
                                    <Form.Label>Au alentour</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        defaultValue={values.observation} 
                                        onChange={handleChange('observation')}
                                    />
                                </Form.Group>
                            </Form.Row>
                        </fieldset>
                             <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-4"> 
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
                                    aria-label="Continuer"
                                    >Continuer</Button>
                            </Col>
                    </Container>
                </Container>
            </div>

        )
    }
}

export default AnnounceRulesInformations;