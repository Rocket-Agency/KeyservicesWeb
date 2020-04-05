import React, {Component} from 'react';
import '../../css/ServicesComponent.scss';

import { Col, Container, Row, Card} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';


export class ServicesComponent extends Component {
    render() {
        return(
            <div>

                <Container fluid>
                    <h2 className="d-flex justify-content-center">
                        Nos services proposés
                    </h2>

                    <Container className="blocServices">
                        <Col>
                            <Row className="blocBorder">
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <img src='./images/remise_des_clés_mobile.jpg' width="100%%" height="130px" alt="Logo keyservices "/>
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                        <img src='./images/remise_des_clés.png' width="100%" height="auto" className="imgServices" alt="Logo keyservices "/>
                                    </Col>
                                </Hidden>
                                
                                <Col md={6} className="d-flex justify-content-center blocTextBorder">
                                    <Container>
                                        <h3 className="d-flex justify-content-center">Remise des clés</h3>
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
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <img src='./images/frigo_mobile.jpg' width="100%%" height="130px" alt="Logo keyservices "/>
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                        <img src='./images/remplir_son_frigo.png' width="100%" height="auto" alt="Logo keyservices "/>
                                    </Col>
                                </Hidden>

                                <Col md={6} className="d-flex justify-content-center blocTextBorder">
                                    <Container>
                                        <div>
                                        <h3 className="d-flex justify-content-center">Remplir son frigo</h3>
                                        <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                            in commodo aliquip ut elit ex dolor adipisicing in. 
                                            Aliquip deserunt aliqua pariatur aliquip culpa proident
                                            occaecat ullamco amet dolor.
                                        </p>
                                        </div>
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
                            
                            <Row className="blocBorder">
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <img src='./images/nettoyage_mobile.jpg'width="100%" height="130px" alt="Logo keyservices "/>
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                        <img src='./images/nettoyage.png'width="100%" height="auto" alt="Logo keyservices "/>
                                    </Col>
                                </Hidden>

                                <Col md={6} className="d-flex justify-content-center blocTextBorder">
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
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <img src='./images/prise_rdv_mobile.png' width="100%%" height="130px" alt="Logo keyservices "/>
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                        <img src='./images/prise_rdv_mobile.png' width="100%" height="auto" alt="Logo keyservices "/>
                                    </Col>
                                </Hidden>

                                <Col md={6}  className="d-flex justify-content-center blocTextBorder">
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
                            </Row>
                            
                        </Col>
                    </Container>
                </Container>
            </div>
            )
        }
    }
    
export default ServicesComponent;