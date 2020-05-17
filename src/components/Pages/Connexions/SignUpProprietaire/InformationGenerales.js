import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

import 'react-phone-input-2/lib/bootstrap.css'


export class InformationGenerales extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <div className="d-flex text-center justify-content-center">
                    <p className="InformationFormValid">Keyservices est disponible dans votre ville vous pouvez désormais vous inscrire pour ensuite pouvoir déposer votre annonce dans votre espace</p>
                </div>
                <Container fluid className="pt-4 blocForm" >  
                    <Row>
                        <Col sm>
                            <h2 className="title-form title-form-active">1 - Information Générales</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form">2 - Information sur votre Adresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form">3 - Information sur votre Connexion</h2>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col  xs={12} md={5} className="col d-flex justify-content-center pt-3 pb-3">
                            <Form.Row>
                                <Form.Label className="d-flex align-items-center label-info-generales">Civilité</Form.Label>

                                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                    <FormControlLabel
                                        value="Mme"
                                        control={<Radio color="primary" />}
                                        label="Mme"
                                        labelPlacement="start"
                                        defaultValue={values.sexe} 
                                        onChange={handleChange('sexe')}
                                    />
                                    <FormControlLabel
                                        value="Mr"
                                        control={<Radio color="primary" />}
                                        label="Mr"
                                        labelPlacement="start"
                                        defaultValue={values.sexe} 
                                        onChange={handleChange('sexe')}
                                    />
                                </RadioGroup>
                            </Form.Row>
                        </Col>
                    </Row>     

                    <Container fluid>
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Nom</Form.Label>

                                    <Col>
                                         <TextField
                                            required id="standard-required"
                                            label="Entre votre Nom"
                                            onChange={handleChange('last_name')}
                                            defaultValue={values.last_name} 
                                            variant="outlined"
                                            pattern="[A-Za-z]{3}"
                                            fullWidth
                                            type="text"
                                            size="small"
                                        />   
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>

                                    <Col>
                                        <TextField
                                            required id="standard-required"
                                            label="Entrez votre prénom"
                                            onChange={handleChange('first_name')}
                                            defaultValue={values.first_name}
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                        />
                                    </Col>
                                </Form.Row>  
                            </Col>
                        </Row>
                
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Numéro de téléphone</Form.Label>
                                    <Col>
                                        <TextField
                                            type="text" 
                                            onChange={handleChange('tel')} 
                                            defaultValue={values.tel} 
                                            pattern="^\d{4}-\d{3}-\d{4}$" 
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            label="Entrez votre numéro de téléphone"
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                        <Col>
                                            <TextField
                                                id="date"
                                                type="date"
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                onChange={handleChange('dateOfBirth')} 
                                                defaultValue={values.dateOfBirth} 
                                                fullWidth
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Col>
                                </Form.Row>     
                            </Col>
                            <br />
                        </Row>
                        <Row xs={12} md={12} className="d-flex justify-content-center pt-3 pb-3">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.continue}
                                aria-label="Continuer"
                                >Continuer
                            </Button>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default InformationGenerales;