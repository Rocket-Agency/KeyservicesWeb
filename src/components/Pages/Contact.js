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
                    
                        <div style={{'background':'#FAF0E6', 'padding': '40px 20px', 'margin-top': '30px', 'margin-left': '40px', 'margin-right': '27px'}}>
                            <div className="d-flex text-center justify-content-center">
                                <h2>Contactez nous !</h2>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>





                        </div>                        
                    </Col>


                    <Col md={6}>
                    <div style={{'width':'100%','display':'inline-table', 'vertical-align' : 'middle', 'padding':'0% 5% 0% 5%', 'background':'#FAF0E6', 'margin':'2%'}}>
                    <div className="mt-5 d-flex">
                        <h3>Contactez nous !</h3>
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <br />
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}