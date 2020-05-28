import React, {Component} from 'react';
import '../../../../css/ConnexionPages.scss';
import { BreadcrumbItem } from '../../../../index';
import HomeIcon from '@material-ui/icons/Home';
import ForgetPasswordForm from '../ForgetPasswordForm';
import ProgressiveImage from "react-progressive-graceful-image";
import ConnexionTiny from '../../../../ImagesPlaceholder/ConnexionTiny.png';

import { Col, Container, Row, Card} from 'react-bootstrap';

export class ForgetPassword extends Component {
    render() {
        return(
            <div>

                <BreadcrumbItem to="/" ><HomeIcon/>Accueil</BreadcrumbItem>
                <BreadcrumbItem to="/monEspace" >Connexion</BreadcrumbItem>
                <BreadcrumbItem >Mot de passe oublié</BreadcrumbItem>
                <Container fluid>
                            <Row className="BlocConnexion">

                              <Col md={6}>
                                    <div id="BlocExplication">
                                        <div className="card">
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/connexion.png'
                                            placeholder={ConnexionTiny} 
                                            width="auto"
                                            height="400px"
                                        >
                                            {src => <img src={src}  alt="Connexion Location"  />}
                                        </ProgressiveImage>    
                                            <Card.ImgOverlay className="text-connection">
                                                <Card.Text>
                                                Ea qui magna laboris labore. Sint sit commodo esse duis deserunt in commodo aliquip ut 
                                                elit ex dolor adipisicing in.
                                                Aliquip deserunt aliqua pariatur aliquip culpa proident occaecat ullamco amet dolor. 
                                                Ad officia incididunt aliquip Lorem pariatur adipisicing Lorem laborum est in voluptate mollit sit. 
                                                Fugiat elit sunt ea culpa cillum eu amet in laborum dolore aliqua pariatur incididunt consectetur. 
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </div>
                                    </div>
                                </Col>

                                <div className="Vertical-lign-connexion align-item-center"></div>

                                <Col md={6}>
                                    <div className="mt-4 mb-4 d-flex justify-content-center">
                                        <h1>Mot de passe oublié ?</h1>
                                    </div>
                                    <div className="mt-4 mb-4 d-flex justify-content-center">
                                        <p  className="text-mdpOublié">Pas de panique ! Remplissez cle formulaire ci-dessous et nous vous enverrons par email 
                                        les informations pour vous créer un nouveau mot de passe</p>
                                    </div>
                                   
                                    <ForgetPasswordForm />

                                </Col>

                            </Row>
                </Container>
            </div>
        )
    }
}