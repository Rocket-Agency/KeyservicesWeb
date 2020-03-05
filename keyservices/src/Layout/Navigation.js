import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component {
    render() {
        return(

            <Navbar bg="transparent" expand="lg" className="text-center mt-4 mb-4">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center width=100">
                  <Nav.Item> 
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">Accueil</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/keyservicesPresentation">Keyservices</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">Contact</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/monespace">Mon Espace</NavLink>
                  </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        )
    }
}


export default Navigation;