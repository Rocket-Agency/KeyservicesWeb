import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';

import {TextValidator} from 'react-material-ui-form-validator';

export class InformationAdresse extends Component {
   
    constructor(props){
        super(props)
    }
    values = {
        factureAdress: '',
        zipCode: '',
    }

    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    //   };

    //   back = e => {
    //     e.preventDefault();
    //     this.props.prevStep();
    //   };
    
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
                            <h2 className="title-form title-form-active">2 - Information sur votre Adresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form">3 - Information sur votre Connexion</h2>
                        </Col>
                    </Row>

                         <Container fluid>
                            <Row className="mt-4">
                                <Col xs={12} md={8} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Votre adresse de facturation</Form.Label>

                                        <Col sm={6}>
                                            <TextValidator
                                                key={1}
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                name="factureAdress"
                                                validators={['required', 'matchRegexp:^[0-9]{1,4}( |[a-zA-Z])*$']}
                                                errorMessages={['Ce champs est obligatoire', 'adresse invalide']}
                                                value={values.factureAdress}
                                                onChange={handleChange('factureAdress')}
                                                validatorListener={this.props.validatorListener}
                                            /> 
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col xs={12} md={4} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Code postal</Form.Label>
                                         <Col>
                                            <TextValidator
                                                key={1}
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                validators={['Ce champs est obligatoire', 'code postal invalide']}
                                                errorMessages={['Code postal requis!', 'Code postal invalide', 'matchRegexp:^[0-9]{5}$']}
                                                name="zipCode"
                                                onChange={handleChange('zipCode')}
                                                value={values.zipCode}
                                                validatorListener={this.props.validatorListener} 
                                            />   
                                        </Col>                                        
                                    </Form.Row>     
                                </Col>
                             </Row>
                        </Container>
                    </Container>
                </div>
            )
        }
    }
    export default InformationAdresse;