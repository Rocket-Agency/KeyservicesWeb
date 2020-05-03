import React from 'react';
import '../../css/Footer.scss';

import { Col } from 'react-bootstrap';
// import Img from 'react-cool-img';
// import ImgDefaultReseauxSociaux from '../../ImagesPlaceholder/placeholderReseauxSociaux.png'

import ProgressiveImage from "react-progressive-graceful-image";
import FacebookTiny from '../../ImagesPlaceholder/LocataireTiny.png';
import InstagramTiny from '../../ImagesPlaceholder/PropriétaireTiny.png';


const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <div className="bottom"></div>

                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <Col sm={8} className="d-flex justify-content-end">
                            <p className="m-3 text-white">
                                CGU - Contact - Mention légales - KeyServices | Tout droit réservés - {new Date().getFullYear()} 
                            </p>       
                        </Col>


                        <Col sm={4} className="d-flex justify-content-end">
                            <Col sm={6} className="d-flex justify-content-end">
                                <ProgressiveImage  className="card-img" 
                                    src='./images/Icone_Facebook.png'
                                    placeholder={FacebookTiny} 
                                >
                                    {src => <img src={src} alt="Facebook icône"  />}
                                </ProgressiveImage>
                                {/* <Img
                                    placeholder={ImgDefaultReseauxSociaux} 
                                    src='./images/Icone_Facebook.png'
                                    debounce={1000}
                                    alt="Lien vers Facebook"
                                />  */}
                            </Col>
                            <Col sm={6} className="d-flex justify-content-left">
                                <ProgressiveImage  className="card-img" 
                                    src='./images/Icone_Instagram.png'
                                    placeholder={InstagramTiny} 
                                >
                                    {src => <img src={src} alt="Instagram icône"  />}
                                </ProgressiveImage>
                                {/* <Img
                                    placeholder={ImgDefaultReseauxSociaux} 
                                    src='./images/Icone_Instagram.png'
                                    debounce={1000}
                                    alt="Lien vers Instagram"
                                />  */}
                            </Col>
                        </Col>
                    </div>
                </div>
            </footer>
        </div>
    )
}

//Mettre google analytics dans le footer
    
    
export default Footer;