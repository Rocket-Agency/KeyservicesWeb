import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { Col, Container, Row, Card} from 'react-bootstrap';
import '../../css/MonEspace.scss';
import { BreadcrumbItem } from '../../index';

import ProgressiveImage from "react-progressive-graceful-image";
import LocataireTiny from '../../ImagesPlaceholder/LocataireTiny.png';
import ProprietaireTiny from '../../ImagesPlaceholder/PropriétaireTiny.png';

export class MonEspace extends Component {

    render() {
        return(
            <div>

                <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                <BreadcrumbItem >Connexion</BreadcrumbItem>

                <div className="d-flex justify-content-center mt-3">
                    <h3>Connexion</h3>
                </div>

                <Container fluid>
                    <Row id="contentEspace">
                        <Col md={6}>

                            <div className="d-flex justify-content-center">
                                <Card className="card">
                                    <Link to="/loginProprietaire">
                                        <ProgressiveImage  className="card-img" 
                                            src='./images/Proprietaire.png' 
                                            placeholder={ProprietaireTiny}
                                        >
                                            {src => <img src={src} width="100%" alt="Espace propriétaire"  />}
                                        </ProgressiveImage>
                                    </Link>   
                                    <Link className="card-footer" to="/loginProprietaire">Mon espace propriétaire</Link>
                                </Card>
                            </div>
                        </Col>     

                        <div className="Vertical-lign-espace align-item-connexion"></div>

                        <Col md={6}>
                            <div className="d-flex justify-content-center" >
                                <Card className="card">
                                    <Link to="/loginLocataire">
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/Locataire.png'
                                            placeholder={LocataireTiny} 
                                        >
                                            {src => <img src={src} width="100%" alt="Espace Locataire"  />}
                                        </ProgressiveImage>
                                    </Link>   
                                    <Link className="card-footer" to="/loginLocataire">Mon espace locataire</Link>                              
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}