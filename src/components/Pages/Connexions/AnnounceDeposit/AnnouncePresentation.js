import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';

import AnnounceaLinearStepper from './AnnounceaLinearStepper';

import 'react-phone-input-2/lib/bootstrap.css'

export class AnnouncePresentation extends Component {
    

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

      render() {
        return (
            <div>
                <div>
                <AnnounceaLinearStepper/>
                </div>
            <h2 className="title-form">Votre annonce</h2>

            <Container fluid>
                    <Row xs={12} md={12} className="d-flex justify-content-center pt-3 pb-3">

                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                            aria-label="Continuer"
                            >Continuer
                        </Button>
                    </Row>
            </Container>
            </div>
        );
        
    }
}

export default AnnouncePresentation;

