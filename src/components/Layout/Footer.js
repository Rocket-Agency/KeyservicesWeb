import React, {Component} from 'react';
import '../../css/Footer.scss';





export class Footer extends Component {
    render() {
        return(
                <footer className="footer align-items-center">
                    <div className="bottom"></div>
                        <div className="container-fluid">              
                            <p className="m-3 text-white">
                                CGU - Contact - Mention légales - KeyServices | All right reserved - {new Date().getFullYear()} 
                            </p>       
                        </div>
                </footer>
            )
        }
    }
    
export default Footer;