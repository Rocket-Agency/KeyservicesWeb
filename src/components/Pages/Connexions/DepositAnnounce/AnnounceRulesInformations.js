import React, {Component} from 'react';
import '../../../../css/Announce.scss';
import ReactTooltip from "react-tooltip";
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
                                            data-tip="Escalier présent dans la propriété ?" 
                                            color="primary" />}
                                            defaultValue={values.info_stairs} 
                                            onChange={handleChange('info_stairs')}
                                            label="Escalier" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Animaux"  
                                            color="primary" />}
                                            data-tip="Animaux présent dans la propriété ?"
                                            defaultValue={values.info_pets} 
                                            onChange={handleChange('info_pets')}
                                            label="Animaux" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Pas de parking"
                                            data-tip="Pas de parking présent dans la propriété ?"  
                                            color="primary" />}
                                            defaultValue={values.info_no_parking} 
                                            onChange={handleChange('info_no_parking')}
                                            label="Pas de parking" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Espace partagé"  
                                            data-tip="La propriété contient des espaces partagés ?"  
                                            color="primary" />}
                                            defaultValue={values.info_shared_space} 
                                            onChange={handleChange('info_shared_space')}
                                            label="Espace partagé" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Restriction équipements"
                                            data-tip="Restriction de certain equipement au sein de la propriété ?"   
                                            color="primary" />}
                                            defaultValue={values.info_equipment_restriction} 
                                            onChange={handleChange('info_equipment_restriction')}
                                            label="Restriction équipements" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Vidéo surveillance"
                                            data-tip="Existe t'il un système de vidéo surveillance au sein de la propriété ?"  
                                            color="primary" />}
                                            defaultValue={values.info_monitoring_device} 
                                            onChange={handleChange('info_monitoring_device')}
                                            label="Vidéo surveillance" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Armes"  
                                            data-tip="Equipement dangereux ou armes présent au sein de la propriété ?"
                                            color="primary" />}
                                            defaultValue={values.info_weapons} 
                                            onChange={handleChange('info_weapons')}
                                            label="Armes" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Animaux dangereux"
                                            data-tip="Animaux dangereux présent au sein de la propriété ou au alentours ?"  
                                            color="primary" />}
                                            defaultValue={values.info_dangerous_animals} 
                                            onChange={handleChange('info_dangerous_animals')}
                                            label="Animaux dangereux" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Nuissance sonore" 
                                            data-tip="Nuissance sonore au alentours de la propriété ?" 
                                            color="primary" />}
                                            defaultValue={values.info_noise} 
                                            onChange={handleChange('info_noise')}
                                            label="Nuissance sonore" 
                                        />
                                        <ReactTooltip />
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
                                            data-tip="Le logement ne convient pas aux enfants de moin de 2 ans !" 
                                            color="primary" />}
                                            defaultValue={values.rule_age_2} 
                                            onChange={handleChange('rule_age_2')}
                                            label="Ne convient pas aux enfants de moins de 2 ans" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Ne convient pas à un enfant entre 2 et 12 ans"
                                            data-tip="Le logement ne convient pas aux enfants de moin agés de 2 à 12 ans !"  
                                            color="primary" />}
                                            defaultValue={values.rule_age_2_12} 
                                            onChange={handleChange('rule_age_2_12')}
                                            label="Ne convient pas à un enfant entre 2 et 12 ans" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Animaux autorisés"
                                            data-tip="Les animaux de compagnies sont les bienvenus"   
                                            color="primary" />}
                                            defaultValue={values.rule_pets} 
                                            onChange={handleChange('rule_pets')}
                                            label="Animaux autorisés" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Fumeurs autorisés" 
                                            data-tip="Propriéte fumeur !"    
                                            color="primary" />}
                                            defaultValue={values.rule_smoking} 
                                            onChange={handleChange('rule_smoking')}
                                            label="Fumeurs autorisés" 
                                        />
                                        <ReactTooltip />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Évènements autorisés" 
                                            data-tip="Les fêtes et les évènements sont autorisées !"  
                                            color="primary" />}
                                            defaultValue={values.rule_event} 
                                            onChange={handleChange('rule_event')}
                                            label="Évènements autorisés" 
                                        />
                                        <ReactTooltip />
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
                                        data-tip="souhaitez-vous ajouter en plus des régle propre à votre propriété ?"  
                                        rows="2"
                                        defaultValue={values.rule_add} 
                                        onChange={handleChange('rule_add')}
                                    />
                                    <ReactTooltip />
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
                                        data-tip="Merci de saisir si besoins vos disponibilité en temps que hôte."
                                        label="checkbox jour de la semaine"
                                        defaultValue={values.info_availability} 
                                        onChange={handleChange('info_availability')}
                                    />
                                    <ReactTooltip />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label>Aux alentours</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        data-tip="Centre d'interêt aux alentours."
                                        defaultValue={values.observation} 
                                        onChange={handleChange('observation')}
                                    />
                                    <ReactTooltip />
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