import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem, Glyphicon, Grid, Row, Col} from 'react-bootstrap';

export class Navigation extends Component {
    render() {
        return(

          <Navbar bg="transparent" expand="lg" className="justify-content-center mt-4 mb-4">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">Accueil</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/keyservicesPresentation">Keyservices</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">Contact</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/monespace">Mon Espace</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        )
    }
}


export default Navigation;