import React, {Component} from 'react';
import { Col, Container, Row, Form} from 'react-bootstrap';

export class SettingsApp extends Component {


    render(){
        return (
            <div>
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                        Settings   
                    </Row>
                </Container>
            </div>

        )
    }
}

export default SettingsApp;