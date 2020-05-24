import React, {Component} from 'react';
import '../../../../css/ConnexionProprietaireLocataire.scss';
import { BreadcrumbItem } from '../../../../index';
import { Col, Container, Row, Card} from 'react-bootstrap';
import ConnexionProfileProprietaire from '../ConnexionProfilePropretaire';
import HomeIcon from '@material-ui/icons/Home';
import ProgressiveImage from "react-progressive-graceful-image";
import ContactTiny from '../../../../ImagesPlaceholder/ConnexionTiny.png';
import { Link, withRouter } from 'react-router-dom';
import { Visible, Hidden } from 'react-grid-system';

export class LoginProprietaire extends Component {

    render() {
        return(
            <div>
                <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                <BreadcrumbItem to="/monEspace" >Connexion</BreadcrumbItem>
                <BreadcrumbItem >Connexion Propriétaire</BreadcrumbItem>

                <Container fluid>
                    <Row className="BlocConnexion">
                        <Col md={6}>
                            <ConnexionProfileProprietaire/>
                        </Col>     

                        <div className="Vertical-lign-connexion align-item-center"></div>

                        <Col md={6}>
                            <Hidden xs>
                                <div id="BlocExplication">
                                    <div className="card">
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/connexion.png'
                                            placeholder={ContactTiny} 
                                            width="auto"
                                            height="400px"
                                        >
                                        {src => <img src={src}  alt="Connexion Propriétaire" />}
                                        </ProgressiveImage>                                          
                                            
                                        <Card.ImgOverlay className="text-connection">
                                            <Card.Text>
                                                <Row className="mt-2 d-flex justify-content-center align-items-center">
                                                    <h2>Pas encore inscrit ?</h2>
                                                    Ea qui magna laboris labore. Sint sit commodo esse duis deserunt in commodo aliq
                                                </Row>
                                                <Row className="mt-2 d-flex justify-content-center align-items-center">
                                                    <Link to="/inscriptionProprietaire">
                                                        <button className="signin" aria-label="S'inscrire">
                                                            <span className="circle-signin" aria-hidden="true">
                                                                <span className="icon arrow"></span>
                                                            </span>
                                                            <span className="button-text-signin"> S'inscrire</span>
                                                        </button>
                                                    </Link>                                                        
                                                </Row>      
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </div>
                                </div>
                            </Hidden>
                        </Col>
                    </Row>
                </Container>

                <Visible xs>
                    <Container fluid>
                        <Col md={6}>
                            <Row className="mt-2 mb-3 BlocExplicationPropriétaireMobile d-flex justify-content-center align-items-center">
                                <h2>Pas encore inscrit ?</h2>
                                    
                                <p className="text-center"> 
                                    Ea qui magna laboris labore. Sint sit commodo esse duis deserunt in commodo aliq
                                </p>
                                
                                <Link to="/inscriptionProprietaire">
                                    <button className="signin" aria-label="S'inscrire">
                                        <span className="circle-signin" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text-signin"> S'inscrire</span>
                                    </button>
                                </Link>                                                        
                            </Row>      
                        </Col>
                    </Container>
                </Visible>
            </div>
        )
    }
}