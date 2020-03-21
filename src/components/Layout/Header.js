import React, {Component} from 'react';
import logo from '../../Keyservices_Logo.png';
import Searchbar from './Searchbar';

import '../../css/Header.scss';
import '../../css/Searchbar.scss';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


export class Header extends Component {
    render() {
        return(
            <div>
                <div className="top"></div>

                <Navbar collapseOnSelect expand="lg" variant="light">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" style={{ 
                        width: '100px'
                    }} />
                </a>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-auto d-flex justify-content-between">
                            <h1 className="menu-title text-align-center">Menu </h1>
                            <NavLink className="d-inline p-2 text-dark" to="/">Accueil</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/keyservicesPresentation">Keyservices</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/contact">Contact</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/monespace">Mon Espace</NavLink>
                        </Nav>

                        <Searchbar />
                        
                    </Navbar.Collapse>
                </Navbar>
                
            </div>

            )
        }
    }
    
export default Header;