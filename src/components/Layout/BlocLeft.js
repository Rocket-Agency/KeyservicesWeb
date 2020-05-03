import React, {Component} from 'react';
import '../../css/BlocLeft.scss';

import {Form, FormControl, Button, Col, Row} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go';
import { Visible, Hidden } from 'react-grid-system';

import ReactFlagsSelect from 'react-flags-select';
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