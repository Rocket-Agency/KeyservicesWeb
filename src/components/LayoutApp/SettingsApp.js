import React, {Component} from 'react';
import MenuBottomApp from './MenuBottomApp';
import { Col, Container, Row, Form} from 'react-bootstrap';

export class SettingApp extends Component {


    render(){
        return (
            <div>
                <Container>
                    Settings
                     <MenuBottomApp/>     
                </Container>
            </div>

        )
    }
}

export default SettingApp;