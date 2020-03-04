import React from 'react';
import '../../css/header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return(

          <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#">ReactJS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Examples" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Exemple Conteur</NavDropdown.Item>
                  <NavDropdown.Item href="/exemple2">Exemple Horloge</NavDropdown.Item>
                  <NavDropdown.Item href="/exemple3">Exemple Toggle</NavDropdown.Item>
                  <NavDropdown.Item href="/exemple4">Exemple Form</NavDropdown.Item>
                  <NavDropdown.Item href="/exemple5">Exemple Ajax</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Header;


