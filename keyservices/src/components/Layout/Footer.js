import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return(
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} City Guide App - All Rights
                    Reserved
                </p>
            </div>
            )
        }
    }
export default Footer;