import React, {Component} from 'react';
import '../../css/Footer.css';


export class Footer extends Component {
    render() {
        return(
            <footer className="fixed-bottom text-center ">
                <div className="topColor"></div>
                <p className="text-xs-center text-white">
                    &copy;{new Date().getFullYear()} City Guide App - All Rights
                    Reserved
                </p>
            </footer>
            )
        }
    }
    
export default Footer;