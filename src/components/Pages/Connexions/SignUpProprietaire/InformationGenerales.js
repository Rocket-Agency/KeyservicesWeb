import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import Button from '@material-ui/core/Button';
import { Col, Container, Row, Form} from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';
// // import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
                <Container fluid className="pt-4 pb-4 blocForm" >  
                    <h2 className="title-form">Information  Générales</h2>
                    <Form.Row className="mt-4">
                        <Col  xs={12} md={4} className="col d-flex justify-content-center pt-3 pb-3">
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

                            <FormControl component="fieldset">
                                <FormLabel  className="label-info-generales">Civilité</FormLabel>

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
                            </FormControl>
                        </Col>
                    </Form.Row>     

                    <Container fluid>
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Nom</Form.Label>
                                    <Col>
                                    {/* <TextField
                                    placeholder="Entrez votre nom" 
                                    required id="standard-required"
                                    label="Nom"
                                    onChange={handleChange('firstName')}
                                    defaultValue={values.firstName}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    />    */}

                                            {/* id="outlined-basic" 
                                            label="Entrez votre nom" 
                                            variant="outlined" 
                                            required id="standard-required"
                                            placeholder="Entrer votre nom" 
                                            onChange={handleChange('lastName')}
                                            defaultValue={values.lastName}
                                            labelWidth={60}
                                        /> */}

                                            {/* <FormControl variant="outlined">
                                                <InputLabel htmlFor="component-outlined">Entrez votre nom</InputLabel>
                                            <OutlinedInput 
                                                required id="standard-required"
                                                defaultValue={values.lastName} 
                                                onChange={handleChange('lastName')}
                                                label="Entrez votre nom" 
                                                fullWidth
                                                />
                                            </FormControl> */}

                                            <Col>
                                                <TextField
                                                    required id="standard-required"
                                                    label="Entre votre Nom"
                                                    onChange={handleChange('lastName')}
                                                    defaultValue={values.lastName} 
                                                    variant="outlined"
                                                    pattern="[A-Za-z]{3}"
                                                    fullWidth
                                                    type="text"
                                                />   
                                            </Col>
                                        {/* <Form.Control 
                                            type="text" 
                                            outlined-basic
                                            placeholder="Entrer votre nom" 
                                            required id="standard-required"
                                            label="Last Name"
                                            onChange={handleChange('lastName')}
                                            defaultValue={values.lastName}
                                        /> */}


                                    </Col>
                                </Form.Row>     
                                {/* <TextField
                                    placeholder="Enter Your First Name" 
                                    required id="standard-required"
                                    label="Last Name"
                                    onChange={handleChange('lastName')}
                                    defaultValue={values.lastName}
                                    margin="normal"
                                    text="center"
                                    /> */}
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>
                                    <Col>
                                        <Col>
                                            <TextField
                                            // placeholder="Entrez votre prénom" 
                                            required id="standard-required"
                                            label="Entrez votre prénom"
                                            onChange={handleChange('firstName')}
                                            defaultValue={values.firstName}
                                            variant="outlined"
                                            fullWidth
                                            /> 
                                        </Col>  
                                    </Col>
                                </Form.Row>  
                                {/* <TextField
                                    placeholder="Enter Your First Name" 
                                    required id="standard-required"
                                    label="First Name"
                                    onChange={handleChange('firstName')}
                                    defaultValue={values.firstName}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    />    */}
                            </Col>
                        </Row>
                
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Numéro de téléphone</Form.Label>
                                    <Col>
                                        <Col>
                                            <TextField
                                                type="text" 
                                                placeholder="Entrer votre numéro de téléphone" 
                                                onChange={handleChange('tel')} 
                                                defaultValue={values.tel} 
                                                pattern="^\d{4}-\d{3}-\d{4}$" 
                                                required id="standard-required"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Col>
                                    </Col>
                                </Form.Row>     
                            </Col>

                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                    <Col>
                                        {/* <Form.Control 
                                            type="date" 
                                            onChange={handleChange('dateOfBirth')} 
                                            defaultValue={values.dateOfBirth} 
                                            required
                                        /> */}
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
                                            />
                                        </Col>
                                    </Col>
                                </Form.Row>     
                            </Col>
                            <br />
                        </Row>
                        <Row>
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