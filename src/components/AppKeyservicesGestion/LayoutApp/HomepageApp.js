import React, {Component} from 'react';
import '../../../css/HomepageApp.scss';
import { Container, Row,  Col } from 'react-bootstrap';
import HeaderApp from './HeaderApp';

export class HomepageApp extends Component {


    render(){
        return (
            <div>
                <Container >
                    <Row className="d-flex justify-content-center">
                        <HeaderApp />
                    </Row> 
                </Container>
                
                <Container>
                     <Row>
                        <Col md={12} className="welcome-message">
                            <h1> Bienvenue Nom et Prénom sur l'application Keyservices Gestion</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default HomepageApp;