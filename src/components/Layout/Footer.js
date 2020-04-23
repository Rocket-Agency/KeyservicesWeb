import React from 'react';
import '../../css/Footer.scss';

import { Col } from 'react-bootstrap';
import Img from 'react-cool-img';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <div className="bottom"></div>

                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <Col sm={8} className="d-flex justify-content-end">
                            <p className="m-3 text-white">
                                CGU - Contact - Mention légales - KeyServices | All right reserved - {new Date().getFullYear()} 
                            </p>       
                        </Col>


                        <Col sm={4} className="d-flex justify-content-end">
                            <Col sm={6} className="d-flex justify-content-end">
                                <Img src='./images/Icone_Facebook.png' alt="Langue Française" />
                            </Col>
                            <Col sm={6}className="d-flex justify-content-left">
                                <Img src='./images/Icone_Instagram.png' alt="Langue Française" />
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