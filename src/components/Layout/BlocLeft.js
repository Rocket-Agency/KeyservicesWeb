import React, {Component} from 'react';
import '../../css/BlocLeft.scss';

import {Form, FormControl, Button, Col, Row} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go';
import { Visible, Hidden } from 'react-grid-system';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import Img from 'react-cool-img';
import ImgDefaultLangues from '../../ImagesPlaceholder/placeholderLangues.png'

  export class BlocLeft extends Component {
    render() {
        return(
            <div className="blocLeftSearchLang">
                <Row className="d-flex justify-content-center">

                         <Visible xs sm>
                            <Row className="d-flex justify-content-center">
                        
                                <ReactFlagsSelect 
                                 defaultCountry="FR"
                                    countries={["GB", "FR"]} />          
                             </Row>
                         </Visible>

                        <Hidden xs sm>
                            <Col sm={3} className="d-flex justify-content-center">
                                <Img
                                    placeholder={ImgDefaultLangues} 
                                    src='./images/French-flag.png'
                                    debounce={1000}
                                    alt="Langue Française"
                                /> 
                            </Col>
                            <Col sm={3}className="d-flex justify-content-center">
                                <Img
                                    placeholder={ImgDefaultLangues} 
                                    src='./images/UK-flag.png'
                                    debounce={1000}
                                    alt="Langue Anglais"
                                /> 
                            </Col>
                        </Hidden>
                                                
                    <Form className="p-2 mt-3 searchbarHeader justify-content-center" inline>
                        <Button className="searchIconZone" aria-label="Rechercher">
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