import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';

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
                    <h2>Tarif</h2>
  
                    <Container fluid>
                
                        Tarif
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceTarif;