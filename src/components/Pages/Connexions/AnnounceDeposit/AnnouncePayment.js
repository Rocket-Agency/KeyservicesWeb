import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Container } from 'react-bootstrap';

export class AnnouncePayment extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2>Paiement</h2>
  
                    <Container fluid>
                
                        Paiement
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnouncePayment;