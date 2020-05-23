import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container } from 'react-bootstrap';
import { Button } from 'reactstrap';
import AnnounceCardService from './AnnounceCardServices';

export class AnnounceServices extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <Row>
                        <Col sm>
                            <h2 className="title-form-Announce">1 - Votre addresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">2 - Votre logement </h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">3 - Règles et informations</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">4 - Tarif</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">5 - Votre annonce</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">6 - Validation</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce title-form-Announce-active">7 - Nos services</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce ">8 - Paiement</h2>
                        </Col>
                    </Row>
                    <h2 className="pt-4 pb-4">Nos Services</h2>

                    <AnnounceCardService />
  
                    <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-4"> 
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                            aria-label="Retour"
                        >Retour</Button>

                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                            aria-label="Continuer"
                        >Continuer</Button>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default AnnounceServices;