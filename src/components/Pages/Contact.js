import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Hidden } from 'react-grid-system';
import Iframe from 'react-iframe';
import HomeIcon from '@material-ui/icons/Home';
import '../../css/Contact.scss';
import { BreadcrumbItem } from '../../index';
import FormContact from './Molecule/FormContact';
import ContactInfos from './ContactInfos';

export class Contact extends Component {
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
                                    
                                <FormContact/>
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
        </div>
        )
    }

}

export default Contact;
