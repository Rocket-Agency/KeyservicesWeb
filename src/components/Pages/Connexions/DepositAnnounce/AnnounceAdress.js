import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from 'reactstrap';

export class AnnounceAddresss extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


render() {
    const { values, handleChange } = this.props;
    return(
        <div>
            <Container fluid className="pt-4 blocForm" >  
                <Row>
                    <Col sm>
                        <h2 className="title-form-Announce title-form-Announce-active">1 - Votre addresse</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">2 - Votre logement </h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">3 - Règles et informations</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">4 - Tarif</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">5 - Votre annonce</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">6 - Confirmation</h2>
                    </Col>
                    <Col sm>
                        <h2 className="title-form-Announce ">7 - Paiement</h2>
                    </Col>
                </Row>

                <Container fluid className="pt-4 blocForm" >  
                    <h2> Adresse de votre logement</h2>

                    <Container fluid>
                        <Row>
                            <Col xs={12} md={12} className="mt-3">
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={2}>Numéro de rue</Form.Label>

                                    <Col sm={1}>
                                    <TextField
                                        required id="standard-required"
                                        name="address_road_number"
                                        variant="outlined"
                                        pattern="[A-Za-z]{3}"
                                        fullWidth
                                        type="number"
                                        size="small"
                                    />   
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={6} className="mt-3">
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={4}>Type de rue</Form.Label>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" name="address_road_type" >
                                        <option>Choisir un type de rue</option>
                                        <option>Rue</option>
                                        <option>Allée</option>
                                        <option>Boulevard</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Form.Row>  
                            </Col>
                            </Row>
                            
                            <Row>
                            <Col xs={12} md={12}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Nom de rue</Form.Label>
                                <Col sm={12}>
                                    <TextField
                                    type="text" 
                                    name="address_road_name"
                                    pattern="[A-Za-z]{3}"
                                    required id="standard-required"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    />
                                </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={12} className="mt-3">
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Information complémentaire (Bâtiment, escalier, interphone etc...)</Form.Label>
                                <Col sm={12}>
                                    <TextField
                                    type="text" 
                                    name="address_additional_info"
                                    pattern="[A-Za-z]{3}"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    />
                                </Col>
                                </Form.Row>     
                            </Col>
                            </Row>

                            <Row className="pt-3 pb-4">
                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Région</Form.Label>
                                <Col sm={8}>
                                    <TextField
                                    type="text" 
                                    name="address_state"
                                    pattern="[A-Za-z]{3}"
                                    required id="standard-required"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    />
                                </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Ville</Form.Label>
                                <Col sm={8}>
                                    <TextField
                                    type="text" 
                                    name="address_city"
                                    pattern="[A-Za-z]{3}"
                                    required id="standard-required"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    />
                                </Col>
                                </Form.Row>     
                            </Col>

                            <Col xs={12} md={4}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Code postal</Form.Label>
                                    <Col sm={8}>
                                    <TextField
                                        required id="standard-required"
                                        name="address_zip_code"
                                        // onChange={handleChange('zipCode')}
                                        // defaultValue={values.factureAdress} 
                                        variant="outlined"
                                        pattern="[A-Za-z]{3}"
                                        fullWidth
                                        type="text" 
                                        size="small"                    
                                        />   
                                    </Col>   
                                </Form.Row>     
                            </Col>
                         </Row>
                         <Row xs={12} md={12} className="d-flex justify-content-center pt-3 pb-3">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.continue}
                                aria-label="Continuer"
                                >Continuer
                            </Button>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </div>
    )
  }
}

export default AnnounceAddresss;