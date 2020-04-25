import React, {Component} from 'react'
import '../../css/Contact.scss';

import {Col, Container, Row} from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';


export class ContactInfos extends Component {
    render() {

        return(
            <div>
                 <Container className="contact-bloc-informations">
                     <Row >
                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                             <Row> 
                                <img src='./images/Icon_position.png' alt="adresse_keyservices"/>
                            </Row>
                        </Col>
                        <Col xs={12} md={8} className="Position_informations d-flex">
                            Rocket Agency - 18 rue Léon Frot - 75011 PARIS
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                            <Row> 
                                <img src='./images/Icon_email.png' alt="contact_keyservices"/>
                            </Row>
                        </Col>
                        <Col xs={12} md={8} className="Position_informations d-flex">
                            contact@keyservices.com
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={4} className="Position_icon d-flex justify-content-center">
                            <Row> 
                                <img src='./images/Icon_phone.png' alt="number"/>
                            </Row>
                        </Col>
                        <Col xs={12} md={8} className="Position_informations d-flex">
                            01.21.55.16.86
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactInfos;
