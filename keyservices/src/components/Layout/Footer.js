import React, {Component} from 'react';
import '../../css/Footer.css';





export class Footer extends Component {
    render() {
        return(
            <div className="App">
                <footer className="footer align-items-center">
                    <div className="bottom"></div>
                        <div className="container-fluid">              
                            <p className="text-white">
                                &copy;{new Date().getFullYear()} Keyservices © - All Rights
                                Reserved
                            </p>       
                        </div>
                </footer>
            </div>
            )
        }
    }
    
export default Footer;