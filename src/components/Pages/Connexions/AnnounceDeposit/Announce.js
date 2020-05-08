import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Container } from 'react-bootstrap';

export class AnnounceTarif extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2>Votre annonce</h2>
  
                    <Container fluid>
                
                        Annonce
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceTarif;