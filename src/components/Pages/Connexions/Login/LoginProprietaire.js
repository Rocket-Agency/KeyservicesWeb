import React, {Component} from 'react';
import '../../../../css/ConnexionProprietaireLocataire.scss';
import { BreadcrumbItem } from '../../../../index';
import { Col, Container, Row, Card} from 'react-bootstrap';
import ConnexionProfileProprietaire from '../ConnexionProfilePropretaire';
import HomeIcon from '@material-ui/icons/Home';

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
                                <div className="d-flex justify-content-center"  id="BlocExplication">
                                    <div className="card">
                                        <Card.Img  id="Propriétaire" width="auto%"  height="400px" src='./images/connexion.png' alt="Card image" />
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