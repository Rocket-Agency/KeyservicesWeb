import React, {Component} from 'react';
import '../../css/BlocLeft.scss';
import {Row} from 'react-bootstrap';
import 'react-flags-select/css/react-flags-select.css';


  export class BlocLeft extends Component {
    render() {
        return(
            <div className="blocLeftSearchLang">
                <Row className="d-flex justify-content-center">

                    <button>Connexion</button>
                </Row>
            </div>
            )
        }
    }
    
export default BlocLeft;