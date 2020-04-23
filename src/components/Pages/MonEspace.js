//Mon Espace.js

import React, {Component} from 'react';
import '../../css/MonEspace.scss';
import { Link } from 'react-router-dom';

import { Col, Container, Row, Card} from 'react-bootstrap';
import Img from 'react-cool-img';


export class MonEspace extends Component {


    render() {
        return(
            <div>
                <div className="mt-5 mb-2 d-flex justify-content-center">
                <h3>Mon Espace</h3>
                </div>

                <Container fluid>
                    <Row>
                        <Col md={6}>

                            <div className="d-flex justify-content-center"  id="Propriétaire">
                                <Card className="card">
                                    <Img className="card-img" id="Propriétaire" src='./images/Proprietaire.png' alt="Gerer_Mes_Locations" />
                                    <Link className="card-footer" to="/loginProprietaire">Mon espace propriétaire</Link>

                                </Card>
                            </div>
                        </Col>     

                        <div className="Vertical-lign-espace align-item-connexion"></div>

                        <Col md={6}>
                            <div className="d-flex justify-content-center"  id="Locataire">
                                <div className="card">
                                    <Img className="card-img" id="Locataire" src='./images/Locataire.png' alt="Gerer_Mes_Locations" />
                                    <Link className="card-footer" to="/loginLocataire">Mon espace locataire</Link>                              
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}