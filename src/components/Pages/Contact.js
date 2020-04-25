//Contact.js
import React, {Component} from 'react'
import '../../css/Contact.scss';

import {Form, Col, Row} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
// import { Link } from 'react-router-dom';
import Img from 'react-cool-img';
import ImgDefaultMap from '../../ImagesPlaceholder/placeholderMap.png'

// import ContactMap from './ContactMap';
import ContactInfos from './ContactInfos';

export class Contact extends Component {
    render() {
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

                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridName">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control type="name" placeholder="Entrer votre nom" />
                                            </Form.Group>
                                            

                                            <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridLastName">
                                            <Form.Label>Prénom</Form.Label>
                                            <Form.Control type="lastname" placeholder="Entrer votre prénom" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Entrer votre adresse email" />
                                            </Form.Group>
                                            

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Sujet</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Choisir un sujet...</option>
                                                    <option>Demande d'informationn</option>
                                                </Form.Control>
                                                </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col}  controlId="votreMessage.ControlTextarea">
                                                <Form.Label>Votre message</Form.Label>
                                                <Form.Control as="textarea" rows="3" placeholder="Entrer votre message" />
                                            </Form.Group>
                                        </Form.Row>

                                       <Form.Row className="mt-4">

                                            <Col xs={8} sm={12} className="d-flex justify-content-end align-items-center">
                                                <div id="container">                    
                                                    <button className="learn-more">
                                                        <span className="circle" aria-hidden="true">
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                       <span className="button-text">Envoyer</span>
                                                    </button>
                                                </div>
                                            </Col>      

                                       </Form.Row>

                                    </Form>
                                </div>
                            </div>

                                <div className="Vertical-lign-contact align-item-center"></div>

                                <Hidden xs sm md>
                                    <div className="Vertical-lign-contact align-item-center"></div>
                                </Hidden>

                                <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                    <div className="card contact-bloc-map">
                                        {/* <img className="card-img style-card" src='./images/map.png' className="map-contact" alt="map contact"/> */}
                                        <Img className="card-img style-card map-contact"
                                            placeholder={ImgDefaultMap} 
                                            src='./images/map.png'
                                            debounce={1000}
                                            alt="Carte position entreprise"
                                        />       
                                    </div>

                                    <Row fluid="md" className="horizontal_lign" ></Row>

                                    <ContactInfos />
                                </div>
                            </div>
                        </div>
            
            </div>
        )
    }

}

export default Contact;
