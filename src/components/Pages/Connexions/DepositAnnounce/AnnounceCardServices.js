import React from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import ListGroup from 'react-bootstrap/ListGroup';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function AnnounceCardServices() {
    return (
        <Accordion style={{borderTop : 'transparent'}}>
            <RadioGroup col aria-label="position" name="position" defaultValue="top">
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton className="d-flex justify-content-center" style={{border : '2px solid #49173B'}}>
                        <Container className="moveBloc">
                            <FormControlLabel
                                value="Services à la carte"
                                control={<Radio color="primary" />}
                                label="Maison"
                                labelPlacement="end"
                                label="Services à la carte"
                                // defaultValue={values.sexe} 
                                // onChange={handleChange('sexe')}
                            />  
                        </Container>

                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{border : '1px solid #49173B'}}>
                    <Container className="pt-2 pb-2">
                        <Row className="d-flex justify-content-center">
                            <Col md={8}>
                                <FormControlLabel
                                    control={<Checkbox
                                    value="1- Mise en ligne de l'annonce "  
                                    // defaultValue={values.equipment_kitchen} 
                                    // onChange={handleChange('equipment_kitchen')} 
                                    color="primary" />}
                                    label="1- Mise en ligne de l'annonce (Services obligatoire et doit être payé à la fin de la commande)"
                                />
                            </Col>
                             <Col md={4} className="d-flex justify-content-center align-items-center">
                                <Form.Row> 
                                    <div>9,90€</div>
                                </Form.Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-2 pb-2">
                        <Row className="d-flex justify-content-center">
                            <Col md={8}>
                                <FormControlLabel
                                    control={<Checkbox
                                    value="2- Remise des clés"  
                                    // defaultValue={values.equipment_kitchen} 
                                    // onChange={handleChange('equipment_kitchen')} 
                                    color="primary" />}
                                    label="2- Remise des clés (Services optionnelle)"
                                />
                            </Col>
                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <Form.Row> 
                                    <div>15,90€</div>
                                </Form.Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-2 pb-2">
                        <Row className="d-flex justify-content-center">
                            <Col md={8}>
                                <FormControlLabel
                                    control={<Checkbox
                                    value="3- Check-in/ Check-out"  
                                    // defaultValue={values.equipment_kitchen} 
                                    // onChange={handleChange('equipment_kitchen')} 
                                    color="primary" />}
                                    label="3- Check-in/ Check-out (Services optionnelle, service 'Remise des clés' compris)"
                                />
                            </Col>
                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <Form.Row> 
                                    <div>29,90€</div>
                                </Form.Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-2 pb-2">
                        <Row className="d-flex justify-content-center">
                            <Col md={8}>
                                <FormControlLabel
                                    control={<Checkbox
                                    value="4- Remplissage du frigo"  
                                    // defaultValue={values.equipment_kitchen} 
                                    // onChange={handleChange('equipment_kitchen')} 
                                    color="primary" />}
                                    label="4- Remplissage du frigo (Services optionnelle)"
                                />
                            </Col>

                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <Form.Row> 
                                    <div>24,90€</div>
                                </Form.Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="pt-2 d-flex justify-content-center">
                            <Col md={12}>
                                <FormControlLabel
                                    control={<Checkbox
                                    value="4- Remplissage du frigo"  
                                    // defaultValue={values.equipment_kitchen} 
                                    // onChange={handleChange('equipment_kitchen')} 
                                    color="primary" />}
                                    label="5- Ménage (Services optionnelle)"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <Row> 
                                    <div>Superficie de -25m2 = 24,90€</div>
                                </Row>
                                <Row> 
                                    <div>Superficie de 26m2 à 49m2 = 24,90€</div>
                                </Row>
                                <Row> 
                                    <div>Superficie de 50m2 à 75m2</div>
                                </Row>
                                <Row> 
                                    <div>Superficie de 75m2 et + </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                         <Row className="d-flex justify-content-center">
                            <Col md={8} >
                                <RadioGroup col aria-label="position" name="position" defaultValue="top">
                                    <FormControlLabel
                                        value="- 25m2"
                                        control={<Radio color="primary" />}
                                        labelPlacement="end"
                                        label="- 25m2"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                    />  
                                    <FormControlLabel
                                        value="26m2 à 49m2"
                                        control={<Radio color="primary" />}
                                        labelPlacement="end"
                                        label="26m2 à 49m2"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                    />  
                                    <FormControlLabel
                                        value="50m2 à 75m2"
                                        control={<Radio color="primary" />}
                                        labelPlacement="end"
                                        label="50m2 à 75m2"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                    /> 
                                    <FormControlLabel
                                        value="75m2 et +"
                                        control={<Radio color="primary" />}
                                        labelPlacement="end"
                                        label="75m2 et +"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                    /> 
                                </RadioGroup>
                            </Col>

                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <ListGroup>
                                    <ListGroup.Item className='priceStyle'>
                                        24,90€
                                    </ListGroup.Item>

                                    <ListGroup.Item className='priceStyle'>
                                        35,90€
                                    </ListGroup.Item>

                                    <ListGroup.Item className='priceStyle'>
                                        54,90€
                                    </ListGroup.Item>

                                    <ListGroup.Item className='priceStyle'>
                                        54,90€ + 6,90
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="d-flex justify-content-center" style={{border : '2px solid #49173B'}}>
                        <Container className="moveBloc">
                            <FormControlLabel
                                value=" Pack sérinité"
                                control={<Radio color="primary" />}
                                labelPlacement="end"
                                label="Pack sérinité"
                                // defaultValue={values.sexe} 
                                // onChange={handleChange('sexe')}
                            />  
                        </Container>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{border : '1px solid #49173B'}}>
                    <Container>
                        <Row className="pt-2 pb-2 d-flex justify-content-center">
                            <Col md={8}>
                                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                    <FormControlLabel
                                        value="- 25m2"
                                        control={<Radio color="primary" />}
                                        labelPlacement="end"
                                        label="Mise en ligne de l'annonce"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                    />   
                                </RadioGroup>
                                     <p className="serviceTitleSerinity">+ Check-in/ Check-out</p>
                                    <p className="serviceTitleSerinity">+ Ménage</p>
                             </Col>
                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <Form.Group controlId="Announce_ad_description">
                                    <Form.Row> 
                                        <div>25% à 35%/ séjours (en fonction du m2</div>
                                    </Form.Row>
                                </Form.Group>
                            </Col>
                        </Row>
                     </Container>
                 </AccordionItemPanel>
                </AccordionItem>
            </RadioGroup>
        </Accordion>
    );
}