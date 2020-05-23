import React, {Component} from 'react';
import MenuBottomApp from './MenuBottomApp';
import { Col, Container, Row, Form} from 'react-bootstrap';

export class HomepageApp extends Component {


    render(){
        return (
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        Accueil
                    </Row>
                     <MenuBottomApp/>   
                </Container>
                   
            </div>

        )
    }
}

export default HomepageApp;