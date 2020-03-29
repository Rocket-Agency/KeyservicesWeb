import React, {Component} from 'react';
// import '../../css/MonEspace.scss';

import { Col, Container, Row, Card} from 'react-bootstrap';

export class ConnexionProprietaire extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                <h3>Connexion</h3>
                </div>

                <Container fluid>
                    <Row>

                        <Col md={1}></Col>

                        <Col md={5}>
                        <div className="mt-5 d-flex justify-content-center">
                            <h3>Connexion</h3>
                        </div>
                        </Col>     

                        <div className="Vertical-lign align-item-center mt-5"></div>

                        <Col md={5}>
                            <div className="d-flex justify-content-center">

                            </div>
                        </Col>

                        <Col md={1}></Col>
                    </Row>

                </Container>
            </div>
        )
    }
}