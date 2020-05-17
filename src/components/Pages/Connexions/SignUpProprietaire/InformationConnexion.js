import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';


export class InformationConnexion extends Component {

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
                                            <TextField
                                                label="Entre votre adresse email"
                                                required id="standard-required"
                                                onChange={handleChange('email')}
                                                defaultValue={values.email} 
                                                variant="outlined"
                                                pattern="[A-Za-z]{3}"
                                                fullWidth
                                                type="text" 
                                                size="small"                    
                                            />   
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col xs={12} md={6} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Mot de passe</Form.Label>
                                        <Col>
                                            <TextField
                                                label="Entre votre mot de passe"
                                                id="outlined-adornment-password"
                                                onChange={handleChange('password')}
                                                defaultValue={values.password} 
                                                variant="outlined"
                                                pattern="[A-Za-z]{3}"
                                                fullWidth
                                                type="password" 
                                                size="small"
                                            />
                                        </Col>
                                    </Form.Row>     
                                </Col>

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
                            </Row>
                        </Container>
                    </Container>
                </div>
            )
        }
    }
    export default InformationConnexion;