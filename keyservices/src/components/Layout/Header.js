import React, {Component} from 'react';
import '../../css/Header.css';
import logo from '../../Keyservices_Logo.png';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
=======
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
>>>>>>> Homepage

import { MdMoreVert } from 'react-icons/md';

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
<<<<<<< HEAD
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

=======
                <Navbar.Toggle />
                    <button>
                        <MdMoreVert className="navbar-collapse collapse" aria-controls="responsive-navbar-nav" aria-label="display more actions" edge="end" color="inherit" />
                    </button>
>>>>>>> Homepage
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto d-flex justify-content-between">
                            <NavLink className="d-inline p-2 text-dark" to="/">Accueil</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/keyservicesPresentation">Keyservices</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/contact">Contact</NavLink>
                            <NavLink className="d-inline p-2 text-dark" to="/monespace">Mon Espace</NavLink>
                        </Nav>
<<<<<<< HEAD
                        <Form className="p-2 ml-auto" inline>
                            <Button className="searchIconZone">Icon</Button>
                            <FormControl type="text" placeholder="Search" className="mr-sm-1 searchFormControl" />
                        </Form>
=======

>>>>>>> Homepage
                    </Navbar.Collapse>
                </Navbar>
                
            </div>

            )
        }
    }
    
export default Header;