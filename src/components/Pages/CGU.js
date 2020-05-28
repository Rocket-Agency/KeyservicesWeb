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
                        <title>Keyservices - Conditions Générales d'Utilisation</title>
                    </Helmet>

                    <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                    <BreadcrumbItem >Conditions Générales d'Utilisation</BreadcrumbItem>


                    <Container >
                        <div className="d-flex justify-content-center">
                            <h1 className="Main-Title">Conditions générales d'utilisation - Données personnelles</h1>
                        </div>
                        <Col>
                            <h2 className="Secondary-Title">Concevoir votre vie privée</h2>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title-underline">Définitions : </h3>

                                        <div>
                                            <div className="title">L'Éditeur :</div>
                                                La personne, physique ou morale, qui édite les services de communication au public en ligne.
                                        </div>

                                        <div>
                                            <div className="title">Le Site :</div>
                                                L'ensemble des sites, pages Internet et services en ligne proposés par l'Éditeur.
                                        </div>

                                        <div>
                                            <div className="title">L'Utilisateur : </div>
                                                La personne utilisant le Site et les services.
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Nature des données collectées</h3>
                                    
                                    <h4 className="title-bold">Dans le cadre de l'utilisation des Sites, l'Éditeur est susceptible de collecter les catégories de données
                                        suivantes concernant ses Utilisateurs :</h4>
                        
                                        <div className="text">
                                            Données d'état-civil, d'identité, d'identification... 
                                        </div>
                            
                                        <div className="text">
                                            Données de connexion (adresses IP, journaux d'événements...)
                                        </div>
                                            
                                        <div className="text">
                                            Données de localisation (déplacements, données GPS, GSM...) 
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Communication des données personnelles à des tiers</h3>

                                    <h4 className="title-bold">Pas de communication à des tiers</h4>

                                        <div className="text">
                                            Vos données ne font l'objet d'aucune communication à des tiers. Vous êtes toutefois informés qu'elles pourront
                                            être divulguées en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire
                                            ou judiciaire compétente.
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Information préalable pour la communication des données personnelles à des tiers en cas
                                    de fusion / absorption</h3>

                                    <h4 className="title-bold">Information préalable et possibilité d’opt-out avant et après la fusion / acquisition</h4> 

                                        <div className="text">
                                            Dans le cas où nous prendrions part à une opération de fusion, d’acquisition ou à toute autre forme de cession
                                            d’actifs, nous nous engageons à garantir la confidentialité de vos données personnelles et à vous informer avant
                                            que celles-ci ne soient transférées ou soumises à de nouvelles règles de confidentialité.
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Agrégation des données</h3>

                                    <h4 className="title-bold">Agrégation avec des données non personnelles</h4>
                                       
                                        <div className="text">
                                            Nous pouvons publier, divulguer et utiliser les informations agrégées (informations relatives à tous nos Utilisateurs
                                            ou à des groupes ou catégories spécifiques d'Utilisateurs que nous combinons de manière à ce qu'un Utilisateur
                                            ou à des groupes ou catégories spécifiques d'Utilisateurs que nous combinons de manière à ce qu'un Utilisateur
                                            individuel ne puisse plus être identifié ou mentionné) et les informations non personnelles à des fins d'analyse du
                                            secteur et du marché, de profilage démographique, à des fins promotionnelles et publicitaires et à d'autres fins
                                            commerciales.
                                        </div>
                                    
                                    <h4 className="title-bold">Agrégation avec des données personnelles disponibles sur les comptes sociaux de l'Utilisateur</h4>
                                       
                                        <div className="text">
                                            Si vous connectez votre compte à un compte d’un autre service afin de faire des envois croisés, ledit service
                                            pourra nous communiquer vos informations de profil, de connexion, ainsi que toute autre information dont vous
                                            avez autorisé la divulgation. Nous pouvons agréger les informations relatives à tous nos autres Utilisateurs,
                                            groupes, comptes, aux données personnelles disponibles sur l’Utilisateur.
                                        </div>

                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Collecte des données d'identité</h3>
                                       
                                    <h4 className="title-bold">Inscription et identification préalable pour la fourniture du service</h4>
                                      
                                    <div className="text">
                                        L’utilisation du Site nécessite une inscription et une identification préalable. Vos données nominatives (nom,
                                        prénom, adresse postale, e-mail, numéro de téléphone,...) sont utilisées pour exécuter nos obligations légales
                                        résultant de la livraison des produits et / ou des services, en vertu du Contrat de licence utilisateur final, de la
                                        Limite de garantie, le cas échéant, ou de toute autre condition applicable. Vous ne fournirez pas de fausses
                                        informations nominatives et ne créerez pas de compte pour une autre personne sans son autorisation. Vos
                                        coordonnées devront toujours être exactes et à jour.
                                    </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Collecte des données d'identification</h3>
                                        
                                    <h4 className="title-bold">Utilisation de l'identifiant de l'utilisateur pour proposition de mise en relation et offres commerciales</h4>
                                    
                                    <div className="text">
                                        Nous utilisons vos identifiants électroniques pour rechercher des relations présentes par connexion, par adresse
                                        mail ou par services. Nous pouvons utiliser vos informations de contact pour permettre à d'autres personnes de
                                        trouver votre compte, notamment via des services tiers et des applications clientes. Vous pouvez télécharger votre
                                        carnet d'adresses afin que nous soyons en mesure de vous aider à trouver des connaissances sur notre réseau ou
                                        pour permettre à d'autres Utilisateurs de notre réseau de vous trouver. Nous pouvons vous proposer des
                                        suggestions, à vous et à d'autres Utilisateurs du réseau, à partir des contacts importés de votre carnet d’adresses.
                                        Nous sommes susceptibles de travailler en partenariat avec des sociétés qui proposent des offres incitatives. Pour
                                        prendre en charge ce type de promotion et d'offre incitative, nous sommes susceptibles de partager votre
                                        identifiant électronique.
                                    </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Géolocalisation</h3>
                                       
                                    <h4 className="title-bold">Géolocalisation à des fins de fourniture du service</h4>
                                      
                                        <div className="text">
                                            Nous collectons et traitons vos données de géolocalisation afin de vous fournir nos services. Nous pouvons être
                                            amenés à faire usage des données personnelles dans le but de déterminer votre position géographique en temps
                                            réel. Conformément à votre droit d'opposition prévu par la loi n°78-17 du 6 janvier 1978 relative à l'informatique,
                                            aux fichiers et aux libertés, vous avez la possibilité, à tout moment, de désactiver les fonctions relatives à la
                                            géolocalisation.
                                       </div>
                                      
                                    <h4 className="title-bold">Géolocalisation à des fins de croisement</h4>
                                      
                                        <div className="text">
                                            Nous collectons et traitons vos données de géolocalisation afin de permettre à nos services d'identifier les points
                                            de croisement dans le temps et dans l'espace avec d'autres Utilisateurs du service afin de vous présenter le profil
                                            des Utilisateurs croisés. Conformément à votre droit d'opposition prévu par la loi n°78-17 du 6 janvier 1978
                                            relative à l'informatique, aux fichiers et aux libertés, vous avez la possibilité, à tout moment, de désactiver les
                                            fonctions relatives à la géolocalisation. Vous reconnaissez alors que le service ne sera plus en mesure de vous
                                            présenter de profil des autres Utilisateurs.
                                        </div>
                                      
                                    <h4 className="title-bold">Géolocalisation avec mise à disposition des partenaires pour référencement et agrégation (avec opt-in)</h4>
                                       
                                        <div className="text">
                                            Nous pouvons collecter et traiter vos données de géolocalisation avec nos partenaires. Nous nous engageons à
                                            anonymiser les données utilisées. Conformément à votre droit d'opposition prévu par la loi n°78-17 du 6 janvier
                                            1978 relative à l'informatique, aux fichiers et aux libertés, vous avez la possibilité, à tout moment, de désactiver les
                                            fonctions relatives à la géolocalisation.
                                        </div>
                                </div>

                                 <div className="bloc-CGU">
                                    <h3 className="Third-Title">Collecte des données du terminal</h3>
                                       
                                    <h4 className="title-bold">Aucune collecte des données techniques</h4>

                                        <div className="text">
                                            Nous ne collectons et ne conservons aucune donnée technique de votre appareil (adresse IP, fournisseur d'accès à
                                            Internet...).
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Cookies</h3>
                                        
                                    <h4 className="title-bold">Durée de conservation des cookies</h4>
                                    
                                        <div className="text">
                                            Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de 13 mois
                                            au maximum après leur premier dépôt dans le terminal de l'Utilisateur, tout comme la durée de la validité du
                                            consentement de l’Utilisateur à l’utilisation de ces cookies. La durée de vie des cookies n’est pas prolongée à
                                            chaque visite. Le consentement de l’Utilisateur devra donc être renouvelé à l'issue de ce délai.
                                        </div>

                                    
                                    <h4 className="title-bold">Finalité cookies</h4>
                                    
                                        <div className="text">
                                             Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les services rendus à
                                            l'Utilisateur, à partir du traitement des informations concernant la fréquence d'accès, la personnalisation des pages
                                            ainsi que les opérations réalisées et les informations consultées.
                                            Vous êtes informé que l'Éditeur est susceptible de déposer des cookies sur votre terminal. Le cookie enregistre des
                                            informations relatives à la navigation sur le service (les pages que vous avez consultées, la date et l'heure de la
                                            consultation...) que nous pourrons lire lors de vos visites ultérieures.
                                        </div>

                                    
                                    <h4 className="title-bold">Droit de l'Utilisateur de refuser les cookies</h4>
                                        
                                        <div className="text">
                                            Vous reconnaissez avoir été informé que l'Éditeur peut avoir recours à des cookies. Si vous ne souhaitez pas que
                                            des cookies soient utilisés sur votre terminal, la plupart des navigateurs vous permettent de désactiver les cookies
                                            en passant par les options de réglage.
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Conservation des données techniques</h3>
                                        
                                    <h4 className="title-bold">Durée de conservation des données techniques</h4>
                                        
                                        <div className="text">
                                            Les données techniques sont conservées pour la durée strictement nécessaire à la réalisation des finalités visées
                                            ci-avant.
                                        </div>
                                </div>

                                <div className="bloc-CGU">

                                    <h3 className="Third-Title">Délai de conservation des données personnelles et d'anonymisation</h3>
                                       
                                    <h4 className="title-bold">Durée de conservation des données techniquesConservation des données pendant la durée de la relation contractuelle</h4>
                                      
                                    <div className="text"></div>
                                       Conformément à l'article 6-5° de la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux
                                       libertés, les données à caractère personnel faisant l'objet d'un traitement ne sont pas conservées au-delà du
                                       temps nécessaire à l'exécution des obligations définies lors de la conclusion du contrat ou de la durée prédéfinie
                                       de la relation contractuelle.
                                      
                                    <h4 className="title-bold">Conservation des données anonymisées au delà de la relation contractuelle / après la suppression du compte</h4>
                                      
                                    <div className="text"></div>
                                       Nous conservons les données personnelles pour la durée strictement nécessaire à la réalisation des finalités
                                       décrites dans les présentes CGU. Au-delà de cette durée, elles seront anonymisées et conservées à des fins
                                       exclusivement statistiques et ne donneront lieu à aucune exploitation, de quelque nature que ce soit.
                                      
                                    <h4 className="title-bold">Suppression des données après suppression du compte</h4>
                                      
                                    <div className="text"></div>
                                       Des moyens de purge de données sont mis en place afin d'en prévoir la suppression effective dès lors que la
                                       durée de conservation ou d'archivage nécessaire à l'accomplissement des finalités déterminées ou imposées est
                                       atteinte. Conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous
                                       disposez par ailleurs d'un droit de suppression sur vos données que vous pouvez exercer à tout moment en
                                       prenant contact avec l'Éditeur.
                                      
                                    <h4 className="title-bold">Suppression des données après 3 ans d'inactivité</h4>
                                      
                                        <div className="text">
                                            Pour des raisons de sécurité, si vous ne vous êtes pas authentifié sur le Site pendant une période de trois ans, vous
                                            recevrez un e-mail vous invitant à vous connecter dans les plus brefs délais, sans quoi vos données seront
                                            supprimées de nos bases de données.
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Suppression du compte</h3>
                                       
                                    <h4 className="title-bold">Suppression du compte à la demande</h4>
                                      
                                        <div className="text">
                                            L'Utilisateur a la possibilité de supprimer son Compte à tout moment, par simple demande à l'Éditeur OU par le
                                            menu de suppression de Compte présent dans les paramètres du Compte le cas échéant.
                                        </div>

                                      
                                    <h4 className="title-bold">Suppression du compte en cas de violation des CGU</h4>
                                      
                                        <div className="text">
                                            En cas de violation d'une ou de plusieurs dispositions des CGU ou de tout autre document incorporé aux
                                            présentes par référence, l'Éditeur se réserve le droit de mettre fin ou restreindre sans aucun avertissement
                                            préalable et à sa seule discrétion, votre usage et accès aux services, à votre compte et à tous les Sites.   
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Indications en cas de faille de sécurité décelée par l'Éditeur</h3>
                                        
                                    <h4 className="title-bold">Information de l'Utilisateur en cas de faille de sécurité</h4>
                                    
                                        <div className="text">
                                            Nous nous engageons à mettre en oeuvre toutes les mesures techniques et organisationnelles appropriées afin de
                                            garantir un niveau de sécurité adapté au regard des risques d'accès accidentels, non autorisés ou illégaux, de
                                            divulgation, d'altération, de perte ou encore de destruction des données personnelles vous concernant. Dans
                                            l'éventualité où nous prendrions connaissance d'un accès illégal aux données personnelles vous concernant
                                            stockées sur nos serveurs ou ceux de nos prestataires, ou d'un accès non autorisé ayant pour conséquence la
                                            réalisation des risques identifiés ci-dessus, nous nous engageons à :
                                        </div>

                                    
                                            <li>Vous notifier l'incident dans les plus brefs délais ;</li>
                                            <li>Examiner les causes de l'incident et vous en informer ;</li>
                                            <li>Prendre les mesures nécessaires dans la limite du raisonnable afin d'amoindrir les effets négatifs et
                                                préjudices pouvant résulter dudit incident
                                            </li>

                                    <h4 className="title-bold">Limitation de la responsabilité</h4>

                                        <div className="text">
                                            En aucun cas les engagements définis au point ci-dessus relatifs à la notification en cas de faille de sécurité ne
                                            peuvent être assimilés à une quelconque reconnaissance de faute ou de responsabilité quant à la survenance de
                                            l'incident en question.
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Transfert des données personnelles à l'étranger</h3>

                                    <h4 className="title-bold">Pas de transfert en dehors de l'Union européenne</h4>

                                        <div className="text">
                                            L'Éditeur s'engage à ne pas transférer les données personnelles de ses Utilisateurs en dehors de l'Union
                                            européenne.
                                        </div>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Modification des CGU et de la politique de confidentialité</h3>

                                    <h4 className="title-bold">En cas de modification des présentes CGU, engagement de ne pas baisser le niveau de confidentialité de
                                        manière substantielle sans l'information préalable des personnes concernées</h4>

                                        <div className="text">
                                            Nous nous engageons à vous informer en cas de modification substantielle des présentes CGU, et à ne pas baisser
                                            le niveau de confidentialité de vos données de manière substantielle sans vous en informer et obtenir votre
                                            consentement.
                                        </div>
                                </div>  

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Droit applicable et modalités de recours</h3>

                                    <h4 className="title-bold">Application du droit français (législation CNIL) et compétence des tribunaux</h4>

                                        <div className="text">
                                            Les présentes CGU et votre utilisation du Site sont régies et interprétées conformément aux lois de France, et
                                            notamment à la Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le choix de la
                                            loi applicable ne porte pas atteinte à vos droits en tant que consommateur conformément à la loi applicable de
                                            votre lieu de résidence. Si vous êtes un consommateur, vous et nous acceptons de se soumettre à la compétence
                                            non-exclusive des juridictions françaises, ce qui signifie que vous pouvez engager une action relative aux
                                            présentes CGU en France ou dans le pays de l'UE dans lequel vous vivez. Si vous êtes un professionnel, toutes les
                                            actions à notre encontre doivent être engagées devant une juridiction en France.
                                        </div>

                                    <h4 className="title-bold">
                                        En cas de litige, les parties chercheront une solution amiable avant toute action judiciaire. En cas d'échec de ces
                                        tentatives, toutes contestations à la validité, l'interprétation et / ou l'exécution des présentes CGU devront être
                                        portées même en cas de pluralité des défendeurs ou d'appel en garantie, devant les tribunaux français.
                                    </h4>
                                </div>

                                <div className="bloc-CGU">
                                    <h3 className="Third-Title">Portabilité des données</h3>

                                    <h4 className="title-bold">Portabilité des données</h4>

                                        <div className="text">
                                            L'Éditeur s'engage à vous offrir la possibilité de vous faire restituer l'ensemble des données vous concernant sur
                                            simple demande. L'Utilisateur se voit ainsi garantir une meilleure maîtrise de ses données, et garde la possibilité
                                            de les réutiliser. Ces données devront être fournies dans un format ouvert et aisément réutilisable.  
                                        </div>
                                </div>  
                        </Col>
                    </Container>

                </div>               
            </div>
        )
    }
}
    
export default CGU;