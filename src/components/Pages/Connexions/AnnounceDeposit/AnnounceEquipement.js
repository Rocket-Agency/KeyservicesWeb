import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Container, Row } from 'react-bootstrap';

import 'react-phone-input-2/lib/bootstrap.css'


export class AnnounceEquipement extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2>Équipements et installations</h2>
  
                    <Container fluid>
                
                        <Row xs={12} md={12} className="d-flex justify-content-between pt-3 pb-3">
                            Vos équipements
                        </Row>

                        <Row xs={12} md={12} className="d-flex justify-content-between pt-3 pb-3">
                            Votre installations
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceEquipement;