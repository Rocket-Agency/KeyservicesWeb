//IndexProfil.js
import React, {Component} from 'react';
import '../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Card, Form} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom';

export class InscriptionProprietaire extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                   <h3>Inscription</h3>
                 </div>

                <Container fluid className="mt-5 d-flex justify-content-center searchCityFields">

                        <Form.Row className="d-flex justify-content-center">
                            <Form.Group as={Col} md="2" controlId="formGridCity">
                            <Form.Label>Votre ville</Form.Label> 
                            <Form.Control name="ville" type="text" placeholder="Entrez votre ville"/>
                            </Form.Group>
                        </Form.Row>

                        <div id="container">                    
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                 <span className="button-text">Valider la ville</span>
                            </button>
                         </div>                        
                </Container>


                <Container>
                    <h2>Information  Générales</h2>
                    <Row>
                        <Col  xs={12} md={6} className="col">
                            <Row>
                                <Col  xs={12} md={6} className="col">Column Nom</Col>
                                <Col  xs={12} md={6} className="col">Column champs nom</Col>
                            </Row>
                        </Col>
                        <Col  xs={12} md={6} className="col">
                            <Row>
                                <Col  xs={12} md={6} className="col">Column Prnom</Col>
                                <Col  xs={12} md={6} className="col">Column champs Prénom</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs={12} md={6} className="col">Column Numéro de téléphone</Col>
                        <Col  xs={12} md={6} className="col">Column Date de naissance</Col>
                    </Row>
                    <Row>
                        <Col  xs={12} md={6} className="col">Column Adresse mail</Col>
                        <Col  xs={12} md={6} className="col">ColumnComfirmation de votre adresse email</Col>
                    </Row>
                </Container>

                <Container>
                    <h2>Information sur votre location</h2>
                    <Row>
                        <Col  xs={12} md={6} className="col">Column Votre adresse de location</Col>
                        <Col  xs={12} md={6} className="col">Column Code postal</Col>
                    </Row>
                    <Row>
                        <Col  xs={12} md={6} className="col">Column Quel est le lien de votre location </Col>
                    </Row>
                    <Row>
                        <Col  xs={12} md={6} className="col">Column Adresse mail</Col>
                        <Col  xs={12} md={6} className="col">ColumnComfirmation de votre adresse email</Col>
                    </Row>
                </Container>

                <Container>
                    <h2>Information sur votre connexion</h2>
                    <Row>
                        <Col  xs={12} md={6} className="col">Column Mot de passe</Col>
                        <Col  xs={12} md={6} className="col">Column Comfirmation de votre mot de passe</Col>
                    </Row>

                </Container>
            </div>
        )
    }
}