import React, {Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';

export class SettingsApp extends Component {


    render(){
        return (
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="d-flex justify-content-center"><h4>PARAMÉTRAGE</h4></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div>Langue</div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div>Contraste</div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div>Profil</div>
                         {/* <Redirect to='/profilUserConcierge'/>; */}
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default SettingsApp;