import React, {Component} from 'react';
import '../../../../css/Announce.scss';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { Row, Col, Container,Form } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
// import AnnounceCardService from './AnnounceCardServices';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class AnnounceServices extends Component {

    continue = e => {

        var userId = localStorage.getItem('id');
        var adId = localStorage.getItem('ad_id');
        var token = localStorage.getItem('token');

        axios.post(`http://localhost:3001/services/UserservicesAdd/`,{
            serviceCategory: this.props.values.service_category,
            serviceMiseEnLigne: !!(this.props.values.service_mise_en_ligne)?1:0,
            serviceRemiseCle: !!(this.props.values.service_remise_cle)?1:0,
            serviceCheckinCheckout: !!(this.props.values.service_checkin_checkout)?1:0,
            serviceFrigo: !!(this.props.values.service_frigo)?1:0,
            serviceMenage: !!(this.props.values.service_menage)?1:0,
            adId: adId
        });

        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values,handleChange, handleChangeService } = this.props;
        // console.log(this.props);
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
                    <h2 className="pt-4 pb-4">Nos Services</h2>

                    <Accordion style={{borderTop : 'transparent'}}>
            <RadioGroup col aria-label="position" name="position" defaultValue="top">
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton className="d-flex justify-content-center" style={{border : '2px solid #49173B'}}>
                        <Container className="moveBloc">
                            <FormControlLabel
                                control={<Radio 
                                value="carte"
                                color="primary"
                                defaultValue={values.service_category} 
                                onChange={handleChangeService('service_category')} 
                                />}
                                label="Maison"
                                labelPlacement="end"
                                label="Services à la carte"
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
                                    value="mise_en_ligne"  
                                    defaultValue={values.service_mise_en_ligne} 
                                    onChange={handleChange('service_mise_en_ligne')} 
                                    checked='true'
                                    color="primary" />}
                                    label="1- Mise en ligne de l'annonce (Services obligatoire et doit être payé à la fin de la commande)"
                                    // defaultValue={values.service_type} 
                                    // onChange={handleChange('mise en ligne de l\'annonce')}
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
                                    value="remise_cle"  
                                    defaultValue={values.service_remise_cle} 
                                    onChange={handleChange('service_remise_cle')} 
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
                                    value="checkin_checkout"  
                                    defaultValue={values.service_checkin_checkout} 
                                    onChange={handleChange('service_checkin_checkout')} 
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
                                    value="frigo"  
                                    defaultValue={values.service_frigo} 
                                    onChange={handleChange('service_frigo')} 
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

                    <Container className="pt-2 pb-2">
                        <Row className="pt-2 d-flex justify-content-center">
                            <Col md={12}>
                                <FormControlLabel
                                    control={<Checkbox
                                    value="menage"  
                                    defaultValue={values.service_menage} 
                                    onChange={handleChange('service_menage')} 
                                    color="primary" />}
                                    label="5- Ménage (Services optionnelle)"
                                />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-2 pb-2">
                        <Row >
                            <Col md={8}>
                                <Row> 
                                    <div>Superficie de -25m2 </div>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row className="d-flex justify-content-center align-items-center"> 
                                    <div> = 24,90€</div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-2 pb-2">
                        <Row >
                            <Col md={8}>
                                <Row> 
                                    <div>Superficie de 26m2 à 49m2</div>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row className="d-flex justify-content-center align-items-center"> 
                                    <div>35,90€</div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-2 pb-2">
                        <Row >
                            <Col md={8}>
                                <Row> 
                                    <div>Superficie de 50m2 à 75m2</div>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row className="d-flex justify-content-center align-items-center"> 
                                    <div>54,90€</div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="pt-2 pb-2">
                        <Row >
                            <Col md={8}>
                                <Row> 
                                    <div>Superficie de 50m2 à 75m2</div>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row className="d-flex justify-content-center align-items-center"> 
                                    <div>54,90€ + 6,90 tout les 15m2</div>
                                </Row>
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
                                control={<Radio 
                                value="pack"
                                color="primary" 
                                defaultValue={values.service_category} 
                                onChange={handleChangeService('service_category')} 
                                />}
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
                                <Container className="pt-2 pb-2">
                                    <Row >
                                        <Col md={12}>
                                            <Row> 
                                                <div>Mise en ligne de l'annonce</div>
                                            </Row>
                                            <Row> 
                                                <div>+ Check-in/ Check-out</div>
                                            </Row>
                                            <Row> 
                                                <div>+ Ménage</div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
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
  
                    <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-4"> 
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