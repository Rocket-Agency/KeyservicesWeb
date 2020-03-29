import React, {Component} from 'react';
import '../../../css/ConnexionProprietaire.scss';

import { Col, Container, Row, Card} from 'react-bootstrap';

export class ConnexionProprietaire extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                <h3>Mon Espace Proprétaire</h3>
                </div>

                <Container fluid>
                    <div className="colorBackground">
                        <Row>
                            <Col md={1}></Col>

                            <Col md={5}>
                            <div className="mt-5 d-flex justify-content-center">
                                <h3>Connexion</h3>
                            </div>
                            </Col>     

                            <div className="Vertical-lign align-item-center mt-5"></div>

                            <Col md={5}>
                                <Container fluid className="connexion-bloc-text">
                                     <img src='./images/connexion.png' className="connexion-proprietaire" alt="Connexion pour proprietaire"/>
                                </Container>   
                            </Col>

                        </Row>
                    </div>
                </Container>

            </div>
        )
    }
}