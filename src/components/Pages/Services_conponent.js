import React, {Component} from 'react';
import '../../css/Services_component.scss';

import { Col, Container, Row, Form, Card} from 'react-bootstrap';

export class Services_component extends Component {
    render() {
        return(
            <div>

                <h2 className="d-flex justify-content-center">
                    Nos services proposés
                </h2>


                <Container className="blocServices">
                    <Col>
                        <Row className="blocBorder">
                            <Col sm={6}  className="d-flex justify-content-left blocImgBorder">
                                <img src='./images/remise_des_clef.png' className="imgServices" alt="Logo keyservices "/>
                            </Col>
                            <Col sm={6}  className="d-flex justify-content-center blocTextBorder">
                                <Container>
                                    <h3 className="d-flex justify-content-center">Remise des clef</h3>
                                    <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                        in commodo aliquip ut elit ex dolor adipisicing in. 
                                        Aliquip deserunt aliqua pariatur aliquip culpa proident
                                        occaecat ullamco amet dolor.
                                    </p>

                                    <Container fluid className="mt-2 d-flex justify-content-center">
                                        <div id="container">                    
                                            <button className="validation-btn">
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                </span>
                                                <span className="button-text">En savoir plus</span>
                                            </button>
                                        </div>           
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="blocBorderCenter">
                            <Col sm={6}  className="d-flex justify-content-center blocTextBorder">
                                <Container>
                                    <h3 className="d-flex justify-content-center">Remplir son frigo</h3>
                                    <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                        in commodo aliquip ut elit ex dolor adipisicing in. 
                                        Aliquip deserunt aliqua pariatur aliquip culpa proident
                                        occaecat ullamco amet dolor.
                                    </p>
                                    <Container fluid className="mt-2 d-flex justify-content-center">
                                        <div id="container">                    
                                            <button className="validation-btn">
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                </span>
                                                <span className="button-text">En savoir plus</span>
                                            </button>
                                        </div>           
                                    </Container>
                                </Container>
                            </Col>
                            <Col sm={6}  className="d-flex justify-content-end blocImgBorder">
                                <img src='./images/remplir_son_frigo.png' width="500px" height="200px" alt="Logo keyservices "/>
                            </Col>
                        </Row>
                        <Row className="blocBorder">
                            <Col sm={6}  className="d-flex justify-content-left blocImgBorder">
                                <img src='./images/nettoyage.png' width="500px" height="200px" alt="Logo keyservices "/>
                            </Col>
                            <Col sm={6}  className="d-flex justify-content-center blocTextBorder">
                                <Container>
                                    <h3 className="d-flex justify-content-center">Nettoyage</h3>
                                    <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                        in commodo aliquip ut elit ex dolor adipisicing in. 
                                        Aliquip deserunt aliqua pariatur aliquip culpa proident
                                        occaecat ullamco amet dolor.
                                    </p>
                                    <Container fluid className="mt-2 d-flex justify-content-center">
                                        <div id="container">                    
                                            <button className="validation-btn">
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                </span>
                                                <span className="button-text">En savoir plus</span>
                                            </button>
                                        </div>           
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="blocBorderCenterRDV">
                            <Col sm={6}  className="d-flex justify-content-center blocTextBorder">
                                <Container>
                                    <Card.Title>
                                         <h3 className="d-flex justify-content-center">Prendre rendez-vous pour le checkout</h3>
                                    </Card.Title>
                                    <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                        in commodo aliquip ut elit ex dolor adipisicing in. 
                                        Aliquip deserunt aliqua pariatur aliquip culpa proident
                                        occaecat ullamco amet dolor.
                                    </p>
                                    <Container fluid className="mt-2 d-flex justify-content-center">
                                        <div id="container">                    
                                            <button className="validation-btn">
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                </span>
                                                <span className="button-text">En savoir plus</span>
                                            </button>
                                        </div>           
                                    </Container>
                                </Container>
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