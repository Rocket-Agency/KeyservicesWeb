import React, {Component} from 'react'
import '../../css/Contact.scss';

export class ContactMap extends Component {
    render() {

        return(
            <div className="card contact-bloc-map">
                <img className="card-img style-card" src='./images/map.png' className="map-contact" alt="map contact"/>
            </div>
        )
    }
}

export default ContactMap;