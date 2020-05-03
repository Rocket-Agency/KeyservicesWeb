import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

import 'react-phone-input-2/lib/bootstrap.css'


export class AnnounceAdress extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2 className="title-form">Adresse de votre annonce</h2>
                    <h2>
			            <p class="step-icon"><span>1</span></p>
			            <span class="step-text">Personal Info</span>
			        </h2>
  
                    <Container fluid>
                        <Row>
                            <Col  xs={12} md={3} className="mt-5 pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>N° de rue</Form.Label>
                                    <Col md={6}>
                                    <TextField
                                        id="outlined-number"
                                        label="Numéro de rue"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={4} className="mt-5 pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Type de rue</Form.Label>


                                    <Col>
                                        {/* <TextField
                                            required id="standard-required"
                                            label="Entrez votre prénom"
                                            onChange={handleChange('first_name')}
                                            defaultValue={values.first_name}
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                        /> */}
                                        <div>Liste type de rue => rue, allée, boulevard, etc...</div>
                                    </Col>
                                </Form.Row>  
                            </Col>
                            <Col  xs={12} md={4} className="mt-5 pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Nom de rue</Form.Label>
                                    <Col>
                                        <TextField
                                            type="text" 
                                            onChange={handleChange('tel')} 
                                            defaultValue={values.tel} 
                                            pattern="^\d{4}-\d{3}-\d{4}$" 
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            label="Nom de rue"
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                
                        <Row>


                            <Col  xs={12} md={12} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={2}>Information complémentaire</Form.Label>
                                        <Col>
                                            <TextField
                                                type="text" 
                                                onChange={handleChange('tel')} 
                                                defaultValue={values.tel} 
                                                pattern="^\d{4}-\d{3}-\d{4}$" 
                                                required id="standard-required"
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                label="Bat"
                                            />
                                        </Col>
                                </Form.Row>     
                            </Col>
                            <br />
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
            </div>
        )
    }
}

export default AnnounceAdress;