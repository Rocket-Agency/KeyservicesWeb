import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
// import { Visible, Hidden } from 'react-grid-system';
// import { Link } from 'react-router-dom';


// import InputLabel from '@material-ui/core/InputLabel';
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
                <Container fluid className="pt-4 pb-4 blocForm">
                    <h2 className="title-form">Information sur votre adresse</h2>
                        <Row className="mt-4 mb-4">
                            <Col xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Email</Form.Label>
                                    {/* <Col>
                                        <Form.Control type="text" placeholder="Votre adresse" />
                                    </Col> */}
                                    {/* <Row>
                                      <Form.Control Label value="end" control={<Radio color="primary" />} label="End" /> 
                                    </Row> */}

                                            <Col>
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
                                            </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Mot de passe</Form.Label>
                                    <Col>
                                        <Col>
                                            {/* <TextField
                                                placeholder="Entre votre mot de passe" 
                                                required id="standard-required"
                                                onChange={handleChange('password')}
                                                defaultValue={values.password} 
                                                variant="outlined"
                                                pattern="[A-Za-z]{3}"
                                                fullWidth
                                                type="text"                     
                                            />    */}
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
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6}>
                                     <Button
                                        color="secondary"
                                        variant="contained"
                                        onClick={this.back}
                                    >Back</Button>


                                    <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.continue}
                                    >Continue</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
    export default InformationConnexion;