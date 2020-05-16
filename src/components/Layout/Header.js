import React, {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ProgressiveImage from "react-progressive-graceful-image";
import Sticky from 'react-sticky-el';
import '../../css/Header.scss';
import '../../css/BlocLeft.scss';
import Keyservices_logo from '../../ImagesPlaceholder/Keyservices_Logo.png';
import DashboardIcon from '@material-ui/icons/Dashboard';

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
                    </a>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-auto d-flex justify-content-center #navigation" role="navigation">
                            <h1 className="menu-title-mobile text-align-center">Menu </h1>
                            <NavLink className="d-inline menustyle" exact to="/">Accueil</NavLink>
                            <NavLink className="d-inline menustyle" to="/presentation">Keyservices</NavLink>
                            <NavLink className="d-inline menustyle" to="/contact">Contact</NavLink>
                        </Nav>
                        {typeof(localStorage) !== "undefined" && localStorage.getItem('token') ? <NavLink  className="btn_connexion" to="/deconnexion">
                        <LockOpenIcon/>
                            Déconnexion
                        </NavLink> : <NavLink className="btn_connexion" to="/monespace">
                        <LockIcon to="/monespace"/>
                            Connexion
                        </NavLink> }

                        {typeof(localStorage) !== "undefined" && localStorage.getItem('token') ? <NavLink className="btn_connexion" to="/dashboard">
                        <DashboardIcon/>
                            Mon Espace
                        </NavLink> : null }
                    </Navbar.Collapse>
                </Navbar>

                </Sticky>
                
            </div>

            )
        }
    }
    
export default withRouter(Header);