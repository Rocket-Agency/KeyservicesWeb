import React, {Component, useState} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Alert from 'react-bootstrap/Alert';
import {TextValidator,ValidatorForm} from 'react-material-ui-form-validator';

import 'react-phone-input-2/lib/bootstrap.css'

function AlertCityValid() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>La ville est disponible</Alert.Heading>
          <p>
          Keyservices est disponible dans votre ville vous pouvez désormais vous inscrire pour ensuite pouvoir déposer votre annonce dans votre espace
          </p>
        </Alert>
      );
    }
    return <div className="style{{display : none}}"></div>;
  }

//   date = (today.getFullYear() + 1) + '-' + ((today.getMonth() + 1)<10 ? '0'+(today.getMonth() + 1) : (today.getMonth() + 1)) + '-' + today.getDate();


export class InformationGenerales extends Component {
    constructor(props){
        super(props)
        var today2 = new Date(),
        tooOld = (today2.getFullYear() - 150) + '-' + ((today2.getMonth() + 1)<10 ? '0'+(today2.getMonth() + 1) : (today2.getMonth() + 1)) + '-' + today2.getDate();
        var today = new Date(),
        birthDate = (today.getFullYear() - 18) + '-' + ((today.getMonth() + 1)<10 ? '0'+(today.getMonth() + 1) : (today.getMonth() + 1)) + '-' + today.getDate();
        this.state = {
          files: null,
          minAge: birthDate,
          maxAge: tooOld,
          todayDate: today,
        };
    }

    values = {
        sexe: '',
        last_name:'',
        first_name:'',
        tel:'',
        dateOfBirth:'',
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isValidAge', (value) => {
            if ((value > this.state.minAge) || (value < this.state.maxAge)) {
                return false;
            } else {
                return true;
            }
        });
    }
    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isValidAge');
    }

    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <div className="d-flex text-center justify-content-center pb-3">
                    <AlertCityValid/>
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
                                        <TextValidator
                                            key={1}
                                            variant="outlined"
                                            label="Entre votre Nom"
                                            fullWidth
                                            size="small"
                                            name="last_name"
                                            validators={['required', 'matchRegexp:^[a-zA-Z]( |-|[a-zA-Z]){1,}$']}
                                            errorMessages={['Ce champs est obligatoire','Nom invalide']}
                                            value={values.last_name} 
                                            onChange={handleChange('last_name')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>

                                    <Col>
                                        <TextValidator
                                            key={1}
                                            variant="outlined"
                                            label="Entrez votre prénom"
                                            fullWidth
                                            size="small"
                                            name="first_name"
                                            validators={['required', 'matchRegexp:^[a-zA-Z]( |-|[a-zA-Z]){1,}$']}
                                            errorMessages={['Ce champs est obligatoire','Prénom invalide']}
                                            value={values.first_name} 
                                            onChange={handleChange('first_name')}
                                            validatorListener={this.props.validatorListener}
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
                                        <TextValidator
                                            type="text" 
                                            required 
                                            id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            label="Entrez votre numéro de téléphone"
                                            errorMessages={['Ce champs est obligatoire', 'Numéro invalide']}
                                            value={values.tel} 
                                            onChange={handleChange('tel')}
                                            validatorListener={this.props.validatorListener}
                                            validators={['required','matchRegexp:^(0|\\+33|0033)[1-9][0-9]{8}$']}
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                        <Col>
                                            <TextValidator
                                                id="date"
                                                type="date"
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                onChange={handleChange('dateOfBirth')} 
                                                fullWidth
                                                variant="outlined"
                                                size="small"
                                                validators={['required', 'isValidAge' ]}
                                                errorMessages={['Ce champs est obligatoire', 'Vous devez avoir plus de 18 ans (et impossible d\'avoir plus de 150 ans)']}
                                                value={values.dateOfBirth} 
                                                validatorListener={this.props.validatorListener}
                                                defaultValue={this.state.todayDate}
                                            />
                                        </Col>
                                </Form.Row>     
                            </Col>
                            <br />
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default InformationGenerales;