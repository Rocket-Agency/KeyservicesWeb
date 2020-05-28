import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Col, Container } from 'react-bootstrap';
import '../../css/FooterElements.scss';

import { BreadcrumbItem } from '../../index';
import HomeIcon from '@material-ui/icons/Home';

export class CGU extends Component {
    
    render() {
        return (
            <div>
                <div className="mt-3">
                    <Helmet>
                        <title>Keyservices - Mention Légales</title>
                    </Helmet>

                    <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                    <BreadcrumbItem ></BreadcrumbItem>

                    <Container >
                        <div className="d-flex justify-content-center">
                            <h1 className="Main-Title">Mention Légales</h1>
                        </div>

                        <Col>
                            <h2 className="Secondary-Title">Keyservices</h2>
                                <div className="title">L'Éditeur :
                                    Société par Actions Simplifiée au capital de 214 410,50 Euros
                                </div>

                                <div className="bloc-CGU">
                                    <div>
                                        <div className="title">SIREN: 433 115 904 RCS Paris</div>

                                        <div>
                                            <div className="title">L'Éditeur : </div>
                                            <p>La personne, physique ou morale, qui édite les services de communication au public en ligne.</p>
                                        </div>

                                        <div>
                                            <div className="title">Siège social : </div>
                                            <p>8 rue de la Ville l’Evêque, 75008 Paris, France</p>
                                        </div>

                                        <div>
                                            <div className="title">Directeur de publication :</div>
                                            <p>Arnaud Dupuis</p>
                                        </div>

                                        <div>
                                            <div className="title">L'Utilisateur : </div>
                                            <p>La personne utilisant le Site et les services.</p>
                                        </div>

                                        <div>
                                            <div className="title">Hébergeur :</div>
                                            <p>ONLINE SAS <br/>
                                                BP 438 <br/>
                                                75366 PARIS CEDEX 08 <br/>
                                                FRANCE</p>
                                        </div>

                                        <div>
                                            <div className="title">Propriété intellectuelle :</div>
                                            <p>Le présent site internet ainsi que l’ensemble de ses contenus 
                                                (notamment les données, informations, photos, logos et marques) 
                                                sont la propriété exclusive d’ONLINE SAS ou de ses partenaires. 
                                                Toute reproduction, représentation, traduction, adaptation ou citation, 
                                                intégrale ou partielle, quel qu’en soit le procédé ou le support, 
                                                est strictement interdite en dehors des cas prévus par la loi ou expressément 
                                                autorisés par leur propriétaire. Photos non contractuelles.
                                            </p>
                                        </div>

                                        <div>
                                            <div className="title">Données personnelles :</div>
                                            <p>Vous pouvez visiter notre site sur Internet sans avoir à décliner 
                                                votre identité ou à fournir des informations personnelles vous concernant. 
                                                Cependant, nous pouvons parfois vous demander des informations pour traiter 
                                                une commande, identifier une demande de support technique, 
                                                établir une correspondance, fournir un abonnement ou soumettre une candidature à un poste.
                                            </p>
                                        </div>
                                    </div>
                                </div>



{/*                       
                            <div className="bloc-CGU">
                                <div>
                                    <div className="title">L'Éditeur :
                                    Société par Actions Simplifiée au capital de 214 410,50 Euros

                                    <li>SIREN: 433 115 904 RCS Paris</li>
                                    <li>Siège social : 8 rue de la Ville l’Evêque, 75008 Paris, France</li>
                                    <li>Directeur de publication : Arnaud Brindejonc de Bermingham</li>
                                    <li>Hébergeur : KEYSERVICES SAS BP 438 75366 PARIS CEDEX 08 FRANCE</li>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="title">Propriété intellectuelle
                                     Le présent site internet ainsi que l’ensemble de ses contenus 
                                     (notamment les données, informations, photos, logos et marques) 
                                     sont la propriété exclusive d’ONLINE SAS ou de ses partenaires. 
                                     Toute reproduction, représentation, traduction, adaptation ou citation, 
                                     intégrale ou partielle, quel qu’en soit le procédé ou le support, 
                                     est strictement interdite en dehors des cas prévus par la loi ou expressément 
                                     autorisés par leur propriétaire. Photos non contractuelles.
                                </div>
                            </div>

                            <div>
                                <div className="title">Données personnelles
                                    Vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité ou à fournir des informations personnelles vous concernant. Cependant, nous pouvons parfois vous demander des informations pour traiter une commande, identifier une demande de support technique, établir une correspondance, fournir un abonnement ou soumettre une candidature à un poste.
                                </div>
                            </div> */}
                        </Col>
                    </Container>
                </div>
            </div>
        )
    }
}

export default CGU;