import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import ListGroup from 'react-bootstrap/ListGroup'

export class AnnounceServices extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <Row>
                        <Col sm>
                            <h2 className="title-form-Announce">1 - Votre addresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">2 - Votre logement </h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">3 - Règles et informations</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">4 - Tarif</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">5 - Votre annonce</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">6 - Validation</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce title-form-Announce-active">7 - Nos services</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce ">8 - Paiement</h2>
                        </Col>
                    </Row>
                    <h2>Nos Services</h2>
  
                    <Container fluid className="ServicesOptions">
                        <Row className="pt-2 pb-4 d-flex justify-content-center">
                            <h3>Services à la carte</h3>
                        </Row>


                            <Container className="pt-2 pb-2">
                                <Row className="d-flex justify-content-center">
                                    <Col md={8}>
                                        <FormControlLabel
                                            control={<Checkbox
                                            value="Cuisine"  
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
                                            value="Cuisine"  
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
                                            value="Cuisine"  
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
                                            value="Cuisine"  
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
                                        <p className="serviceTitle">5- Ménage (Services optionnelle)</p>
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
                                                label="Maison"
                                                labelPlacement="end"
                                                label="- 25m2"
                                                // defaultValue={values.sexe} 
                                                // onChange={handleChange('sexe')}
                                            />  
                                            <FormControlLabel
                                                value="26m2 à 49m2"
                                                control={<Radio color="primary" />}
                                                label="Maison"
                                                labelPlacement="end"
                                                label="26m2 à 49m2"
                                                // defaultValue={values.sexe} 
                                                // onChange={handleChange('sexe')}
                                            />  
                                            <FormControlLabel
                                                value="50m2 à 75m2"
                                                control={<Radio color="primary" />}
                                                label="Maison"
                                                labelPlacement="end"
                                                label="50m2 à 75m2"
                                                // defaultValue={values.sexe} 
                                                // onChange={handleChange('sexe')}
                                            /> 
                                            <FormControlLabel
                                                value="75m2 et +"
                                                control={<Radio color="primary" />}
                                                label="Maison"
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
                                        {/* <Form.Row> 
                                            <div></div>
                                        </Form.Row>

                                        <Form.Row> 
                                            <div>35,90€</div>
                                        </Form.Row>

                                        <Form.Row> 
                                            <div>54,90€</div>
                                        </Form.Row>

                                        <Form.Row> 
                                            <div>54,90€ + 6,90/ 15m2</div>
                                        </Form.Row> */}
                                    </Col>
                                </Row>
                            </Container>

                    </Container>

                    <Container fluid className="ServicesOptions">
                        <Row className="pt-2 pb-4 d-flex justify-content-center">
                            <h3>Pack sérinité</h3>
                        </Row>

                            <Container>
                                <Row className="pt-2 pb-2 d-flex justify-content-center">
                                    <Col md={8}>
                                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                             <FormControlLabel
                                                value="- 25m2"
                                                control={<Radio color="primary" />}
                                                label="Maison"
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
                    </Container>


                    <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-4"> 
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                            aria-label="Retour"
                        >Retour</Button>

                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                            aria-label="Continuer"
                        >Continuer</Button>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default AnnounceServices;



{/* <Col sm={8}>
1- Mise en ligne de l'annonce 
</Col>
<Col sm={4}>
9,90€
</Col>

<Col>
Mise en ligne de l'annonce 
<br />
+ Check-in/ Check-out
<br />
+ Ménage
</Col> */}