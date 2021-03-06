import React, {Component} from 'react';
import '../../css/Home.scss';
import '../../css/pe-7s-shield.scss';
import { BreadcrumbItem } from '../../index';
import ProgressiveImage from "react-progressive-graceful-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import CookieConsent from "react-cookie-consent";
import { Container, Col, Row} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import PosterUneAnnonceTiny from '../../ImagesPlaceholder/PosterUneAnnonceTiny.png';
import GererMesLocationsTiny from '../../ImagesPlaceholder/GérerMesLocationsTiny.png';
import {Helmet} from "react-helmet";

export class Home extends Component {

    render() {
        return(
            <div>
                <Helmet>
                    <title>Keyservices - Accueil</title>
                    <meta name="description" content="Vous cherchez une information sur l'entreprise Keyservices !"/>
                </Helmet>

                <BreadcrumbItem to="/"><HomeIcon/>Home</BreadcrumbItem>

                <CookieConsent
                    location="bottom"
                    declineButtonText="Je refuse"
                    buttonText="J'accepte"
                    cookieName="myAwesomeCookieName2"
                    expires={150}
                    enableDeclineButton
                    onDecline={() => {window.location.replace("http://www.google.com");}}
                    flipButtons
                    >
                        
                    Nous utilisons des cookies pour nous permettre de mieux comprendre comment le site est utilisé. En continuant à utiliser ce site, vous acceptez cette politique.
                </CookieConsent>

                <div>
                    <Carousel>
                        <Carousel.Item>
                            <ProgressiveImage  className="card-img style-card" 
                                src="./images/PosterUneAnnonce.png" 
                                placeholder={PosterUneAnnonceTiny} 
                            >
                                {src => <img src={src} width="100%" alt="Poster une annoncee"  />}
                            </ProgressiveImage>    
                            
                            <Carousel.Caption>
                            <Container>
                                <Row className="d-flex text-center justify-content-center align-items-center">
                                    <Col lg={6} md={8} sm={12} className="mt-4" >
                                    <div className="bloc-carousel">
                                        <h3 className="title-carousel">Poster une annonce</h3>
                                        <p className="para-carousel">Keyservices s'occupe de vos bien pour vous , du netoyage à la remise des clés pour le prochaine locataire nous faisons de votre bien notre priorité.</p>
                                    </div>

                                    </Col>
                                </Row>
                            </Container>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <ProgressiveImage  className="card-img style-card" 
                                src="./images/GererMesLocations.png"
                                placeholder={GererMesLocationsTiny} 
                            >
                                {src => <img src={src}  alt="Gérer mes locations"  />}
                            </ProgressiveImage>  
                            
                            <Carousel.Caption>
                            <Container>
                                <Row className="d-flex text-center justify-content-center align-items-center">
                                    <Col lg={6} md={8} sm={12} className="mt-4" >
                                    <div className="bloc-carousel">
                                        <h3 className="title-carousel">Gérer mes locations</h3>
                                            <p className="para-carousel">Choisisez parmis les services ou le pack de services qui vous correspond, afin de s'occuper au mieu de votre bien.</p>
                                    </div>

                                    </Col>
                                </Row>
                            </Container>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="container-fluid p-0  mb-4">
                    <div className="colorBackground">
                        <div className="mt-5 d-flex text-center justify-content-center">
                            <h1>On s’occupe de tout et vous de rien</h1>
                        </div>
                        <div className="row">
                        <p className="text-home text-center d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin ac augue nibh. Nam et interdum augue. Nullam ut ante elit. 
                            Duis elementum tellus nisi, sed aliquet arcu pharetra ut. 
                            Vestibulum eros nibh, lobortis eget ex vitae, eleifend ultricies mi. 
                            Praesent in elit viverra, luctus dolor sed, mattis turpis. Nam non sapien mauri. 
                            Nam id nulla ac velit tristique faucibus. Nunc ut nibh posuere, 
                            ultricies augue nec, lacinia sapien. Integer scelerisque faucibus turpis, 
                            vel ultricies arcu tempus at. </p>

                        <p className="text-home text-center d-flex justify-content-center">Sed tristique tincidunt enim quis viverra. Suspendisse malesuada auctor felis, 
                            ac luctus mauris pulvinar vel. Phasellus scelerisque dapibus mauris,
                            eget porta ligula. Vestibulum dictum ullamcorper nunc, nec vehicula tortor dictum et.</p>
                        </div>
                    </div>
                </div>

                <section class="section" id="services">
                    <Container>
                        <Row style={{textAlign: "center"}}>

                            <Col xs={12} className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Nos Services</h4>
                                    <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} lg={6} md={6} className="mt-4 pt-2">
                                <div className="service-container shadow rounded p-4 text-center">
                                    <div className="number-icon position-relative">
                                        <div className="icon-2 d-inline-block border rounded-pill">  
                                            <VpnKeyIcon style={{ fontSize: 40 }} />
                                        </div>

                                        <div className="number text-center rounded-pill bg-white border">
                                            <span className="font-weight-bold">01</span>
                                        </div>
                                    </div>                           

                                    <div className="content mt-3">
                                        <h5 className="title text-dark">Remise des clés</h5>
                                        <p className="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="/" className="text-dark">
                                            Read more
                                            <i className="mdi mdi-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                                                    
                            <Col  xs={12} lg={6} md={6} className="mt-4 pt-2">
                                <div className="service-container shadow rounded p-4 text-center">
                                    <div className="number-icon position-relative">
                                        <div className="icon-2 d-inline-block border rounded-pill">  
                                            <AddShoppingCartIcon className="iconeServices" style={{ fontSize: 40 }} />
                                        </div>

                                        <div className="number text-center rounded-pill bg-white border">
                                            <span className="font-weight-bold">02</span>
                                        </div>
                                    </div>                           

                                    <div className="content mt-3">
                                         <h5 className="title text-dark">Remplir son frigo</h5>
                                         <p className="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="/" className="text-dark">Read more <i className="mdi mdi-chevron-right"></i></a>
                                     </div>
                                </div>
                            </Col>
                                                    
                            <Col xs={12} lg={6} md={6} className="mt-4 pt-2">
                                 <div className="service-container shadow rounded p-4 text-center">
                                    <div className="number-icon position-relative">
                                        <div className="icon-2 d-inline-block border rounded-pill">  
                                            <EventAvailableIcon style={{ fontSize: 40 }} />
                                        </div>

                                        <div className="number text-center rounded-pill bg-white border">
                                            <span className="font-weight-bold">03</span>
                                        </div>
                                     </div>                           

                                    <div className="content mt-3">
                                        <h5 className="title text-dark">Prise de rendez-vous pour le checkout</h5>
                                        <p className="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="/" className="text-dark">Read more <i className="mdi mdi-chevron-right"></i></a>
                                     </div>
                                </div>
                            </Col>
                                                    
                            <Col xs={12} lg={6} md={6} className="mt-4 pt-2">
                                <div className="service-container shadow rounded p-4 text-center">
                                    <div className="number-icon position-relative">
                                        <div className="icon-2 d-inline-block border rounded-pill">  
                                            <LocalLaundryServiceIcon style={{ fontSize: 40 }} />
                                        </div>

                                        <div className="number text-center rounded-pill bg-white border">
                                            <span className="font-weight-bold">04</span>
                                        </div>
                                    </div>                           

                                    <div className="content mt-3">
                                        <h5 className="title text-dark">Nettoyage</h5>
                                        <p className="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="/" className="text-dark">Read more <i className="mdi mdi-chevron-right"></i></a>
                                    </div>
                                 </div>
                            </Col>                                                                        
                        </Row>
                     </Container>
                </section>
            </div>
        )
    }
}
