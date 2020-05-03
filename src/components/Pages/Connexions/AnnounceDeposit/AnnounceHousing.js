import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

import 'react-phone-input-2/lib/bootstrap.css'


export class AnnounceHousing extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2 className="title-form">Votre logement</h2>

  
                    <Container fluid>
                
                        <Row xs={12} md={12} className="d-flex justify-content-between pt-3 pb-3">
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={this.back}
                                >Retour
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.continue}
                                aria-label="Continuer"
                                >Continuer
                            </Button>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceHousing;