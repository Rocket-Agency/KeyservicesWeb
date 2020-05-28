import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import {TextValidator} from 'react-material-ui-form-validator';

export class InformationConnexion extends Component {
    constructor(props){
        super(props)
    }

    values = {
        email: '',
        password:'',
    }

    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm">
                    <Row>
                        <Col sm>
                            <h2 className="title-form">1 - Information Générales</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form">2 - Information sur votre Adresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form title-form-active">3 - Information sur votre Connexion</h2>
                        </Col>
                    </Row>

                         <Container fluid>
                            <Row className="mt-4">
                                <Col xs={12} md={6} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Email</Form.Label>
                                        <Col>
                                            <TextValidator
                                                key={1}
                                                label="Entre votre adresse email"
                                                required id="standard-required"
                                                onChange={handleChange('email')}
                                                variant="outlined"
                                                fullWidth
                                                size="small"        
                                                validators={['required', 'isEmail']}
                                                errorMessages={['Ce champs est obligatoire', 'Email invalide']}
                                                value={values.email}         
                                            />   
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col xs={12} md={6} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Mot de passe</Form.Label>
                                        <Col>

                                            <TextValidator
                                                key={1}
                                                id="standard-required"
                                                label="Entre votre mot de passe"
                                                variant="outlined"
                                                label="Password"
                                                onChange={handleChange('password')}
                                                name="password"
                                                type="password"
                                                fullWidth
                                                size="small"
                                                validators={['required']}
                                                errorMessages={['Ce champs est obligatoire', 'mot de passe invalide']}
                                                value={values.password} 
                                            />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                {/* <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-4"> 
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
                                </Col> */}
                            </Row>
                        </Container>
                    </Container>
                </div>
            )
        }
    }
    export default InformationConnexion;