import React, {Component} from 'react';
import '../../css/ServicesComponent.scss';

import { Col, Container, Row, Card} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
// import Img from 'react-cool-img';
// import ImgDefaultServices from '../../ImagesPlaceholder/placeholderServices.png';

import ProgressiveImage from "react-progressive-graceful-image";

import remisedesclefTiny from '../../ImagesPlaceholder/remisedesclefTiny.png';
import frigoTiny from '../../ImagesPlaceholder/frigoTiny.png';
import nettoyageTiny from '../../ImagesPlaceholder/nettoyageTiny.png';
import prisedeRDVTiny from '../../ImagesPlaceholder/prisedeRDVTiny.png';


import remisedesclefMobileTiny from '../../ImagesPlaceholder/remisedesclefMobileTiny.png';
import frigoMobileTiny from '../../ImagesPlaceholder/frigoMobileTiny.png';
import nettoyageoMobileTiny from '../../ImagesPlaceholder/nettoyageMobileTiny.png';
import prisedeRDVMobileTiny from '../../ImagesPlaceholder/prisedeRDVMobileTiny.png';


export class ServicesComponent extends Component {
    render() {
        return(
            <div>

                <Container fluid>
                    <h2 className="d-flex justify-content-center text-center">
                        Nos services proposés
                    </h2>

                    <Container className="blocServices">
                        <Col>
                            <Row className="blocBorder">
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <ProgressiveImage  className="card-img style-card" 
                                             src='./images/remise_des_cles_mobile.jpg'
                                            placeholder={remisedesclefMobileTiny} 
                                        >
                                            {src => <img src={src} width="100%" alt="Service remise des clés mobile" />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/remise_des_cles_mobile.jpg' width="100%" height="130px" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/remise_des_cles_mobile.jpg'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Image remise des clés mobile"
                                        />  */}
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/remise_des_cles.png'
                                            placeholder={remisedesclefTiny} 
                                        >
                                        {src => <img src={src} width="100%" alt="Service remise des clés"  />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/remise_des_cles.png' width="100%" height="auto" className="imgServices" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/remise_des_cles.png'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Image remise des clés"
                                        /> */}
                                    </Col>
                                </Hidden>
                                
                                <Col md={6} className="d-flex justify-content-center blocTextBorder">
                                    <Container>
                                        <h3 className="d-flex justify-content-center">Remise des clés</h3>
                                        <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                            in commodo aliquip ut elit ex dolor adipisicing in. 
                                            Aliquip deserunt aliqua pariatur aliquip culpa proident
                                            occaecat ullamco amet dolor.
                                        </p>

                                        <Container fluid className="mt-2 d-flex justify-content-center">
                                            <div id="container">                    
                                                <button className="validation-btn">
                                                    <span className="circle" aria-hidden="true">
                                                        <span className="icon arrow"></span>
                                                    </span>
                                                    <span className="button-text">En savoir plus</span>
                                                </button>
                                            </div>           
                                        </Container>
                                    </Container>
                                </Col>
                            </Row>

                            <Row className="blocBorderCenter">
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/frigo_mobile.jpg'
                                            placeholder={frigoMobileTiny} 
                                        >
                                            {src => <img src={src} width="100%" alt="Service remplir son frigo mobile" />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/frigo_mobile.jpg' width="100%%" height="130px" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/frigo_mobile.jpg'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Service remplir son frigo mobile"
                                        />  */}
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                        <ProgressiveImage  className="card-img style-card" 
                                           src='./images/remplir_son_frigo.png'
                                            placeholder={frigoTiny} 
                                        >
                                        {src => <img src={src} width="100%" alt="Service remplir son frigo"  />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/remplir_son_frigo.png' width="100%" height="auto" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/remplir_son_frigo.png'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Service remplir son frigo"
                                        />   */}
                                   </Col>
                                </Hidden>

                                <Col md={6} className="d-flex justify-content-center blocTextBorder">
                                    <Container>
                                        <div>
                                        <h3 className="d-flex justify-content-center">Remplir son frigo</h3>
                                        <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                            in commodo aliquip ut elit ex dolor adipisicing in. 
                                            Aliquip deserunt aliqua pariatur aliquip culpa proident
                                            occaecat ullamco amet dolor.
                                        </p>
                                        </div>
                                        <Container fluid className="mt-2 d-flex justify-content-center">
                                            <div id="container">                    
                                                <button className="validation-btn">
                                                    <span className="circle" aria-hidden="true">
                                                        <span className="icon arrow"></span>
                                                    </span>
                                                    <span className="button-text">En savoir plus</span>
                                                </button>
                                            </div>           
                                        </Container>
                                    </Container>
                                </Col>
                            </Row>
                            
                            <Row className="blocBorder">
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/nettoyage_mobile.jpg'
                                            placeholder={nettoyageoMobileTiny} 
                                        >
                                        {src => <img src={src} width="100%" alt="Service nettoyage mobile"  />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/nettoyage_mobile.jpg' width="100%" height="130px" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/nettoyage_mobile.jpg'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Service nettoyage mobile"
                                        />    */}
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                         <ProgressiveImage  className="card-img style-card" 
                                            src='./images/nettoyage.png'
                                            placeholder={nettoyageTiny} 
                                            alt="Poster unee annonce" 
                                        >
                                            {src => <img src={src} width="100%"  alt="Service nettoyage"  />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/nettoyage.png' width="100%" height="auto" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/nettoyage.png'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Service nettoyage"
                                        />    */}
                                    </Col>
                                </Hidden>

                                <Col md={6} className="d-flex justify-content-center blocTextBorder">
                                    <Container>
                                        <h3 className="d-flex justify-content-center">Nettoyage</h3>
                                        <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                            in commodo aliquip ut elit ex dolor adipisicing in. 
                                            Aliquip deserunt aliqua pariatur aliquip culpa proident
                                            occaecat ullamco amet dolor.
                                        </p>
                                        <Container fluid className="mt-2 d-flex justify-content-center">
                                            <div id="container">                    
                                                <button className="validation-btn">
                                                    <span className="circle" aria-hidden="true">
                                                        <span className="icon arrow"></span>
                                                    </span>
                                                    <span className="button-text">En savoir plus</span>
                                                </button>
                                            </div>           
                                        </Container>
                                    </Container>
                                </Col>
                            </Row>

                            <Row className="blocBorderCenterRDV">
                                <Visible xs>
                                    <Col md={6} className="d-flex justify-content-center blocImgBorderMobile">
                                        <ProgressiveImage  className="card-img style-card" 
                                            src='./images/prise_rdv_mobile.png'
                                            placeholder={prisedeRDVMobileTiny} 
                                        >
                                            {src => <img src={src} width="100%" alt="Service prise de rendez-vous mobile"  />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/prise_rdv_mobile.png' width="100%%" height="130px" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/prise_rdv_mobile.png'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Service prise de rendez-vous mobile"
                                        />    */}
                                    </Col>
                                </Visible>

                                <Hidden xs>
                                    <Col md={6} className="d-flex justify-content-end blocImgBorder">
                                        <ProgressiveImage  className="card-img style-card" 
                                           src='./images/prise_rdv.png'
                                            placeholder={prisedeRDVTiny} 
                                        >
                                            {src => <img src={src} width="100%" alt="Service prise de rendez-vous"  />}
                                        </ProgressiveImage>
                                        {/* <Img src='./images/prise_rdv.png' width="100%" height="auto" alt="Logo keyservices "/> */}
                                        {/* <Img 
                                            placeholder={ImgDefaultServices} 
                                            src='./images/prise_rdv.png'
                                            width="100%"
                                            height="auto"
                                            debounce={1000}
                                            alt="Service prise de rendez-vous"
                                        />    */}
                                    </Col>
                                </Hidden>

                                <Col md={6}  className="d-flex justify-content-center blocTextBorder">
                                    <Container>
                                        <Card.Title>
                                            <h3 className="d-flex justify-content-center">Prendre rendez-vous pour le checkout</h3>
                                        </Card.Title>
                                        <p className="d-flex justify-content-center">Ea qui magna laboris labore. Sint sit commodo esse duis deserunt 
                                            in commodo aliquip ut elit ex dolor adipisicing in. 
                                            Aliquip deserunt aliqua pariatur aliquip culpa proident
                                            occaecat ullamco amet dolor.
                                        </p>
                                        <Container fluid className="mt-2 d-flex justify-content-center">
                                            <div id="container">                    
                                                <button className="validation-btn">
                                                    <span className="circle" aria-hidden="true">
                                                        <span className="icon arrow"></span>
                                                    </span>
                                                    <span className="button-text">En savoir plus</span>
                                                </button>
                                            </div>           
                                        </Container>
                                    </Container>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Container>
                </Container>
            </div>
            )
        }
    }
    
export default ServicesComponent;