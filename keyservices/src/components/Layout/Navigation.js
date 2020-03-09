import React, {Component} from 'react';
import logo from '../../Keyservices_Logo.png';
// import { Nav.Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import '../../css/Navigation.css';

export class Navigation extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" style={{ width: '100px' }} />
                </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto d-flex justify-content-between">
                        <Nav.Link className="d-inline p-2 text-dark" to="/">Accueil</Nav.Link>
                        <Nav.Link className="d-inline p-2 text-dark" to="/keyservicesPresentation">Keyservices</Nav.Link>
                        <Nav.Link className="d-inline p-2 text-dark" to="/contact">Contact</Nav.Link>
                        <Nav.Link className="d-inline p-2 text-dark" to="/monespace">Mon Espace</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation;