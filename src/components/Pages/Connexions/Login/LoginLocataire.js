import React, {Component} from 'react';
import '../../../../css/ConnexionPages.scss';
import { BreadcrumbItem } from '../../../../index';
import ConnexionProfileLocataire from '../ConnexionProfileLocataire';
import HomeIcon from '@material-ui/icons/Home';
import ProgressiveImage from "react-progressive-graceful-image";
import ContactTiny from '../../../../ImagesPlaceholder/ConnexionTiny.png';

import { Col, Container, Row, Card} from 'react-bootstrap';

export class LoginLocataire extends Component {
    render() {
        return(
            <div>
               <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                <BreadcrumbItem to="/monEspace" >Connexion</BreadcrumbItem>
                <BreadcrumbItem >Connexion Locataire</BreadcrumbItem>

                    <Container fluid>
                        <Row className="BlocConnexion">
                            <Col md={6}>
                                <div className="mt-4 mb-4 d-flex justify-content-center">
                                    <h3>Connexion Locataire</h3>
                                </div>

                                <ConnexionProfileLocataire />

                            </Col>

                            <div className="Vertical-lign-connexion align-item-center"></div>


                            <Col md={6}>
                                <div className="d-flex justify-content-center"  id="BlocExplication">
                                    <div className="card">
                                        {/* <Card.Img  id="Propriétaire" width="auto"  height="400px" src='./images/connexion.png' alt="Card image" /> */}
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/connexion.png'
                                            placeholder={ContactTiny} 
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
                        </Row>
                </Container>
            </div>
        )
    }
}