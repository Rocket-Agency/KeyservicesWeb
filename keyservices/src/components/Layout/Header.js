import React, {Component} from 'react';
import '../../css/Header.css';
import logo from '../../Keyservices_Logo.png';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import { MdMoreVert } from 'react-icons/md';

export class Header extends Component {
    render() {
        return(
            <div>
                <div className="top"></div>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" style={{ width: '100px' }} />
                </a>
                <Navbar.Toggle />
                    <button>
                        <MdMoreVert className="navbar-collapse collapse" aria-controls="responsive-navbar-nav" aria-label="display more actions" edge="end" color="inherit" />
                    </button>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto d-flex justify-content-between">
                            <NavLink className="d-inline p-2 text-dark" to="/">Accueil</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/keyservicesPresentation">Keyservices</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/contact">Contact</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/monespace">Mon Espace</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                
            </div>

            )
        }
    }
    
export default Header;