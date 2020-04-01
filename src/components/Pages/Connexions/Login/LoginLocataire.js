import React, {Component} from 'react';
import '../../../../css/ConnexionProprietaireLocataire.scss';
import ConnexionProfileLocataire from '../ConnexionProfileLocataire';

import { Col, Container, Row, Card} from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';
// import { Link } from 'react-router-dom';

// //icons
// import { IoIosArrowForward } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa";

export class LoginLocataire extends Component {

    render() {
        return(
            <div>

                <Container fluid>
                        <Col md={12}>
                            <Row className="colorBackgroundConnexion">
                                <Col md={6}>
                                    <div className="mt-4 mb-4 d-flex justify-content-center">
                                        <h3>Connexion Locataire</h3>
                                    </div>

                                    <ConnexionProfileLocataire/>

                                </Col>

                                <div className="Vertical-lign-connexion align-item-center mt-5"></div>

                                <Col md={6}>

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