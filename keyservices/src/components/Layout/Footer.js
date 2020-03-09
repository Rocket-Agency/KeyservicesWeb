import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import '../../css/Footer.css';


export class Footer extends Component {
    render() {
        return(
            <footer>
                    <div className="bottom"></div>
                <div className="container-fluid">              
                        <p className="p-3 text-white">
                            &copy;{new Date().getFullYear()} Keyservices © - All Rights
                            Reserved
                        </p>       
                </div>
            </footer>
            )
        }
    }
    
export default Footer;