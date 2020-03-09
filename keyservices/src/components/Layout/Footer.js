import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import '../../css/Footer.css';


export class Footer extends Component {
    render() {
        return(
            <Container>
                <Row>          
                    <div className="bottom"></div>
                </Row>
                <Row>             
                    <footer className="p-4 text-center">
                        <p className="text-white">
                            &copy;{new Date().getFullYear()} Keyservices - All Rights
                            Reserved
                        </p>
                     </footer>
                </Row>              
            </Container>
            )
        }
    }
    
export default Footer;