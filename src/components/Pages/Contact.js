//Contact.js
import React, {Component} from 'react'
import '../../css/Contact.scss';

import { Hidden } from 'react-grid-system';
import Iframe from 'react-iframe';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import ContactInfos from './ContactInfos';
import Recaptcha from "react-recaptcha";
import {Helmet} from "react-helmet";
import { BreadcrumbItem } from '../../index';
import HomeIcon from '@material-ui/icons/Home';

export class Contact extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src =
            "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() {
        return(
            <div>
                <Helmet>
                    <title>Keyservices - Contact</title>
                </Helmet>
                
            <div className="mt-3">
                <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                <BreadcrumbItem >Contact</BreadcrumbItem>


                <div className="d-flex text-center justify-content-center">
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


                                    <Formik
                                        initialValues={{
                                            prenom: '',
                                            nom: '',
                                            email: '',
                                            sujet: '',
                                            message: '',
                                            recaptcha: ''
                                        }}
                                        validationSchema={Yup.object().shape({
                                            prenom: Yup.string()
                                                .required('Veuillez indiquer votre prénom'),
                                            nom: Yup.string()
                                                .required('Veuillez indiquer votre nom'),
                                            email: Yup.string()
                                                .email('Veuillez entrez une adresse mail valide')
                                                .required('Veuillez indiquer votre mail'),
                                            sujet: Yup.string()
                                                .required('Veuillez choisir un sujet'),
                                            message: Yup.string()
                                                .required('Veuillez entrer votre message'),
                                            recaptcha: Yup.string()
                                                .required('Veuillez confirmer que vous êtes humain')
                                        })}
                                        onSubmit={fields => {
                                            alert('SUCCES!! :-)\n\n' + JSON.stringify(fields, null, 4))
                                        }}
                                        render={({ errors, status, touched, setFieldValue }) => (
                                            <Form>
                                                <Form.Row>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="prenom">Prénom</label>
                                                        <Field name="prenom" type="text" className={'form-control' + (errors.prenom && touched.prenom ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="prenom" component="div" className="invalid-feedback" />
                                                    </div>
                                                    <div className="form-group" className="form-group col-sm-6">
                                                        <label htmlFor="nom">Nom</label>
                                                        <Field name="nom" type="text" className={'form-control' + (errors.nom && touched.nom ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="nom" component="div" className="invalid-feedback" />
                                                    </div>
                                                </Form.Row>
                                                
                                                <Form.Row>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="email">Email</label>
                                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="sujet">Sujet</label>
                                                        <Field name="sujet" type="text" className={'form-control' + (errors.sujet && touched.sujet ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="sujet" component="div" className="invalid-feedback" />
                                                    </div>
                                                </Form.Row>
                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <Field name="message" component="textarea" row="3" className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="message" component="div" className="invalid-feedback" />
                                                </div>
                                                <Form.Row className="mt-4">
                                                    <div className="form-group">
                                                        <Recaptcha
                                                            sitekey="6Lfx9O8UAAAAAPe1JLS49cFlkjs9Zgrp6-db8fHp"
                                                            render="explicit"
                                                            verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                                                            onloadCallback={() => { console.log("done loading!"); }}
                                                        />
                                                        {errors.recaptcha 
                                                        && touched.recaptcha && (
                                                        <p>{errors.recaptcha}</p>
                                                        )}
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
                                    />
                                </div>
                            </div>
                        </div>

                                <div className="Vertical-lign-contact align-item-center"></div>

                                <Hidden xs sm md>
                                    <div className="Vertical-lign-contact align-item-center"></div>
                                </Hidden>

                                <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                    <div className="card contact-bloc-map">
                                        {/* <img className="card-img style-card" src='./images/map.png' className="map-contact" alt="map contact"/> */}
                                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.213648884978!2d2.385786116150614!3d48.85413620895968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720abf9147c5%3A0x6eaa6ef13a27f0!2s18%20Rue%20L%C3%A9on%20Frot%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1587840079756!5m2!1sfr!2sfr" width="100%" height="300px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"/>
                                    </div>

                                    {/* <Row fluid="md" className="horizontal_lign" ></Row> */}

                                    <ContactInfos />
                                </div>
                            </div>
                        </div>
            
            </div>
        )
    };
}



export default Contact;
