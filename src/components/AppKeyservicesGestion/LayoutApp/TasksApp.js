import React, {Component} from 'react';
// import '../../../css/LogoutApp.scss';
import { Container, Row } from 'react-bootstrap';
import HeaderApp from './HeaderApp';

export class HomepageApp extends Component {


    render(){
        return (
            <div>
                <Container >
                    <Row className="d-flex justify-content-center">
                        <HeaderApp />
                    </Row> 
                    <Row>Liste des tâches</Row>
                </Container>
                   
            </div>

        )
    }
}

export default HomepageApp;