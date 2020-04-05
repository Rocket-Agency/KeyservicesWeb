import React, {Component} from 'react';
import '../../css/Services_component.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';

export class Services_component extends Component {
    render() {
        return(
            <div>

                <h1 className="d-flex justify-content-center">
                    Nos services proposés
                </h1>


                <Container className="blocServices">
                    <Col>
                        <Row className="blocBorder">
                            <Col sm={6}  className="d-flex justify-content-left blocImgBorder">
                                <img src='./images/remise_des_clef.png' className="imgServices" alt="Logo keyservices "/>
                            </Col>
                            <Col sm={6}  className="d-flex justify-content-center">
                                Texte
                            </Col>
                        </Row>
                        <Row className="blocBorderCenter">
                            <Col sm={6}  className="d-flex justify-content-center">
                                Texte
                            </Col>
                            <Col sm={6}  className="d-flex justify-content-end blocImgBorder">
                                <img src='./images/remplir_son_frigo.png' width="500px" height="200px" alt="Logo keyservices "/>
                            </Col>
                        </Row>
                        <Row className="blocBorder">
                            <Col sm={6}  className="d-flex justify-content-left blocImgBorder">
                                <img src='./images/nettoyage.png' width="500px" height="200px" alt="Logo keyservices "/>
                            </Col>
                            <Col sm={6}  className="d-flex justify-content-center">
                                Texte
                            </Col>
                        </Row>
                        <Row className="blocBorderCenter">
                            <Col sm={6}  className="d-flex justify-content-center">
                                Texte
                            </Col>
                            <Col sm={6}  className="d-flex justify-content-end blocImgBorder">
                                <img src='./images/prise_rdv.png' width="500px" height="200px" alt="Logo keyservices "/>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
            )
        }
    }
    
export default Services_component;