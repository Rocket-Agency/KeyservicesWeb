import React, {Component} from 'react'
// import { Link } from 'react-router-dom';

import {Form, Col, Container, Row, Button, ListGroup, Card} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';

//icons
import { FaMapMarkerAlt } from 'react-icons/fa';
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
                                <Container md={{ span: 6, offset: 3 }} className="contact-bloc-map">
                                     <img src='./images/map.png' className="map-contact" alt="map contact"/>
                                </Container>   
                     
                                <Row fluid="md" >Ligne</Row>

                                <Container className="contact-bloc-informations">
                                    <Row >
                                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                                            <Row> Icon position</Row>
                                         </Col>
                                        <Col xs={12} md={8} className="Position_informations d-flex">
                                            Rocket Agency - 18 rue Léon Frot - 75011 PARIS
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                                            <Row>Icon Mail</Row>
                                         </Col>
                                        <Col xs={12} md={8} className="Position_informations d-flex">
                                            contact@keyservices.com
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                                            <Row>Icon Tel</Row>
                                         </Col>
                                        <Col xs={12} md={8} className="Position_informations d-flex">
                                            01.21.55.16.86
                                        </Col>
                                    </Row>
                                </Container>


                                    {/* <Row className="contact-bloc-informations">
                                        <Col sm={3} className="d-flex justify-content-center">
                                            Icon Mail
                                        </Col>

                                        <Col sm={9} className="d-flex justify-content-center">
                                            contact@keyservices.com
                                        </Col>
                                    </Row>

                                    <Row className="contact-bloc-informations">
                                        <Col sm={3} className="d-flex justify-content-center">
                                            Icon Tel
                                        </Col>

                                        <Col sm={9} className="d-flex justify-content-center">
                                            01.21.55.16.86
                                        </Col>
                                    </Row> */}


                                {/* <Row>
                                    <Col xs={6}>xs=6</Col>
                                    <Col xs={6}>xs=6</Col>
                                </Row>                                */}
                                {/* <Row className="contact-bloc-informations d-flex justify-content-center" > */}
                                    {/* <Col md={4} sm={12} className="d-flex justify-content-center">
                                        Icone Position
                                    </Col>
                                    <Col md={8} sm={12} className="d-flex justify-content-center">
                                        <p>
                                            Rocket Agency - 18 rue Léon Frot - 75011 PARIS
                                        </p>
                                    </Col>
                                 </Row>
                                 <Row>
                                    <Col md={4} className="d-flex justify-content-center">
                                        Icone Mail
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-center">
                                        <p>
                                            contact@keyservices.com
                                        </p>
                                    </Col>
                                 </Row> */}
                                        {/* <Col md={4} sm={12} className="d-flex justify-content-center">
                                            Icone Position
                                        </Col>

                                        <Col md={8} sm={12} className="d-flex justify-content-center">
                                            <p>
                                                Rocket Agency - 18 rue Léon Frot - 75011 PARIS
                                            </p>
                                        </Col>

                                        <Col md={4} className="d-flex justify-content-center">
                                            Icone Mail
                                        </Col>

                                        <Col md={8} className="d-flex justify-content-center">
                                            <p>
                                                contact@keyservices.com
                                            </p>
                                        </Col>
                                        <Col md={4} className="d-flex justify-content-center">Icone Mail</Col>
                                        <Col md={8} className="d-flex justify-content-center">
                                            <p>
                                                01.21.55.16.86
                                            </p>
                                        </Col> */}
                            
                            
                            {/* <div>
                                <div>
                                    <Card style={{ width: '18rem' }}>
                                        <ListGroup variant="flush">
                                        <FaMapMarkerAlt /><ListGroup.Item>Key Services<br />18 rue Léon Frot<br />75011 Paris</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}