//Contact.js
import React, {Component} from 'react'
import '../../css/Contact.scss';
import { BreadcrumbItem } from '../../index';

import {Form, Col, Row} from 'react-bootstrap';
import { Hidden } from 'react-grid-system';
// import { Link } from 'react-router-dom';
// import Img from 'react-cool-img';
// import ImgDefaultMap from '../../ImagesPlaceholder/placeholderMap.png'
import Iframe from 'react-iframe';
import HomeIcon from '@material-ui/icons/Home';

// import ContactMap from './ContactMap';
import ContactInfos from './ContactInfos';
import {withRouter} from 'react-router-dom';
import {Helmet} from "react-helmet";
import axios from 'axios';

export class Contact extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          first_name: "",
          last_name: "",
          email: "",
          object: "",
          message: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { first_name, last_name, email, object, message} = this.state;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        axios.post("http://localhost:3001/api/contact/create",
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                object: object,
                message: message,
            },
            config
          )
          .then(response => {
            this.props.history.push('/dashboard');
          })
          .catch(error => {
          });
        event.preventDefault();
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

                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridName">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control name="first_name" type="name" placeholder="Entrer votre nom" value={this.state.first_name} onChange={this.handleChange} />
                                            </Form.Group>
                                            

                                            <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridLastName">
                                            <Form.Label>Prénom</Form.Label>
                                            <Form.Control name="last_name" type="lastname" placeholder="Entrer votre prénom" value={this.state.last_name} onChange={this.handleChange} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control name="email" type="email" placeholder="Entrer votre adresse email" value={this.state.email} onChange={this.handleChange} />
                                            </Form.Group>
                                            

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Sujet</Form.Label>
                                                <Form.Control name="object" as="select" value={this.state.object} onChange={this.handleChange}>
                                                    <option>Choisir un sujet...</option>
                                                    <option>Demande d'information</option>
                                                </Form.Control>
                                                </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col}  controlId="votreMessage.ControlTextarea">
                                                <Form.Label>Votre message</Form.Label>
                                                <Form.Control name="message" as="textarea" rows="3" placeholder="Entrer votre message" value={this.state.message} onChange={this.handleChange} />
                                            </Form.Group>
                                        </Form.Row>

                                       <Form.Row className="mt-4">

                                            <Col xs={8} sm={12} className="d-flex justify-content-end align-items-center">
                                                <div id="container">                    
                                                    <button className="learn-more" aria-label="Envoyer">
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
                                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.213648884978!2d2.385786116150614!3d48.85413620895968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720abf9147c5%3A0x6eaa6ef13a27f0!2s18%20Rue%20L%C3%A9on%20Frot%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1587840079756!5m2!1sfr!2sfr" width="100%" height="300px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"/>
                                    </div>

                                    {/* <Row fluid="md" className="horizontal_lign" ></Row> */}

                                    <ContactInfos />
                                </div>
                            </div>
                        </div>
            
            </div>
        </div>
        )
    }

}

export default withRouter(Contact);
