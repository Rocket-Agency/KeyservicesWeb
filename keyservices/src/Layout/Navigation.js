import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/Navigation.css';

export class Navigation extends Component {
    render() {
        return(

          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="d-inline p-2 text-dark" to="/">Accueil</NavLink>
                <NavLink className="d-inline p-2 text-dark" to="/keyservicesPresentation">Keyservices</NavLink>
                <NavLink className="d-inline p-2 text-dark" to="/contact">Contact</NavLink>
                <NavLink className="d-inline p-2 text-dark" to="/monespace">Mon Espace</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        )
    }
}


export default Navigation;