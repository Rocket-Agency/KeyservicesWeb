import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import {Form, Col, Container, Row, Button} from 'react-bootstrap';
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

                                    <Form.Row class="mt-3">
 
                                        <Col xs={8} sm={12} className="d-flex justify-content-end align-items-center">
                                                <Hidden xs>
                                                <Button className="content-bouton" type="submit"> 
                                                    <Button id="btn-envoyer" type="submit">
                                                        <IoIosArrowForward /> 
                                                    </Button>
                                                    <Link clasName="envoyer btn-envoyer">Envoyer
                                                    </Link>
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
                            <div className="mt-5 d-flex">
                                <h3>Contactez nous !</h3>
                            </div>


                            <Link to={`/ValidationContactForm`}>
                                <span className="pull-xs-right">
                                Test
                                </span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}