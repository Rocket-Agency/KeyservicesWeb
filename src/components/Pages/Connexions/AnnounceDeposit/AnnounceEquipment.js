import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';

import 'react-phone-input-2/lib/bootstrap.css'


export class AnnounceEquipement extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2>Équipements et installations</h2>
  
                    <Container fluid>
                
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-generales">
                                    Équipements :
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Cuisine" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Chauffage" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Wifi" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Fer à repasser" />
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Espace de travail" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Salle de bain privée" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Produits d'entretiens" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Climatiseur" />
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Cintres" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Sèche cheveux" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Télévision" />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-generales">
                                    Vos installations :
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Parking" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Salle de sport/ Équipement musculaire" />
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Piscine" />
                                    </Form.Group>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Jaccuzi" />
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

export default AnnounceEquipement;