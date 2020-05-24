import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export class AnnounceAddresss extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

render() {
    const { values, handleChange } = this.props;
    return(
        <div>
            <Container fluid className="pt-4 blocForm" >
            
                <Row>
                    <Col sm>
                        <h2 className="title-form-Announce title-form-Announce-active">1 - Votre addresse</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">2 - Votre logement </h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">3 - Règles et informations</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">4 - Tarif</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce">5 - Votre annonce</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce">6 - Validation</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce">7 - Nos services</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">8 - Paiement</h2>
                    </Col>
                </Row>
                <Formik
                    initialValues={{
                        address_road_number: '',
                        address_road_type: '',
                        address_road_name: '',
                        address_state: '',
                        address_city: '',
                        address_zip_code: ''
                    }}
                        
                    validationSchema={Yup.object().shape({
                        address_road_number: Yup.number()
                            .required('Veuillez indiquer votre numéro de rue')
                            .moreThan(0, 'Numéro de rue invalide')
                            .typeError('Vous devez renseigner un numéro de rue'),
                        address_road_type: Yup.string()
                            .notOneOf(['Rue', null], 'ntm')
                            .required('Veuillez indiquer votre type de rue'),
                        address_road_name: Yup.string()
                            .required('Veuillez indiquer votre adresse'),
                        address_state: Yup.string()
                            .required('Veuillez indiquer votre région'),
                        address_zip_code: Yup.number()
                            .required('Veuillez entrer votre code postal')
                            .integer('Code postal invalide')
                            .moreThan(9999)
                            .lessThan(100000),
                         address_city: Yup.string()
                            .required('Veuillez entrer votre ville')
                    })}

                    onSubmit={fields => {
                        alert('SUCCES!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
            
                    render={({ errors, status, touched, setFieldValue }) => (
                        <Form>
                <Container fluid className="pt-4 blocForm" >  
                    <h2> Adresse de votre logement</h2>

                    <Container fluid>
                        <Row>
                            <Col xs={12} md={12} className="mt-3">
                                
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={2}>Numéro de rue</Form.Label>
                                    <Col sm={1}>
                                        <Field name="address_road_number" type="text" className={'form-control' + (errors.address_road_number && touched.address_road_number ? ' is-invalid' : '')} />
                                        <ErrorMessage name="address_road_number" component="div" className="invalid-feedback" />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={6} className="mt-3">
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={4}>Type de rue</Form.Label>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" name="address_road_type" className={'form-control' + (errors.address_road_type && touched.address_road_type ? ' is-invalid' : '')} onChange={handleChange('address_road_type')}defaultValue={values.address_road_type}  >
                                        <option>Rue</option>
                                        <option>Allée</option>
                                        <option>Boulevard</option>
                                    </Form.Control>
                                    <ErrorMessage name="address_road_type" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Form.Row>  
                            </Col>
                            </Row>
                            
                            <Row>
                            <Col xs={12} md={12}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Nom de rue</Form.Label>
                                    <Col sm={12}>
                                        <TextField
                                            name="address_road_name"
                                            className={'form-control'}
                                            type="text"
                                            pattern="[A-Za-z]{3}"
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            onChange={handleChange('address_road_name')}
                                            defaultValue={values.address_road_name}
                                            helperText={(errors.address_road_name && touched.address_road_name) && errors.address_road_name}
                                        />
                                        <ErrorMessage name="address_road_name" component="div" className="invalid-feedback" />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={12} className="mt-3">
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Information complémentaire (Bâtiment, escalier, interphone etc...)</Form.Label>
                                    <Col sm={12}>
                                        <TextField
                                            type="text" 
                                            pattern="[A-Za-z]{3}"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            onChange={handleChange('address_additional_info')}
                                            defaultValue={values.address_additional_info} 
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>
                            </Row>

                            <Row className="pt-3 pb-4">
                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Région</Form.Label>
                                    <Col sm={8}>
                                        <TextField
                                            type="text" 
                                            pattern="[A-Za-z]{3}"
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            onChange={handleChange('address_state')}
                                            defaultValue={values.address_state} 
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Ville</Form.Label>
                                    <Col sm={8}>
                                        <TextField
                                            type="text" 
                                            pattern="[A-Za-z]{3}"
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            onChange={handleChange('address_city')}
                                            defaultValue={values.address_city} 
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Code postal</Form.Label>
                                    <Col sm={8}>
                                    <TextField
                                        required id="standard-required"
                                        onChange={handleChange('address_zip_code')}
                                        defaultValue={values.address_zip_code} 
                                        variant="outlined"
                                        pattern="[A-Za-z]{3}"
                                        fullWidth
                                        type="text" 
                                        size="small"              
                                        />   
                                    </Col>   
                                </Form.Row>     
                            </Col>
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
                                            </Form>
                                        )}
                                    />
            </Container>
        </div>
    )
  }
}

export default AnnounceAddresss;