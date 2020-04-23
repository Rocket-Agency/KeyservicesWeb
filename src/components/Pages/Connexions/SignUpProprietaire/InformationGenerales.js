import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

// import Button from '@material-ui/core/Button';
import { Col, Container, Row, Form } from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';
// // import { Link } from 'react-router-dom';
// import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from 'reactstrap';
// import InputAdornment from '@material-ui/core/InputAdornment';


// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';

import 'react-phone-input-2/lib/bootstrap.css'


export class InformationGenerales extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2 className="title-form">Information  Générales</h2>
                    <Row className="mt-4">
                        <Col  xs={12} md={5} className="col d-flex justify-content-center pt-3 pb-3">
                            {/* {['checkbox'].map((type) => (
                                <div key={`custom-inline-${type}`} >
                                    <Form.Check
                                        custom
                                        inline
                                        label="Mme"
                                        type={type}
                                        id={`custom-inline-${type}-Mme`}
                                    />
                                    <Form.Check
                                        custom
                                        inline
                                        label="Mr"
                                        type={type}
                                        id={`custom-inline-${type}-Mr`}
                                    />
                                </div>
                            ))} */}
                            <Form.Row>
                                <Form.Label className="d-flex align-items-center label-info-generales">Civilité</Form.Label>

                                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                    <FormControlLabel
                                        value="Mme"
                                        control={<Radio color="primary" />}
                                        label="Mme"
                                        labelPlacement="start"
                                        defaultValue={values.sexe} 
                                        onChange={handleChange('sexe')}
                                    />
                                    <FormControlLabel
                                        value="Mr"
                                        control={<Radio color="primary" />}
                                        label="Mr"
                                        labelPlacement="start"
                                        defaultValue={values.sexe} 
                                        onChange={handleChange('sexe')}
                                    />
                                </RadioGroup>
                            </Form.Row>
                        </Col>
                    </Row>     

                    <Container fluid>
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Nom</Form.Label>

                                    <Col>
                                         <TextField
                                            required id="standard-required"
                                            label="Entre votre Nom"
                                            onChange={handleChange('last_name')}
                                            defaultValue={values.last_name} 
                                            variant="outlined"
                                            pattern="[A-Za-z]{3}"
                                            fullWidth
                                            type="text"
                                            size="small"
                                        />   
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>

                                    <Col>
                                        <TextField
                                            required id="standard-required"
                                            label="Entrez votre prénom"
                                            onChange={handleChange('first_name')}
                                            defaultValue={values.first_name}
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                        />
                                    </Col>
                                </Form.Row>  
                            </Col>
                        </Row>
                
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Numéro de téléphone</Form.Label>
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
                                            label="Entrez votre numéro de téléphone"
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                        <Col>
                                            <TextField
                                                id="date"
                                                type="date"
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                onChange={handleChange('dateOfBirth')} 
                                                defaultValue={values.dateOfBirth} 
                                                fullWidth
                                                variant="outlined"
                                                size="small"
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
                                >Continue
                            </Button>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default InformationGenerales;