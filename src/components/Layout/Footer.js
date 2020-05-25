import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import '../../css/Footer.scss';
import ProgressiveImage from "react-progressive-graceful-image";
import FacebookTiny from '../../ImagesPlaceholder/FacebookTiny.png';
import InstagramTiny from '../../ImagesPlaceholder/InstagramTiny.png';
import { Link, withRouter } from 'react-router-dom';
import MenuBottomApp from '../AppKeyservicesGestion/LayoutApp/MenuBottomApp';


export class Footer extends Component {
    render(){
        return (
        
            <div>
                {this.props.location.pathname !== '/loginConcierge' 
                && this.props.location.pathname !== '/homepageApp'
                &&  this.props.location.pathname !== '/mapApp' 
                && this.props.location.pathname !== '/tasksApp'
                && this.props.location.pathname !== '/settingsApp'
                && this.props.location.pathname !== '/profilUserConcierge'?
                <footer className="footer">
                <div className="bottom"></div>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <Col sm={8} className="d-flex justify-content-end">
                                <p className="m-3 text-white">
                                    <Link className="cgu" to="/cgu" aria-label="CGU">
                                        CGU 
                                    </Link>
                                     - Mention légales - KeyServices | Tous droits réservés © - {new Date().getFullYear()} 
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
                                </Col>
                                <Col sm={6} className="d-flex justify-content-left">
                                    <ProgressiveImage  className="card-img" 
                                        src='./images/Icone_Instagram.png'
                                        placeholder={InstagramTiny} 
                                    >
                                        {src => <img src={src} alt="Instagram icône"  />}
                                    </ProgressiveImage>
                                </Col>
                            </Col>
                        </div>
                    </div>
                </footer>
                :<Footer />}
            </div>
        )
    }
}

//Mettre google analytics dans le footer
    
    
export default withRouter(Footer);