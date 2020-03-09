import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Col, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Card, ListGroup} from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

export class Contact extends React.Component {

    render() {
        return(
            <div>
                <div style={{'width':'50%','display':'inline-table', 'vertical-align' : 'middle', 'padding':'0% 5% 0% 5%', 'background':'#FAF0E6', 'margin':'2%'}}>
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
                <div style={{'width':'40%','display':'inline-table','vertical-align' : 'middle'}}>
                    <div>
                        <img src='./images/map.png' style={{'width' : '100%'}}/>
                    </div>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                            <FaMapMarkerAlt /><ListGroup.Item>Key Services<br />18 rue Léon Frot<br />75011 Paris</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}