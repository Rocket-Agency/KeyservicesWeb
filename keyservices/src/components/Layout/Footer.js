import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../css/Footer.css';


export class Footer extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>                
                        <div className="bottom"></div>
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>                
                    <footer className="fixed-bottom text-center">
                        <p className="text-white">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights
                            Reserved
                        </p>
                     </footer></Col>
                    <Col>3 of 3</Col>
                </Row>              
            </Container>
            )
        }
    }
    
export default Footer;