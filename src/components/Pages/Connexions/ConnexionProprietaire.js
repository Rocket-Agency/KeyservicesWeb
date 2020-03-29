import React, {Component} from 'react';
import '../../../css/ConnexionProprietaire.scss';

import { Col, Container, Row, Card, Form, Button} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom';

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export class ConnexionProprietaire extends Component {

    render() {
        return(
            <div>

                <Container fluid>
                        <Col md={12}>
                            <Row className="colorBackgroundConnexion">
                                <Col md={6}>
                                    <div className="mt-4 mb-4 d-flex justify-content-center">
                                        <h3>Connexion</h3>
                                    </div>

                                    <Form>
                                        <Form.Row className="d-flex justify-content-center" >
                                            <Form.Group as={Col} md="8" controlId="formGridId">
                                            <Form.Label>Identifiant</Form.Label>
                                            <Form.Control type="identifiant" placeholder="Entrer votre identifiant" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row className="d-flex justify-content-center">
                                            <Form.Group as={Col} md="8" controlId="formGridPassword">
                                            <Form.Label>Mot de passe</Form.Label>
                                            <Form.Control type="Password" placeholder="Entrer votre mot de passe" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row class="mt-4">
                                            <Form.Group class="mt-4">
                                                <Container>

                                                    <Row>
                                                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                                            <Hidden xs>
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                <Button id="btn-seConnecter" type="submit"><IoIosArrowForward /> </Button>
                                                                <Link id="seConnecter" to="/connexionproprietaire">Se connecter</Link>
                                                                </div>
                                                            </Hidden>
                                                            <Visible xs>
                                                                <div class="d-flex justify-content-center align-items-center">
                                                                    <Button id="seConnecterMobile" type="submit">
                                                                        <FaArrowRight/><a clasName="envoyer"> Se connecter</a>
                                                                    </Button>
                                                                </div>
                                                            </Visible>
                                                        </Col>

                                                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                                                <Link  to="/connexionproprietaire">S'inscrire</Link>                                                        
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Col>


                                <Col md={6}>
                                    <div className="Vertical-lign align-item-left mt-3"></div>

                                    <Card className="text-black cardConnexionImage">
                                        <Card.Img src='./images/connexion.png' alt="Card image" />
                                        <Card.ImgOverlay className="text-connection">
                                            <Card.Text>
                                            Ea qui magna laboris labore. Sint sit commodo esse duis deserunt in commodo aliquip ut 
                                            elit ex dolor adipisicing in.
                                            Aliquip deserunt aliqua pariatur aliquip culpa proident occaecat ullamco amet dolor. 
                                            Ad officia incididunt aliquip Lorem pariatur adipisicing Lorem laborum est in voluptate mollit sit. 
                                            Fugiat elit sunt ea culpa cillum eu amet in laborum dolore aliqua pariatur incididunt consectetur. 
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                </Container>
            </div>
        )
    }
}