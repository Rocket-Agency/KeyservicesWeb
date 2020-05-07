import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Row, Col, Container, Form } from 'react-bootstrap';

export class AnnounceRulesInformations extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
            <Container fluid className="pt-4 blocForm" >  
                <h2>Imformations et Régles</h2>

                <Container fluid>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-generales">
                                    Règles :
                                </Form.Label>
                                <Col sm={4}>
                                     <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Ne convient pas aux enfants de moins de 2ans" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Ne convient pas à un enfant entre 2 et 12ans" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Animaux autorisé" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Fumeurs autorisé" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Évènement autorisé" />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <fieldset>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label className="label-info-generales">Ajouter une règle</Form.Label>
                                    <Form.Control name="observation" as="textarea" rows="3"/>
                                </Form.Group>
                            </Form.Row>
                        </fieldset>
                        <fieldset>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label className="label-info-generales">Informations utiles</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label className="label-info-generales">Disponibilité</Form.Label>
                                    <Form.Control type="text" label="checkbox jour de la semaine" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="TextareaObservation">
                                    <Form.Label className="label-info-generales">Au alentour</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                            </Form.Row>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-generales">
                                    Équipements :
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="À Proximité" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Escalier" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Animaux" />
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Pas da parking" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Espace partagé" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Restriction équipements" />
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Vidéo surveillance" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Armesr" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Animaux dangereux" />
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

export default AnnounceRulesInformations;