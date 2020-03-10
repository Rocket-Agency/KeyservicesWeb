import React, {Component} from 'react';
import logo from '../../Keyservices_Logo.png';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import '../../css/Navigation.css';

export class Navigation extends Component {
    render() {
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" style={{ width: '100px' }} />
                </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
export default Navigation;