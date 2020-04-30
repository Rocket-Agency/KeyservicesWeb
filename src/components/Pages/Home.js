//Home.js
import React, {Component} from 'react';
import '../../css/Home.scss';
import '../../css/pe-7s-shield.css';
import { BreadcrumbItem } from '../../index';
// import Img from 'react-cool-img';
import ProgressiveImage from "react-progressive-graceful-image";

// import ImgDefaultHome from '../../ImagesPlaceholder/placeholderHome.png';
// import PosterUneAnnonceTiny from '../../ImagesPlaceholder/PosterUneAnnonceTiny.png';
// import GererMesLocationsTiny from '../../ImagesPlaceholder/GererMesLocationsTiny.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Col, Row} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import PosterUneAnnonceTiny from '../../ImagesPlaceholder/PosterUneAnnonceTiny1.png';

export class Home extends Component {

    render() {
        return(
            <div>

                <BreadcrumbItem to="/"><HomeIcon/>Home</BreadcrumbItem>
                {/* <Carousel>
                    <div>
                        <img src="./Images/PosterUneAnnonce.png" />
                    </div>
                    <div>
                        <img src="./Images/GererMesLocations.png" />
                    </div>
                </Carousel> */}


                    <Carousel>
                        <Carousel.Item>
                            <ProgressiveImage  className="card-img style-card" 
                                src="./Images/PosterUneAnnonce1.png" 
                                placeholder={PosterUneAnnonceTiny} 
                            >
                                {src => <img src={src}  alt="Poster une annoncee"  />}
                            </ProgressiveImage>    
                            
                            <Carousel.Caption>
                            <h3>Poster une annonce</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <button className="btn btn-md btn-home" aria-label="Poster une annonce"> 
                                        Poster une annonce
                                    </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./Images/GererMesLocations.png"
                                alt="Gérer mes locations"
                            />

                            <Carousel.Caption>
                            <h3>Gérer mes locations</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <button className="btn btn-md btn-home" aria-label="Poster une annonce"> 
                                        Gérer mes location
                                    </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                <div className="container-fluid p-0 mt-4 mb-4">
                    <div className="colorBackground">
                        <div className="mt-5 d-flex text-center justify-content-center">
                            <h1>On s’occupe de tous et vous de rien</h1>
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

                        <div className="container-fluid">
                            <div className="row">
                                {/* <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                    <div className="card">
                                        <Img className="card-img style-card" 
                                            placeholder={ImgDefaultHome} 
                                            src="./Images/PosterUneAnnonce.png"
                                            debounce={1000}
                                            alt="Poster unee annonce" 
                                        /> 

                                        <ProgressiveImage  className="card-img style-card" 
                                            src="./Images/PosterUneAnnonce.png"
                                            placeholder={PosterUneAnnonceTiny} 
                                            alt="Poster unee annonce" 
                                        >
                                        {src => <img src={src} width="100%" alt="Poster unee annonce"  />}
                                        </ProgressiveImage>
                                        <div className="card-img-overlay">
                                            <button className="btn btn-md btn-success" aria-label="Poster une annonce"> 
                                                Poster une annonce
                                            </button>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                    <div className="card">
                                        <Img className="card-img style-card" 
                                            placeholder={ImgDefaultHome} 
                                            src="./Images/GererMesLocations.png"
                                            debounce={1000}
                                            alt="Gerer mes locations" 
                                        /> 

                                         <Link to="/">
                                            <ProgressiveImage  className="card-img style-card" 
                                                src="./Images/GererMesLocations.png"
                                                placeholder={GererMesLocationsTiny} 
                                                alt="Poster unee annonce" 
                                                >
                                                {src => <img src={src} width="100%" alt="Poster unee annonce"  />}
                                            </ProgressiveImage>
                                        </Link>
                                        <div className="card-img-overlay">
                                            <button className="btn btn-md btn-success" aria-label="Gérer mes locations">
                                                Gérer mes locations
                                            </button>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>

                <section class="section" id="services">
                    <Container>
                        <Row style={{textAlign: "center"}}>

                            <Col xs={12} class="text-center">
                                <div class="section-title mb-4 pb-2">
                                    <h4 class="title mb-4">Nos Services</h4>
                                    <p class="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priotity to offer flexible services to accomodate your needs</p>
                                </div>
                            </Col>
                        </Row>

                        {/* col-lg-6 col-md-6 col-12 */}

                        <Row>
                            <Col xs={12} lg={6} md={6} class="mt-4 pt-2">
                                <div class="service-container shadow rounded p-4 text-center">
                                    <div class="number-icon position-relative">
                                        <div class="icon-2 d-inline-block border rounded-pill">  
                                            <i class="pe-7s-shield text-custom"></i>
                                        </div>

                                        <div class="number text-center rounded-pill bg-white border">
                                            <span class="font-weight-bold">01</span>
                                        </div>
                                    </div>                           

                                    <div class="content mt-3">
                                        <h5 class="title text-dark">Remise des clés</h5>
                                        <p class="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="" class="text-dark">
                                            Read more
                                            <i class="mdi mdi-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                                                    
                            <Col  xs={12} lg={6} md={6} class="mt-4 pt-2">
                                <div class="service-container shadow rounded p-4 text-center">
                                    <div class="number-icon position-relative">
                                        <div class="icon-2 d-inline-block border rounded-pill">  
                                            <i class="pe-7s-way text-custom"></i>
                                        </div>

                                        <div class="number text-center rounded-pill bg-white border">
                                            <span class="font-weight-bold">02</span>
                                        </div>
                                    </div>                           

                                    <div class="content mt-3">
                                         <h5 class="title text-dark">Remplir son frigo</h5>
                                         <p class="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="" class="text-dark">Read more <i class="mdi mdi-chevron-right"></i></a>
                                     </div>
                                </div>
                            </Col>
                                                    
                            <Col xs={12} lg={6} md={6} class="mt-4 pt-2">
                                 <div class="service-container shadow rounded p-4 text-center">
                                    <div class="number-icon position-relative">
                                        <div class="icon-2 d-inline-block border rounded-pill">  
                                            <i class="pe-7s-note2 text-custom"></i>
                                        </div>

                                        <div class="number text-center rounded-pill bg-white border">
                                            <span class="font-weight-bold">03</span>
                                        </div>
                                     </div>                           

                                    <div class="content mt-3">
                                        <h5 class="title text-dark">Prise de rendez-vous pour le checkout</h5>
                                        <p class="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="" class="text-dark">Read more <i class="mdi mdi-chevron-right"></i></a>
                                     </div>
                                </div>
                            </Col>
                                                    
                            <Col xs={12} lg={6} md={6} class="mt-4 pt-2">
                                <div class="service-container shadow rounded p-4 text-center">
                                    <div class="number-icon position-relative">
                                        <div class="icon-2 d-inline-block border rounded-pill">  
                                            <i class="pe-7s-world text-custom"></i>
                                        </div>

                                        <div class="number text-center rounded-pill bg-white border">
                                            <span class="font-weight-bold">04</span>
                                        </div>
                                    </div>                           

                                    <div class="content mt-3">
                                        <h5 class="title text-dark">Nettoyage</h5>
                                        <p class="text-muted">We make it a priotity to offer flexible services to your to lively Colors needs home to lively Colors</p>
                                        <a href="" class="text-dark">Read more <i class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                 </div>
                            </Col>
                                                                                                       
                            {/* <div class="col-12 mt-4 pt-2 text-center">
                                 <a href="javascript:void(0)" class="btn btn-pill btn-custom">See More <i class="mdi mdi-chevron-right"></i></a>
                            </div> */}
                        </Row>
                     </Container>
                </section>
            </div>
        )
    }
}
