import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <h3 className="logo">Logo</h3>

            <ul className="menu">
                <li>Accueil</li>
                <li>Keyservices</li>
                <li>Contact</li>
                <li>Mon Espace</li>
            </ul>
            
            <ul className="nav-Search">
                <Link to="/about">
                    <li>About</li>               
                </Link>
                <Link to="shop">
                    <li>Shop</li>               
                </Link>
            </ul>
    </nav>
  );
}

export default Nav;