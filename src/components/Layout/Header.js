import React, {Component} from 'react';
import logo from '../../Keyservices_Logo.png';
// import Searchbar from './Searchbar';

import '../../css/Header.scss';
import '../../css/BlocLeft.scss';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
// import BlocLeft from './BlocLeft';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';


import ProgressiveImage from "react-progressive-graceful-image";
import LogoTiny from '../../ImagesPlaceholder/LogoTiny.png';
import Keyservices_logo from '../../ImagesPlaceholder/Keyservices_Logo.png';
import Sticky from 'react-sticky-el';
import {withRouter} from 'react-router-dom';

export class Header extends Component {
    render() {
        return(
            <div style={{ zIndex: 9999, position: 'relative'}}>
                <div className="top"></div>
                
                <Sticky>
                <Navbar bg="white" collapseOnSelect expand="md" variant="light" sticky="top">
                    <a className="navbar-brand" href="/">
                        <ProgressiveImage  className="card-img react-log" 
                            src='./images/Keyservices_Logo.png'
                            placeholder={Keyservices_logo} 
                        >
                            {src => <img src={src} alt="Logo Keyservices"  />}
                        </ProgressiveImage>
                        {/* <Img src={logo} alt="logo" style={{ 
                            width: '100px'
                        }} /> */}
                        {/* <Img
                            placeholder={ImgDefaultLogoKeyservices} 
                            src={logo}
                            width="100px"
                            debounce={1000}
                            alt="Langue Anglais"
                        />*/}
                    </a>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-auto d-flex justify-content-center #navigation" role="navigation">
                            <h1 className="menu-title-mobile text-align-center">Menu </h1>
                            <NavLink className="d-inline menustyle" exact to="/">Accueil</NavLink>
                            <NavLink className="d-inline menustyle" to="/keyservicesPresentation">Keyservices</NavLink>
                            <NavLink className="d-inline menustyle" to="/contact">Contact</NavLink>
                            {localStorage.getItem('token') ? <NavLink className="d-inline menustyle" to="/dashboard">Dashboard</NavLink>: null }
                        </Nav>


                        <NavLink  className="btn_connexion" to="/monespace">
                        <LockIcon to="/monespace"/>
                            Connexion
                        </NavLink>

                        <NavLink  className="btn_connexion" to="/">
                        <LockOpenIcon/>
                        Mon Espace
                        </NavLink>
                        
                    </Navbar.Collapse>
                </Navbar>

                </Sticky>
                
            </div>

            )
        }
    }
    
export default withRouter(Header);