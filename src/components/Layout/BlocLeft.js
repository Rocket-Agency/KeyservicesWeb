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
            <div class="blocLeftSearchLang">
                <Row className="d-flex justify-content-center">
                        {/* <Col sm={3} className="d-flex justify-content-end">
                            <img src='./images/French-flag.png' alt="Langue Française" />
                        </Col>
                        <Col sm={3}className="d-flex justify-content-left">
                            <img src='./images/UK-flag.png' alt="Langue Française" />
                        </Col> */}
                         <Visible xs sm>
                            <Row className="d-flex justify-content-center">
                        
                                {/* <select className="mt-3 selectLangues">
                                    <option selected value="french">Français</option>
                                    <option value="english">Anglais</option>
                                </select>      */}

                                <ReactFlagsSelect 
                                 defaultCountry="FR"
                                    countries={["GB", "FR"]} />          
                             </Row>
                         </Visible>

                        <Hidden xs sm>
                            <Col sm={3} className="d-flex justify-content-center">
                                <img src='./images/French-flag.png' alt="Langue Française" />
                            </Col>
                            <Col sm={3}className="d-flex justify-content-center">
                                <img src='./images/UK-flag.png' alt="Langue Française" />
                            </Col>
                        </Hidden>
                                                
                    <Form className="p-2 mt-3 searchbarHeader justify-content-center" inline>
                        <Button className="searchIconZone">
                            <GoSearch/>
                        </Button>
                        <FormControl type="text" placeholder="Search" className="mr-sm-1 searchFormControl" />
                    </Form>
                </Row>
            </div>
            )
        }
    }
    
export default BlocLeft;