import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

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
                        <Row className="pt-3 pb-4">
                            <Col xs={12} md={12} >
                                <Form.Row>
                                    <Form.Label column sm={12} className="label-info-annonce-prix" >Tarif de base</Form.Label>
                                    <Col sm={12}>
                                        <TextField
                                            type="text" 
                                            name="price_starting"
                                            pattern="[A-Za-z]{3}"
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            label="€"
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="mt-3">
                        <Row className="pt-3 pb-4">
                            <Col xs={12} md={12}>
                                <Form.Row>
                                    <Form.Label column sm={12} className="label-info-annonce-prix">Prix minimum</Form.Label>
                                    <Row className="d-flex justify-content-justify price-texte">Lorsque la demande pour votre logement est faible, 
                                        les prix à la nuit baisseront pour inciter plus de voyageurs à réserver. 
                                        Quel est le prix le plus bas que vous consentez à accorder ?
                                    </Row>
                                    <Col sm={12}>
                                        <TextField
                                        type="text" 
                                        name="price_min"
                                        pattern="[A-Za-z]{3}"
                                        required id="standard-required"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        label="€"
                                        />
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container fluid className="mt-3">
                        <Row  className="pt-3 pb-4">
                            <Col xs={12} md={12}>
                                <Form.Row>
                                <Form.Label column sm={12} className="label-info-annonce-prix">Prix maximum</Form.Label>
                                    <Row className="d-flex justify-content-justify price-texte">
                                        Si la demande est forte, par exemple à l'occasison d'un festival populaire dans votre ville,
                                        Quel est le prix à la nuit le plus élevé que vous souhaitez facturer aux voyageurs ?
                                    </Row>  
                                    <Col sm={12}>
                                    <TextField
                                        required id="standard-required"
                                        name="price_max"
                                        // onChange={handleChange('zipCode')}
                                        // defaultValue={values.factureAdress} 
                                        variant="outlined"
                                        pattern="[A-Za-z]{3}"
                                        fullWidth
                                        type="text" 
                                        size="small"  
                                        label="€"                  
                                        />   
                                    </Col>   
                                </Form.Row>     
                            </Col>
                        </Row>

                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceTarif;