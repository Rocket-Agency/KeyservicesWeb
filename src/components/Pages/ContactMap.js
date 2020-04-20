//Contact.js
import React, {Component} from 'react'
import '../../css/Contact.scss';

import {Form, Col, Container, Row, Button} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom';

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export class ContactMap extends Component {
    render() {

        return(
            <div className="card contact-bloc-map">
                <img className="card-img style-card" src='./images/map.png' className="map-contact" alt="map contact"/>
            </div>
        )
    }
}

export default ContactMap;