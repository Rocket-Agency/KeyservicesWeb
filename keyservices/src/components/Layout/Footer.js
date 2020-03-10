import React, {Component} from 'react';
import '../../css/Footer.css';





export class Footer extends Component {
    render() {
        return(
            <div className="App">
                <footer className="footer align-items-center">
                    <div className="bottom"></div>
                        <div className="container-fluid">              
                            <p className="p-3 text-white">
                                CGU - Contact - Mention légales - KeyServices | All right reserved - {new Date().getFullYear()} 
                            </p>       
                        </div>
                </footer>
            </div>
            )
        }
    }
    
export default Footer;