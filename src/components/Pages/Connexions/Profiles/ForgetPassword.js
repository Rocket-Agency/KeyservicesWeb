import React, {Component} from 'react';
import '../../../../css/ConnexionPages.scss';
import ForgetPasswordForm from '../ForgetPasswordForm';

import { Col, Container, Row, Card} from 'react-bootstrap';

export class ForgetPassword extends Component {
    render() {
        return(
            <div>

                <Container fluid>
                            <Row className="BlocConnexion">

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

                                <div className="Vertical-lign-connexion align-item-center"></div>

                                <Col md={6}>
                                    <div className="mt-4 mb-4 d-flex justify-content-center">
                                        <h3>Mot de passe oublié ?</h3>
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