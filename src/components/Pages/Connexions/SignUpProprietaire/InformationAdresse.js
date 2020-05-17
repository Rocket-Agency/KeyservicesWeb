import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';
import { Button, Input } from 'reactstrap';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import TextField from '@material-ui/core/TextField';


export class InformationAdresse extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    

    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm">
                    <Row>
                        <Col sm>
                            <h2 className="title-form">1 - Information Générales</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form title-form-active">2 - Information sur votre Adresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form">3 - Information sur votre Connexion</h2>
                        </Col>
                    </Row>
                        <Row className="mt-4">
                            <Col xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Votre adresse de facturation</Form.Label>
                                         <Col>
                                             <Col>
                                                    <TextField
                                                        placeholder="Entre  votre adresse de facturation" 
                                                        required id="standard-required"
                                                        onChange={handleChange('factureAdress')}
                                                        defaultValue={values.factureAdress} 
                                                        variant="outlined"
                                                        pattern="[A-Za-z]{3}"
                                                        fullWidth
                                                        type="text"
                                                        size="small"                     
                                                    />   
                                                </Col>
                                            </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Code postal</Form.Label>
                                    <Col>
                                        <Col>
                                            <TextField
                                                placeholder="Entre votre Code Postal" 
                                                required id="standard-required"
                                                onChange={handleChange('zipCode')}
                                                defaultValue={values.factureAdress} 
                                                variant="outlined"
                                                pattern="[A-Za-z]{3}"
                                                fullWidth
                                                type="text" 
                                                size="small"                    
                                            />   
                                        </Col>                                        
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={6} className="pb-2 pt-3">
                                <Form.Row>
                                    <Form.Label column sm={12}>Veuillez fournir un justificatif de domicile</Form.Label>
                                </Form.Row>

                                <Form.Row className="pb-3">
                                <diiv className="attachmenBtn m-2"> 
                                    <AttachFileIcon className="iconAttachFile"/>  
                                            Envoyer un justificatif   
                                </diiv>
                                    <Input type="file" name="file" id="exampleFile" />
                                </Form.Row>     
 
                                {/* <Button className="attachmenBtn">
                                        <AttachFileIcon className="iconAttachFile" type="file"/>  
                                        Envoyer un justificatif
                                    </Button>      */}

                            </Col>
                            <Col xs={12} md={12} className="d-flex justify-content-around pb-3"> 
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        onClick={this.back}
                                    >Retour</Button>


                                    <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.continue}
                                    >Continuer</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
    export default InformationAdresse;