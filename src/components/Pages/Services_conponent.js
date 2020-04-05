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


                <Container>
                    <Row>
                        <Col sm={6}  className="d-flex justify-content-center">
                            <img src='./images/remise_des_clef.png' className="imgServices" alt="Logo keyservices "/>
                        </Col>
                        <Col sm={6}  className="d-flex justify-content-center">
                            Texte
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col sm={6}  className="d-flex justify-content-center">
                            Texte
                        </Col>
                        <Col sm={6}  className="d-flex justify-content-center">
                            <img src='./images/remise_des_clef.png' width="500px" height="200px" alt="Logo keyservices "/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}  className="d-flex justify-content-center">
                            <img src='./images/remise_des_clef.png' width="500px" height="200px" alt="Logo keyservices "/>
                        </Col>
                        <Col sm={6}  className="d-flex justify-content-center">
                            Texte
                        </Col>
                    </Row> */}
                </Container>
            </div>
            )
        }
    }
    
export default Services_component;