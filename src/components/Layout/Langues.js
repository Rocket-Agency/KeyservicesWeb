import React, {Component} from 'react';
import '../../css/Langues.scss';

import { Col, Row, Container } from 'react-bootstrap';


export class Langues extends Component {
    render() {
        return(
                <div>
                    <Col sm={3} className="d-flex justify-content-end">
                        <img src='./images/French-flag.png' alt="Langue Française" />
                    </Col>
                    <Col sm={3}className="d-flex justify-content-left">
                        <img src='./images/UK-flag.png' alt="Langue Française" />
                    </Col>
                </div>
            )
        }
    }
    
export default Langues;