import React from 'react';

import '../../css/Footer.scss';

const Footer = () => {
    return (
        <div> 
            {/* <div className="bottom"></div> */}
            <footer>         
                <div className="footer-container">
                    <div className="container-fluid">              
                        <p className="m-3 text-white">
                            CGU - Contact - Mention légales - KeyServices | Tout droit réservé - {new Date().getFullYear()} 
                        </p>       
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;