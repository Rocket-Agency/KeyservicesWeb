//Home.js
import React, {Component} from 'react';
import '../../css/Home.scss';
// import Img from 'react-cool-img';
import ProgressiveImage from "react-progressive-graceful-image";

// import ImgDefaultHome from '../../ImagesPlaceholder/placeholderHome.png';
import PosterUneAnnonceTiny from '../../ImagesPlaceholder/PosterUneAnnonceTiny.png';
import GererMesLocationsTiny from '../../ImagesPlaceholder/GererMesLocationsTiny.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


export class Home extends Component {

    render() {
        return(
            <div>
                <Carousel>
                <div>
                    <img src="./Images/PosterUneAnnonce.png" />
                </div>
                <div>
                    <img src="./Images/GererMesLocations.png" />
                </div>
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
                            <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                <div className="card">
                                    {/* <Img className="card-img style-card" 
                                        placeholder={ImgDefaultHome} 
                                        src="./Images/PosterUneAnnonce.png"
                                        debounce={1000}
                                        alt="Poster unee annonce" 
                                    /> */}

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
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                    <div className="card">
                                        {/* <Img className="card-img style-card" 
                                            placeholder={ImgDefaultHome} 
                                            src="./Images/GererMesLocations.png"
                                            debounce={1000}
                                            alt="Gerer mes locations" 
                                        /> */}

                                        <Link>
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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}