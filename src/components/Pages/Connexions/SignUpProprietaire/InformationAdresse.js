import React, {Component} from 'react';
import '../../../../css/Profiles.scss';

import { Col, Container, Row, Form, Button} from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';
// import { Link } from 'react-router-dom';
import AttachFileIcon from '@material-ui/icons/AttachFile';


export class InformationAdresse extends Component {

    render() {
        return(
            <div>
                <Container fluid className="pt-4 pb-4 blocForm">
                    <h2 className="title-form">Information sur votre adresse</h2>
                        <Row className="mt-4 mb-4">
                            <Col xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Votre adresse de facturation</Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="Votre adresse" />
                                    </Col>
                                    {/* <Row>
                                      <Form.Control Label value="end" control={<Radio color="primary" />} label="End" /> 
                                    </Row> */}
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Code postal</Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="Entrer votre code postal" />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6}>
                                <Form.Row>
                                    <Form.Label column sm={12}>Veuillez fournir un justificatif de domicile</Form.Label>
                                </Form.Row>

                                <Form.Row>
                                    <Button className="attachmenBtn">
                                        <AttachFileIcon className="iconAttachFile" />  
                                        Envoyer un justificatif
                                    </Button>         
                                </Form.Row>     

                                <br />
                                    <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.continue}
                                    >Continue</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
    export default InformationAdresse;