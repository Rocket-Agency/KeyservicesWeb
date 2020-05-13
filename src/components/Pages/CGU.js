import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Col, Container, Row } from 'react-bootstrap';
import '../../css/Footer.scss';

import { BreadcrumbItem } from '../../index';
import HomeIcon from '@material-ui/icons/Home';



export class CGU extends Component {
    render() {
        return (
            <div>
                <div className="mt-3">
                    <Helmet>
                        <title>Keyservices - Conditions Générales d'Utilisation</title>
                    </Helmet>

                    <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                    <BreadcrumbItem >Conditions Générales d'Utilisation</BreadcrumbItem>

                    <Container fluid>
                        <div className="d-flex justify-content-center">
                            <h1>Conditions Générales d'Utilisation</h1>
                        </div>
                    </Container>

                    <Container>
                        Text
                    </Container>

                </div>               
            </div>
        )
    }
}

//Mettre google analytics dans le footer
    
    
export default CGU;