import React from 'react';
import '../../css/Footer.scss';

import { Col, Container, Row, Form} from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
        <footer className="footer">
         <div className="bottom"></div>

            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <Col sm={8} className="d-flex justify-content-end">
                        <p className="m-3 text-white">
                            CGU - Contact - Mention légales - KeyServices | All right reserved - {new Date().getFullYear()} 
                        </p>       
                    </Col>


                    <Col sm={4} className="d-flex justify-content-end">
                        <Col sm={6} className="d-flex justify-content-end">
                            <img src='./images/Icône Facebook.png' alt="Langue Française" />
                        </Col>
                        <Col sm={6}className="d-flex justify-content-left">
                            <img src='./images/Icône Instagram.png' alt="Langue Française" />
                        </Col>
                    </Col>
                </div>
                </div>
        </footer>
        </div>
    )
}

    
    
export default Footer;