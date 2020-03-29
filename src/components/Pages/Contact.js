import React, {Component} from 'react'

import {Form, Col, Container, Row, Button} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


import '../../css/Contact.scss';



export class Contact extends Component {
    render() {

        return(
            <div>
                <div className="mt-2 d-flex text-center justify-content-center">
                     <h1>On s’occupe de tous et vous de rien</h1>
                </div>
                <Container fluid>
                    <Row>

                        <Col md={6}>
                        
                            <div className="contact-bloc" >
                                <div className="d-flex text-center justify-content-center">
                                    <h2>Contactez nous !</h2>
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="formGridName">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control type="name" placeholder="Entrer votre nom" />
                                        </Form.Group>
                                    

                                        <Form.Group as={Col} md="6" controlId="formGridLastName">
                                        <Form.Label>Prénom</Form.Label>
                                        <Form.Control type="lastname" placeholder="Entrer votre prénom" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Entrer votre adresse email" />
                                        </Form.Group>
                                    

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Sujet</Form.Label>
                                            <Form.Control as="select">
                                                <option>Choisir un sujet...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}  controlId="votreMessage.ControlTextarea">
                                            <Form.Label>Votre message</Form.Label>
                                            <Form.Control as="textarea" rows="3" placeholder="Entrer votre message" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row class="mt-4">
 
                                        <Col xs={8} sm={12} className="d-flex justify-content-end align-items-center">
                                                <Hidden xs>
                                                <Button className="content-bouton" type="submit"> 
                                                    <Button id="btn-envoyer" type="submit">
                                                        <IoIosArrowForward /> 
                                                    </Button>
                                                    <Button id="envoyer" clasName="envoyer btn-envoyer">Envoyer
                                                    </Button>
                                                </Button>
                                                </Hidden>
                                                <Visible xs>
                                                    <Button id="envoyerMobile" type="submit">
                                                        <FaArrowRight/><a clasName="envoyer"> Envoyer</a>
                                                    </Button>
                                                </Visible>
                                            </Col>      

                                    </Form.Row>
                                </Form>
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