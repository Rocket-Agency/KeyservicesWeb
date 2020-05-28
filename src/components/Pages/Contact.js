//Contact.js
import React, {Component} from 'react'
import '../../css/Contact.scss';

import { Hidden } from 'react-grid-system';
import Iframe from 'react-iframe';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import { Row, Col, Container, Form } from 'react-bootstrap';
import ContactInfos from './ContactInfos';
import Recaptcha from "react-recaptcha";
import { render } from 'react-dom';
import axios from 'axios';

export class Contact extends Component {
    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    values = {
        first_name: "",
        last_name: "",
        email: "",
        object: "",
        message: "",
        recaptcha: ""
    }
    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    submit(){
        this.form.submit();
    }

    handleSubmit(){
        this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    validatorListener = (result) => {
        this.setState({ disabled: !result });
    }

    handleChange(event) {
        this.setState({
        [event.target.name]: event.target.value
        });
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src =
            "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() {
        const { first_name, last_name, email, object, message, recaptcha } = this.state;
        return(
            <div>
                <div className="mt-5 d-flex text-center justify-content-center">
                    <h1>On s’occupe de tous et vous de rien</h1>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left mb-2">
                            <div className="contact-bloc" >

                                <div className="d-flex text-center justify-content-center">
                                    <h2>Contactez nous !</h2>
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ValidatorForm
                                    ref="form"
                                    onSubmit={this.handleSubmit}
                                    onError={errors => console.log(errors)}
                                >
                                        <Form>
                                            <Form.Row>
                                                {/* <div className="form-group col-sm-6">
                                                    <label htmlFor="first_name">Prénom</label>
                                                    <Field name="first_name" type="text" className={'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                                                </div> */}
                                                <Col sm={12}>
                                                    <TextValidator
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                        label="Prénom"
                                                        name="first_name"
                                                        validators={['required', 'matchRegexp:^[a-zA-Z]{1,}$']}
                                                        errorMessages={['Le prénom est requis', 'Prénom Invalide']}
                                                        value={this.state.first_name}
                                                        onChange={this.handleChange}
                                                        validatorListener={this.state.validatorListener}
                                                    /> 
                                                </Col>
                                                
                                                {/* <Col sm={12}>
                                                    <TextValidator
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                        label="Nom"
                                                        name="last_name"
                                                        validators={['required', 'matchRegexp:^[a-zA-Z]{1,}$']}
                                                        errorMessages={['Le nom est requis', 'Nom Invalide']}
                                                        value={values.last_name}
                                                        onChange={handleChange('last_name')}
                                                        validatorListener={this.props.validatorListener}
                                                    /> 
                                                </Col>
                                                <div className="form-group" className="form-group col-sm-6">
                                                    <label htmlFor="last_name">Nom</label>
                                                    <Field name="last_name" type="text" className={'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                                                </div>
                                            */}</Form.Row>{/*
                                                
                                            <Form.Row>
                                                <div className="form-group col-sm-6">
                                                    <label htmlFor="email">Email</label>
                                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                </div>
                                                
                                                <div className="form-group col-sm-6">
                                                    <label htmlFor="object">Sujet</label>
                                                    <Field name="object" type="text" className={'form-control' + (errors.object && touched.object ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="object" component="div" className="invalid-feedback" />
                                                </div>
                                            </Form.Row>

                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <Field name="message" component="textarea" row="3" className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="message" component="div" className="invalid-feedback" />
                                                </div> */}

                                            <Form.Row className="mt-4 validZone">
                                                <div className="form-group">
                                                    <Recaptcha
                                                        sitekey="6Lfx9O8UAAAAAPe1JLS49cFlkjs9Zgrp6-db8fHp"
                                                        render="explicit"
                                                    />
                                                </div>

                                                <div id="container">                    
                                                    <button type="submit" className="learn-more" aria-label="Envoyer">
                                                        <span className="circle" aria-hidden="true">
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                    <span className="button-text">Envoyer</span>
                                                    </button>
                                                </div>
                                                </Form.Row>
                                            </Form>
                                        )}
                                    </ValidatorForm>
                                </div>
                            </div>

                            <div className="Vertical-lign-contact align-item-center"></div>

                            <Hidden xs sm md>
                                <div className="Vertical-lign-contact align-item-center"></div>
                            </Hidden>

                            <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                <div className="card contact-bloc-map">
                                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.213648884978!2d2.385786116150614!3d48.85413620895968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720abf9147c5%3A0x6eaa6ef13a27f0!2s18%20Rue%20L%C3%A9on%20Frot%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1587840079756!5m2!1sfr!2sfr" width="100%" height="300px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"/>
                                </div>

                                <ContactInfos />
                            </div>
                        </div>
                    </div>
            
            </div>
        )
    };
}



export default Contact;