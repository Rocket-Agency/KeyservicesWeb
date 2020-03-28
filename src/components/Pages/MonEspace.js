import React, {Component} from 'react';
import '../../css/MonEspace.scss';

import { Col, Container, Row, Card} from 'react-bootstrap';

export class MonEspace extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                <h3>Mon Espace</h3>
                </div>

                <Container fluid>
                    <Row>

                        <Col md={1}></Col>

                        <Col md={5}>
                            <div className="d-flex justify-content-center">
                                <div className="card">
                                    <img class="card-img" id="Propriétaire" src='./images/Propriétaire.png' alt="Gerer_Mes_Locations" />
                                    <a class="card-footer" href="/">Mon espace propriétaire</a>
                                </div>
                            </div>
                        </Col>     

                        <div className="Vertical-lign align-item-center mt-5"></div>

                        <Col md={5}>
                            <div className="d-flex justify-content-center"  id="Locataire">
                                <div className="card">
                                    <img class="card-img" src='./images/Locataire.png' alt="Gerer_Mes_Locations" />
                                    <a class="card-footer" href="/">Mon espace locataire</a>
                                </div>
                            </div>
                        </Col>

                        <Col md={1}></Col>
                    </Row>


                </Container>
            </div>
        )
    }
}