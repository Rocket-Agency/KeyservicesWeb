import React, {Component} from 'react';
import '../../css/Footer.css';


export class Footer extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                <div className="fixed-bottom bottomColor">
                <footer className="fixed-bottom text-center">
                    <p className="text-white text-center">
                        &copy;{new Date().getFullYear()} City Guide App - All Rights
                        Reserved
                    </p>
                </footer>
                </div>
                </div>
            </div>
            )
        }
    }
    
export default Footer;