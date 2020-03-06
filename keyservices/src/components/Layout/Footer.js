import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return(
            <footer className="fixed-bottom text-center ">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} City Guide App - All Rights
                    Reserved
                </p>
            </footer>
            )
        }
    }
    
export default Footer;