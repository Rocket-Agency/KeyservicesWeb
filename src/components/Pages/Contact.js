import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, Col, Container, Row, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Card, ListGroup} from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

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
                        
                            <div className="contact-bloc" style={{'background':'#FAF0E6', 'padding': '40px 27px 41px' , 'margin-top': '30px', 'margin-left': '40px', 'margin-right': '27px'}}>
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
                                        <Form.Group as={Col}  controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Votre message</Form.Label>
                                            <Form.Control as="textarea" rows="3" placeholder="Entrer votre message" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </div>                        
                        </Col>


                        <Col md={6}>
                        <div style={{'width':'100%','display':'inline-table', 'vertical-align' : 'middle', 'padding':'0% 5% 0% 5%', 'background':'#FAF0E6', 'margin':'2%'}}>
                        <div className="mt-5 d-flex">
                            <h3>Contactez nous !</h3>
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <br />

                    </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}