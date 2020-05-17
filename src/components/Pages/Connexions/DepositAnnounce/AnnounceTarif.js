import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';

export class AnnounceTarif extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
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
                            <h2 className="title-form-Announce title-form-Announce-active ">4 - Tarif</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">5 - Votre annonce</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">6 - Validation</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">7 - Paiement</h2>
                        </Col>
                    </Row>
                    <h2>Tarif</h2>

                    <Container fluid>
                        <Row className="pt-3 pb-4">
                            <Col xs={12} md={12} >
                                <Form.Row>
                                    <Form.Label column sm={12} className="label-info-annonce-prix" >Tarif de base</Form.Label>
                                    <Col sm={12}>
                                        <TextField
                                            type="text" 
                                            pattern="[A-Za-z]{3}"
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            label="€"
                                            defaultValue={values.price_starting} 
                                            onChange={handleChange('price_starting')}
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
                                        pattern="[A-Za-z]{3}"
                                        required id="standard-required"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        label="€"
                                        defaultValue={values.price_min} 
                                        onChange={handleChange('price_min')}
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
                                        variant="outlined"
                                        pattern="[A-Za-z]{3}"
                                        fullWidth
                                        type="text" 
                                        size="small"  
                                        label="€"   
                                        defaultValue={values.price_max} 
                                        onChange={handleChange('price_max')}               
                                        />   
                                    </Col>   
                                </Form.Row>     
                            </Col>
                        </Row>
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
                </Container>
            </div>
        )
    }
}

export default AnnounceTarif;