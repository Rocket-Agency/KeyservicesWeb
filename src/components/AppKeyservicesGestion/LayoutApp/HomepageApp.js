import React, {Component} from 'react';
import '../../../css/LogoutApp.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import HeaderApp from './HeaderApp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoKeyservicesGestionTiny from '../../../ImagesPlaceholder/LogoKeyservicesGestion.png';
import ProgressiveImage from "react-progressive-graceful-image";

export class HomepageApp extends Component {


    render(){
        return (
            <div>
                <Container >
                    <Row className="d-flex justify-content-center">

                        <HeaderApp />

                    </Row> 
                </Container>
                   
            </div>

        )
    }
}

export default HomepageApp;