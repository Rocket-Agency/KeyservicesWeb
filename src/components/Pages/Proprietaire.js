import React, {Component} from 'react';
import {Form, Col, Container, Row, Button} from 'react-bootstrap';

import '../../css/Proprietaire.scss';


export class Proprietaire extends Component {

    render() {
        return(
            <div>


                <Container fluid>
                    <Row>

                        <Col md={6}>
                        
                            <div className="contact-bloc" >
                            <div className="mt-5 d-flex justify-content-center">
                                <h3>Connexion</h3>
                            </div>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>                        
                        </Col>

                        <Col md={6}>
                                <Container fluid md={{ span: 6, offset: 3 }} className="contact-bloc-map">
                                     <img src='./images/map.png' className="map-contact" alt="map contact"/>
                                </Container>   
                     
                                <Row fluid="md" className="horizontal_lign" ></Row>

                                <Container className="contact-bloc-informations">
                                    <Row >
                                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                                            <Row> 
                                                <img src='./images/Icon_position.png' alt="adresse_keyservices"/>
                                            </Row>
                                         </Col>
                                        <Col xs={12} md={8} className="Position_informations d-flex">
                                            Rocket Agency - 18 rue Léon Frot - 75011 PARIS
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                                        <Row> 
                                            <img src='./images/Icon_email.png' alt="contact_keyservices"/>
                                        </Row>
                                         </Col>
                                        <Col xs={12} md={8} className="Position_informations d-flex">
                                            contact@keyservices.com
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                                        <Row> 
                                            <img src='./images/Icon_phone.png' alt="number"/>
                                        </Row>
                                         </Col>
                                        <Col xs={12} md={8} className="Position_informations d-flex">
                                            01.21.55.16.86
                                        </Col>
                                    </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}