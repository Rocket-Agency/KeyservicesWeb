import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import DateChoiceArrival from './DateTimeFunction';
import TimeChoice from './DateTimeFunction';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export class AnnounceTarif extends Component {
    

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2>Votre annonce</h2>
  
                    <Container fluid>
                        <Row className="pt-3 pb-3">
                            <Col xs={12} md={12}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Titre de l'annonce</Form.Label>
                                    <Col sm={12}>
                                        <TextField
                                            type="text" 
                                            name="ad_title"
                                            pattern="[A-Za-z]{3}"
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid>
                        <Row className="pt-3 pb-3">
                            <Col xs={12} md={12} className="label-info-annonce">
                                <Form.Group controlId="Announce_ad_description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="2" name="ad_description" />
                                </Form.Group> 
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid>
                        <Row className="pt-3 pb-3">
                            <Col xs={12} md={12} className="label-info-annonce">
                                <Form.Group controlId="Announce_ad_description">
                                    <Form.Label>Capacité d'accueil</Form.Label>
                                    <Form.Control as="select" name="ad_capacity">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid>
                        <Row className="pt-3 pb-3">
                            <Col xs={12} md={12} className="label-info-annonce">
                                <Form.Group controlId="Announce_ad_notice">
                                    <Form.Label>Note importante (A combien de jour souhaitez-vous être prévenu d'une arrivée ?)</Form.Label>
                                    <Form.Control as="textarea" rows="2" name="ad_notice" />
                                </Form.Group> 
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="pt-3 pb-3"> 
                        <Row className="pt-3 pb-3">
                            <Col xs={6} md={6} className="d-flex justify-content-center info-annonce-date">
                                Arrivée
                            </Col>
                            
                            <Col xs={6} md={6} className="d-flex justify-content-center info-annonce-date">
                                Départ
                            </Col>
                        </Row>

                    
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                Date de d'arrivée
                            </Grid>
                            <Grid item xs={3}>
                                Heure d'arrivée
                            </Grid>
                            <Grid item xs={3}>
                                Date de départ
                            </Grid>
                            <Grid item xs={3}>
                                Heure de départ
                            </Grid>
                        </Grid>
                    </Container>


                </Container>
            </div>
        )
    }
}

export default AnnounceTarif;