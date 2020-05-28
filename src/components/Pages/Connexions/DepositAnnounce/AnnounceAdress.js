import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';
import {TextValidator} from 'react-material-ui-form-validator';
 
export class AnnounceAddresss extends Component {
    constructor(props){
        super(props)
    }
    values = {
        address_road_number: '',
        address_road_type:'',
        address_road_name:'',
        address_additional_info:'',
        address_state:'',
        address_city:'',
        address_zip_code:''
    }

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
                <Container fluid className="pt-4 blocForm" >  
                    <h2> Adresse de votre logement</h2>

                    <Container fluid>
                        <Row>
                            <Col xs={12} md={12} className="mt-3">
                                
                                <Form.Row>
                                    <Form.Label className="label-info-annonce" column sm={2}>Numéro de rue</Form.Label>
                                    <Col sm={3}>
                                         <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="address_road_number"
                                            validators={['required', 'minNumber:1', 'matchRegexp:^[0-9]{1,4}$']}
                                            errorMessages={['required field', 'invalid number','invalid number']}
                                            value={values.address_road_number}
                                            onChange={handleChange('address_road_number')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>    
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="mt-3">
                                <Form.Row>
                                    <Form.Label className="label-info-annonce" column sm={2}>Type de rue</Form.Label>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control
                                                as="select"
                                                name="address_road_type"
                                                onChange={handleChange('address_road_type')}
                                                value={values.address_road_type}
                                            >
                                                <option value='Rue'>Rue</option>
                                                <option value='Allée'>Allée</option>
                                                <option value='Boulevard'>Boulevard</option>
                                                <option value='Square'>Square</option>
                                                <option value='Impasse'>Impasse</option>
                                                <option value='Résidence'>Résidence</option>
                                            </Form.Control>
                                        </Form.Group>
                                </Form.Row> 
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="mt-3">                        
                         <Row>
                            <Col xs={12} md={12}>
                                <Form.Row>
                                    <Form.Label className="label-info-annonce" column sm={12}>Nom de rue</Form.Label>
                                    <Col sm={12}>
                                        <TextValidator
                                            key={1}
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="address_road_name"
                                            validators={['required']}
                                            errorMessages={['required field']}
                                            value={values.address_road_name}
                                            onChange={handleChange('address_road_name')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={12} className="mt-3">
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Information complémentaire (Bâtiment, escalier, interphone etc...)</Form.Label>
                                    <Col sm={12}>
                                        <TextValidator
                                            key={1}
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="address_additional_info"
                                            value={values.address_additional_info}
                                            onChange={handleChange('address_additional_info')}
                                            validatorListener={this.props.validatorListener}
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
                                        <TextValidator
                                            key={1}
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="address_state"
                                            validators={['required']}
                                            errorMessages={['required field']}
                                            value={values.address_state}
                                            onChange={handleChange('address_state')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Ville</Form.Label>
                                    <Col sm={8}>
                                        <TextValidator
                                            key={1}
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="address_city"
                                            validators={['required']}
                                            errorMessages={['required field']}
                                            value={values.address_city}
                                            onChange={handleChange('address_city')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Code postal</Form.Label>
                                    <Col sm={8}>
                                    <TextValidator
                                        key={1}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        validators={['required', 'matchRegexp:^[0-9]{5}$']}
                                        errorMessages={['Code postal requis!', 'Code postal invalide']}
                                        name="address_zip_code"
                                        onChange={handleChange('address_zip_code')}
                                        value={values.address_zip_code}
                                        validatorListener={this.props.validatorListener} 
                                        />   
                                    </Col>   
                                </Form.Row>     
                            </Col>
                         </Row>
                         <Row xs={12} md={12} className="d-flex justify-content-center pt-3 pb-3">
                        </Row>
                    </Container>
                </Container>
            </Container>
        </div>
    )
  }
}

export default AnnounceAddresss;