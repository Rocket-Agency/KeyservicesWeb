import React, {Component} from 'react';
import MenuBottomApp from './MenuBottomApp';
import { Col, Container, Row, Form} from 'react-bootstrap';

export class SettingApp extends Component {


    render(){
        return (
            <div>
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                        Settings   
                    </Row>
                    <MenuBottomApp/>    
                </Container>
            </div>

        )
    }
}

export default SettingApp;