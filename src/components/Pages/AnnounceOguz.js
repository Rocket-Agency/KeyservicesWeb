import React, {Component} from 'react';
import '../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class AnnounceOguz extends React.Component {
    state = {
        step: 1,
        data : {
            address_road_number:'',
            address_road_type: '',
            address_road_name: '',
            address_additional_info: '',
            address_state: '',
            address_city: '',
            address_zip_code: '',
        
            housing_type_property: '',
            housing_type: '',
            housing_nb_room: '',
            housing_nb_bathroom: '',
            housing_observation: '',
        
            equipment_kitchen: '',
            equipment_heater: '',
            equipment_wifi: '',
            equipment_iron: '',
            equipment_working_space: '',
            equipment_private_bathroom: '',
            equipment_shampoo: '',
            equipment_air_conditioner: '',
            equipment_hangers: '',
            equipment_hair_dryer: '',
            equipment_television: '',
        
            installation_parking: '',
            installation_gym: '',
            installation_pool: '',
            installation_jaccuzi: '',
        
            info_stairs: '',
            info_pets: '',
            info_no_parking: '',
            info_shared_space: '',
            info_equipment_restriction: '',
            info_monitoring_device: '',
            info_weapons: '',
            info_dangerous_animals: '',
            info_noise: '',
        
            rule_age_2: '',
            rule_age_2_12: '',
            rule_pets: '',
            rule_smoking: '',
            rule_event: '',
        
            info_area: '',
            info_around: '',
            rule_add: '',
            info_infos: '',
            info_availability: '',
            observation: '',
        
            price_starting:'',
            price_min:'',
            price_max:'',
            
            ad_title:'',
            ad_description:'',
            ad_capacity:'',
            ad_notice:'',
            ad_arrival_time:'',
            ad_departure_time:'',
            ad_min_night:'',
            ad_max_night:'',
            ad_starting_date:'',
            ad_ending_date:'',
            
            selectedFile:[],
            files:[],
        },
        disabled: false,
        submitted: false,
    }

    onChange = (event) => {
        const { data } = this.state;
        data[event.target.name] = event.target.value;
        this.setState({ data });
    }

    submit = () => {
        this.form.submit();
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    prevStep = () => {
        let { step } = this.state;
        if (step > 1) {
            step--;
        }
        this.setState({ step });
    }

    nextStep = () => {
        this.form.isFormValid(false).then((isValid) => {
            if (isValid) {
                let { step } = this.state;
                if (step < 3) {
                    step++;
                }
                this.setState({ step });
            }
        });
    }

    validatorListener = (result) => {
        console.log(this.state.disabled);
        this.setState({ disabled: !result });
    }

    renderStep = () => {
        const { step, data } = this.state;
        let content = null;
        switch (step) {
            case 1:
                content = (
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
                                    <h2 className="title-form-Announce">5 - Votre annonce</h2>
                                </Col>
                                <Col sm>
                                    <h2 className="title-form-Announce">6 - Validation</h2>
                                </Col>
                                <Col sm>
                                    <h2 className="title-form-Announce">7 - Nos services</h2>
                                </Col>
                                <Col sm>
                                    <h2 className="title-form-Announce ">8 - Paiement</h2>
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
                                                    <TextValidator
                                                        key={1}
                                                        name="address_road_number"
                                                        validators={['required', 'minNumber:0', 'matchRegexp:^[0-9]$']}
                                                        errorMessages={['required field', 'invalid number','invalid number']}
                                                        value={data.address_road_number}
                                                        onChange={this.onChange}
                                                        validatorListener={this.validatorListener}
                                                    />
                                                </Col>
                                            </Form.Row>     
                                        </Col>
                                        </Row>
                                        
                                        <Row>
                                        <Col xs={12} md={12}>
                                            <Form.Row>
                                            <Form.Label className="label-info-annonce" column sm={12}>Nom de rue</Form.Label>
                                                <Col sm={12}>
                                                    <TextValidator
                                                        key={1}
                                                        type="text"
                                                        name="address_road_name"
                                                        validators={['required']}
                                                        errorMessages={['required field']}
                                                        value={data.address_road_name}
                                                        onChange={this.onChange}
                                                        validatorListener={this.validatorListener}
                                                    />
                                                </Col>
                                            </Form.Row>     
                                        </Col>

                                        <Col xs={12} md={12} className="mt-3">
                                            <Form.Row>
                                            <Form.Label className="label-info-annonce" column sm={12}>Information complémentaire (Bâtiment, escalier, interphone etc...)</Form.Label>
                                                <Col sm={12}>
                                                    <TextValidator
                                                        key={1}
                                                        type="text"
                                                        name="address_additional_info"
                                                        value={data.address_additional_info}
                                                        onChange={this.onChange}
                                                        validatorListener={this.validatorListener}
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
                                                    <TextValidator
                                                        key={1}
                                                        type="text"
                                                        name="address_state"
                                                        validators={['required']}
                                                        errorMessages={['required field']}
                                                        value={data.address_state}
                                                        onChange={this.onChange}
                                                        validatorListener={this.validatorListener}
                                                    />
                                                </Col>
                                            </Form.Row>     
                                        </Col>

                                        <Col xs={12} md={4}>
                                            <Form.Row>
                                            <Form.Label className="label-info-annonce" column sm={12}>Ville</Form.Label>
                                                <Col sm={8}>
                                                    <TextValidator
                                                        key={1}
                                                        type="text"
                                                        name="address_city"
                                                        value={data.address_city}
                                                        validators={['required']}
                                                        errorMessages={['required field']}
                                                        onChange={this.onChange}
                                                        validatorListener={this.validatorListener}
                                                    />
                                                </Col>
                                            </Form.Row>     
                                        </Col>

                                        <Col xs={12} md={4}>
                                            <Form.Row>
                                            <Form.Label className="label-info-annonce" column sm={12}>Code postal</Form.Label>
                                                <Col sm={8}> 
                                                <TextValidator
                                                    key={1}
                                                    type="text"
                                                    name="address_zip_code"
                                                    value={data.address_zip_code}
                                                    validators={['required', 'matchRegexp:^[0-9]{5}$']}
                                                    errorMessages={['required field', 'invalide']}
                                                    onChange={this.onChange}
                                                    validatorListener={this.validatorListener}
                                                /> 
                                                </Col>   
                                            </Form.Row>     
                                        </Col>
                                    </Row>
                                </Container>
                            </Container>
                        </Container>
                    </div>
                );
                break;
            case 2:
                content = (
                    <TextValidator
                        key={2}
                        name="email2"
                        label="email 2"
                        validators={['required', 'isEmail']}
                        errorMessages={['required field', 'invalid email']}
                        value={data.email2}
                        onChange={this.onChange}
                        validatorListener={this.validatorListener}
                    />
                );
                break;
            case 3:
                content = (
                    <TextValidator
                        key={3}
                        name="email3"
                        label="email 3"
                        validators={['required', 'isEmail']}
                        errorMessages={['required field', 'invalid email']}
                        value={data.email3}
                        onChange={this.onChange}
                        validatorListener={this.validatorListener}
                    />
                );
                break;
        }
        return content;
    }

    render() {
        const { step, disabled, submitted } = this.state;
        return (
            <ValidatorForm
                ref={(r) => { this.form = r; }}
                onSubmit={this.handleSubmit}
                instantValidate
            >
                <h2>Step-by-step</h2>
                <br />
                {this.renderStep()}
                <br />
                <br />
                <br />
                <Button
                    onClick={this.prevStep}
                    style={{ marginRight: '16px' }}
                    disabled={step === 1}
                >
                    previous
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={step < 3 ? this.nextStep : this.submit}
                    disabled={disabled || submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (step < 3 ? 'Next' : 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}
