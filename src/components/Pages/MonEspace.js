//Mon Espace.js

import React, {Component} from 'react';
import '../../css/MonEspace.scss';
import { Link } from 'react-router-dom';

import { Col, Container, Row, Card} from 'react-bootstrap';
import Img from 'react-cool-img';
import ImgDefaultMonEspace from '../../ImagesPlaceholder/placeholderMonEspace.png'


export class MonEspace extends Component {


    render() {
        return(
            <div id="contentEspace">
                <div className="mb-2 d-flex justify-content-center">
                <h3>Mon Espace</h3>
                </div>

                <Container fluid>
                    <Row>
                        <Col md={6}>

                            <div className="d-flex justify-content-center">
                                <Card className="card">
                                    {/* <Img className="card-img" src='./images/Proprietaire.png' alt="Gerer_Mes_Locations" /> */}
                                    <Link to="/loginProprietaire">
                                        <Img className="card-img"
                                            placeholder={ImgDefaultMonEspace} 
                                            src='./images/Proprietaire.png' 
                                            debounce={1000}
                                            alt="Espace propriétaire"
                                        />  
                                    </Link>   
                                    <Link className="card-footer" to="/loginProprietaire">Mon espace propriétaire</Link>
                                </Card>
                            </div>
                        </Col>     

                        <div className="Vertical-lign-espace align-item-connexion"></div>

                        <Col md={6}>
                            <div className="d-flex justify-content-center" >
                                <Card className="card">
                                    {/* <Img className="card-img" src='./images/Locataire.png' alt="Gerer_Mes_Locations" /> */}
                                    <Link to="/loginLocataire">
                                        <Img className="card-img"
                                            placeholder={ImgDefaultMonEspace} 
                                            src='./images/Locataire.png'
                                            debounce={1000}
                                            alt="Espace Locataire"
                                        />  
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