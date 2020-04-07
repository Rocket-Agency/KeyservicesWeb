import React, {Component} from 'react';
import '../../css/Searchbar.scss';

import {Form, FormControl, Button, Col, Row} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go';

  export class BlocLeft extends Component {
    render() {
        return(
            <Col md={12}>
                <Row className="d-flex justify-content-end">
                    <Col sm={3} className="d-flex justify-content-end">
                        <img src='./images/French-flag.png' alt="Langue Française" />
                    </Col>
                    <Col sm={3}className="d-flex justify-content-left">
                        <img src='./images/UK-flag.png' alt="Langue Française" />
                    </Col>
                
                    <Form className="p-2 mt-3 searchbarHeader justify-content-center" inline>
                        <Button className="searchIconZone">
                            <GoSearch/>
                        </Button>
                        <FormControl type="text" placeholder="Search" className="mr-sm-1 searchFormControl" />
                    </Form>
                </Row>
            </Col>
            )
        }
    }
    
export default BlocLeft;