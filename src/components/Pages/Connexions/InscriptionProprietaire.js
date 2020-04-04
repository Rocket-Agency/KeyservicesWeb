//IndexProfil.js
import React, {Component} from 'react';
import '../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';
// import { Link } from 'react-router-dom';

export class InscriptionProprietaire extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                   <h3>Inscription</h3>
                 </div>


                 <Container fluid className="mt-5 d-flex justify-content-center searchCityFields">
                    <Form.Row className="d-flex justify-content-center">
                        <Form.Group as={Col} md="2" controlId="formGridCity">
                        <Form.Label>Votre ville</Form.Label> 
                        <Form.Control name="ville" type="text" placeholder="Entrez votre ville"/>
                        </Form.Group>
                    </Form.Row>

                    <div id="container">                    
                         <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                             <span className="button-text">Valider la ville</span>
                        </button>
                     </div>                        
                 </Container>


                <Container fluid className="Formulaire-incription">

                    <Form >

                        <Container fluid>
                            <h2>Information  Générales</h2>
                            <Form.Row className="mt-4 mb-4">
                                <Col  xs={12} md={6} className="col">
                                    {['checkbox'].map((type) => (
                                        <div key={`custom-inline-${type}`} >
                                            <Form.Check
                                                custom
                                                inline
                                                label="Mme"
                                                type={type}
                                                id={`custom-inline-${type}-Mme`}
                                            />
                                             <Form.Check
                                                custom
                                                inline
                                                label="Mr"
                                                type={type}
                                                id={`custom-inline-${type}-Mr`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                            </Form.Row>     
                        </Container>

                        <Container fluid>
                            <Row className="mb-4">
                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Nom</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre nom" />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre nom" />
                                        </Col>
                                    </Form.Row>     
                                </Col>
                            </Row>
                    
                            <Row className="mb-4">
                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Numéro de téléphone</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre numéro de téléphone" />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                        <Col>
                                            <Form.Control type="date" />
                                        </Col>
                                    </Form.Row>     
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Adresse mail</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre adresse mail" />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Comfirmer votre Adresse mail</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Veuillez comfirmer votre Adresse mail" />
                                        </Col>
                                    </Form.Row>     
                                </Col>
                            </Row>

                        </Container>

                        <Container fluid className="mt-4 mb-4">

                            <h2>Information sur votre location</h2>
                            <Row className="mt-4 mb-4">
                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label column sm={4}>Votre adresse de location</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre adresse" />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label column sm={4}>Code postal</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre code postal" />
                                        </Col>
                                    </Form.Row>     
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col  xs={12} md={12}>
                                    <Form.Row>
                                         <Form.Label column sm={3}>Quel est le lien de votre location ?</Form.Label>                                        

                                        <Col md={6}>
                                            <Form.Control as="select" value="Choisir...">
                                                <option>Choisir...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Col>

                                    </Form.Row>     
                                </Col>
                            </Row>

                        </Container>


                        <Container fluid>

                            <h2>Information sur votre connexion</h2>
                            <Row className="mb-4">
                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label column sm={4}>Votre mot de passe</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre mot de passe" />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                        <Form.Label column sm={4}>Comfirmation de votre mot de passe</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Veuillez comfirmez votre mot de passe" />
                                        </Col>
                                    </Form.Row>     
                                </Col>
                            </Row>

                        </Container>
                    </Form>
                </Container>
            </div>
        )
    }
}