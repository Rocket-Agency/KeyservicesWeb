import React, {Component} from 'react';
import '../../css/Header.css';
import logo from '../../Keyservices_Logo.png';

import {Navbar, Nav} from 'react-bootstrap';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

export class Header extends Component {
    render() {
        return(
            <div>
                <div className="top"></div>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" style={{ width: '100px' }} />
                </a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto d-flex justify-content-between">
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton>
                            <Nav.Link className="d-inline p-2 text-dark" to="/">Accueil</Nav.Link>
                            <Nav.Link className="d-inline p-2 text-dark" to="/keyservicesPresentation">Keyservices</Nav.Link>
                            <Nav.Link className="d-inline p-2 text-dark" to="/contact">Contact</Nav.Link>
                            <Nav.Link className="d-inline p-2 text-dark" to="/monespace">Mon Espace</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            )
        }
    }
    
export default Header;