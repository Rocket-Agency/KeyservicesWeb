import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import {TextValidator} from 'react-material-ui-form-validator';

export class AnnounceTarif extends Component {
    constructor(props){
        super(props)
    }
    values = {
        price_starting:'',
        price_min:'',
        price_max:''
    }    

    render() {
        const { values, handleChange } = this.props;
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
                            <h2 className="title-form-Announce title-form-Announce-active ">4 - Tarif</h2>
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
                    <h2>Tarif</h2>

                    <Container fluid>
                        <Row className="pt-3 pb-4">
                            <Col xs={12} md={12} >
                                <Form.Row>
                                    <Form.Label column sm={12} className="label-info-annonce-prix" >Tarif de base</Form.Label>
                                    <Col sm={12}>
                                        <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            label="€"
                                            name="price_starting"
                                            validators={['required', 'matchRegexp:^[0-9]{1,7}(|(.|,)[0-9]{1,2})$']}
                                            errorMessages={['Le tarif de base est requis', 'Veuillez indiquer un prix valide (sans le signe €)']}
                                            value={values.price_starting}
                                            onChange={handleChange('price_starting')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="mt-3">
                        <Row className="pt-3 pb-4">
                            <Col xs={12} md={12}>
                                <Form.Row>
                                    <Form.Label column sm={12} className="label-info-annonce-prix">Prix minimum</Form.Label>
                                    <Row className="d-flex justify-content-justify price-texte">Lorsque la demande pour votre logement est faible, 
                                        les prix à la nuit baisseront pour inciter plus de voyageurs à réserver. 
                                        Quel est le prix le plus bas que vous consentez à accorder ?
                                    </Row>
                                    <Col sm={12}>
                                        
                                        <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="price_min"
                                            label="€"
                                            validators={['required', 'matchRegexp:^[0-9]{1,7}(|(.|,)[0-9]{1,2})$']}
                                            errorMessages={['Le prix minimum est requis', 'Veuillez indiquer un prix valide (sans le signe €)']}
                                            value={values.price_min}
                                            onChange={handleChange('price_min')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container fluid className="mt-3">
                        <Row  className="pt-3 pb-4">
                            <Col xs={12} md={12}>
                                <Form.Row>
                                <Form.Label column sm={12} className="label-info-annonce-prix">Prix maximum</Form.Label>
                                    <Row className="d-flex justify-content-justify price-texte">
                                        Si la demande est forte, par exemple à l'occasison d'un festival populaire dans votre ville,
                                        Quel est le prix à la nuit le plus élevé que vous souhaitez facturer aux voyageurs ?
                                    </Row>  
                                    <Col sm={12}>
                                        <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="price_max"
                                            label="€"
                                            validators={['required', 'matchRegexp:^[0-9]{1,7}(|(.|,)[0-9]{1,2})$','minNumber:'+values.price_min]}
                                            errorMessages={['Le prix maximum est requis', 'Veuillez indiquer un prix valide (sans le signe €)', 'Le prix maximum ne peut pas être inférieur au prix minimum']}
                                            value={values.price_max}
                                            onChange={handleChange('price_max')}
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

export default AnnounceTarif;