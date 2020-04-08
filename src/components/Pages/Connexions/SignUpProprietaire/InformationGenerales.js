import React, {Component} from 'react';
import '../../../../css/Profiles.scss';

import { Col, Container, Row, Card, Form, Button} from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';
// import { Link } from 'react-router-dom';

export class InformationGenerales extends Component {

    render() {
        return(
            <div>
                <Container fluid className="pt-4 pb-4 blocForm" >  
                    <h2 className="title-form">Information  Générales</h2>
                    <Form.Row className="mt-4">
                        <Col  xs={12} md={4} className="col d-flex justify-content-center pt-3 pb-3">
                            {['checkbox'].map((type) => (
                                <div key={`custom-inline-${type}`} >
                                    <Form.Check
                                        custom
                                        inline
                                        label="Mme"
                                        type={type}
                                        id={`custom-inline-${type}-Mme`}
                                    />
                                    <Form.Check
                                        custom
                                        inline
                                        label="Mr"
                                        type={type}
                                        id={`custom-inline-${type}-Mr`}
                                    />
                                </div>
                            ))}
                        </Col>
                    </Form.Row>     

                    <Container fluid>
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Nom</Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="Entrer votre nom" />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="Entrer votre prénom" />
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Numéro de téléphone</Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="Entrer votre numéro de téléphone" />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                    <Col>
                                        <Form.Control type="date" />
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

export default InformationGenerales;