//IndexProfil.js
import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Form} from 'react-bootstrap';

import FormProprietairePersonalDetail from './FormProprietairePersonalDetail'
// import UserForm from './UserForm';

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

                    <Form>

                            {/* <UserForm /> */}
                        <FormProprietairePersonalDetail/>
                        
                        {/* <Container fluid className="pt-4 pb-4 blocForm" >  
                            <h2 className="title-form">Information  Générales</h2>
                            <Form.Row className="mt-4">
                                <Col  xs={12} md={4} className="col d-flex justify-content-center pt-3 pb-3">
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

                            <Container fluid>
                                <Row>
                                    <Col  xs={12} md={6} className="pb-3">
                                        <Form.Row>
                                            <Form.Label className="label-info-generales" column sm={4}>Nom</Form.Label>
                                            <Col>
                                                <Form.Control type="text" placeholder="Entrer votre nom" />
                                            </Col>
                                        </Form.Row>     
                                    </Col>

                                    <Col  xs={12} md={6} className="pb-3">
                                        <Form.Row>
                                            <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>
                                            <Col>
                                                <Form.Control type="text" placeholder="Entrer votre prénom" />
                                            </Col>
                                        </Form.Row>     
                                    </Col>
                                </Row>
                        
                                <Row>
                                    <Col  xs={12} md={6} className="pb-3">
                                        <Form.Row>
                                            <Form.Label className="label-info-generales" column sm={4}>Numéro de téléphone</Form.Label>
                                            <Col>
                                                <Form.Control type="text" placeholder="Entrer votre numéro de téléphone" />
                                            </Col>
                                        </Form.Row>     
                                    </Col>

                                    <Col  xs={12} md={6} className="pb-3">
                                        <Form.Row>
                                            <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                            <Col>
                                                <Form.Control type="date" />
                                            </Col>
                                        </Form.Row>     
                                    </Col>
                                </Row>
                            </Container>
                        </Container>

                        <Container fluid className="pt-4 pb-4 blocForm">
                            <h2 className="title-form">Information sur votre adresse</h2>
                            <Row className="mt-4 mb-4">
                                <Col  xs={12} md={6} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Votre adresse de facturation</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Votre adresse" />
                                        </Col>
                                        <Row>
                                             <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> 
                                        </Row>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Code postal</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre code postal" />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6}>
                                    <Form.Row>
                                         <Form.Label column sm={12}>Veuillez fournir un justificatif de domicile</Form.Label>
                                    </Form.Row>

                                    <Form.Row>
                                         <Button className="attachmenBtn">
                                            <AttachFileIcon className="iconAttachFile" />  
                                            Envoyer un justificatif
                                        </Button>         
                                    </Form.Row>     
                                </Col>
                            </Row>
                        </Container>

                        <Container fluid className="pt-4 pb-4 blocForm">

                            <h2 className="title-form">Information sur votre connexion</h2>
                            <Row>
                                <Col  xs={12} md={6} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Adresse mail</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre adresse mail" />
                                        </Col>
                                    </Form.Row>     
                                </Col>

                                <Col  xs={12} md={6} className="pb-3">
                                    <Form.Row>
                                        <Form.Label className="label-info-generales" column sm={4}>Votre mot de passe</Form.Label>
                                        <Col>
                                            <Form.Control type="text" placeholder="Entrer votre mot de passe" />
                                        </Col>
                                    </Form.Row>     
                                </Col>
                            </Row>


                             <Container fluid className="d-flex justify-content-left">
                                <Col  xs={12} md={6} className="pb-3">
                                      <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="J'accepte les conditions d'utilisations par Keyservices." />
                                    </Form.Group>
                                </Col>   
                             </Container> 

                            <Container fluid className="mt-2 d-flex justify-content-end">
                                <div id="container">                    
                                    <button className="validation-btn">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Valider l'inscriotion</span>
                                    </button>
                                </div>           
                            </Container> 

                        </Container> */}


                    </Form>
                </Container>
            </div>
        )
    }
}