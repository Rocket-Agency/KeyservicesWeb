import React, {Component} from 'react';
import MenuBottomApp from './MenuBottomApp';
import { Col, Container, Row, Form} from 'react-bootstrap';

export class MapApp extends Component {


    render(){
        return (
            <div>
                <Container>
                    Map
                     <MenuBottomApp/>     
                </Container>
                   
            </div>

        )
    }
}

export default MapApp;