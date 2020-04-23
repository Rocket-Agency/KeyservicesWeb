import React, {Component} from 'react';
import logo from '../../Keyservices_Logo.png';
// import Searchbar from './Searchbar';

import '../../css/Header.scss';
import '../../css/BlocLeft.scss';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import BlocLeft from './BlocLeft';
// import { browserHistory } from 'react-router';
import Img from 'react-cool-img';


export class Header extends Component {
    render() {
        return(
            <div>
                <div className="top"></div>

                <Navbar collapseOnSelect expand="md" variant="light">
                    <a className="navbar-brand" href="/">
                        <Img src={logo} alt="logo" style={{ 
                            width: '100px'
                        }} />
                    </a>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-auto d-flex justify-content-between #navigation" role="navigation">
                            <h1 className="menu-title-mobile text-align-center">Menu </h1>
                            <NavLink className="d-inline menustyle" exact to="/">Accueil</NavLink>
                            <NavLink className="d-inline menustyle" to="/keyservicesPresentation">Keyservices</NavLink>
                            <NavLink className="d-inline menustyle" to="/contact">Contact</NavLink>
                            <NavLink className="d-inline menustyle" to="/monespace">Mon Espace</NavLink>
                        </Nav>

                          <BlocLeft />
                    </Navbar.Collapse>
                </Navbar>
                
            </div>

            )
        }
    }
    
export default Header;