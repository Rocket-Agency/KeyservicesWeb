import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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
                        <Form.Row>
                            <Form.Group as={Col} sm="12" md="12" lg="4" controlId="formGridAddressState">
                                <FormControlLabel
                                    value="Prix initial par nuit"
                                    control={<Radio color="primary" />}
                                    label="Maison"
                                    labelPlacement="start"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                 />   
                            </Form.Group>

                            <Form.Group as={Col} sm="12" md="12" lg="4" controlId="formGridAddressCity">
                                <Form.Control name="address_city" type="name" placeholder="Ville" />
                            </Form.Group>

                            <Form.Group as={Col} sm="12" md="12" lg="4" controlId="formGridAdressZipCode">
                                <Form.Control name="address_zip_code" type="text"  placeholder="Code  Postal" />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Form.Label className="d-flex align-items-center label-info-generales">
                                Type de propriété :
                            </Form.Label>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="Maison"
                                    control={<Radio color="primary" />}
                                    label="Maison"
                                    labelPlacement="start"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                />                                   
                                 <FormControlLabel
                                    value="Appartement"
                                    control={<Radio color="primary" />}
                                    label="Appartement"
                                    labelPlacement="start"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                />
                                <FormControlLabel
                                    value="Chambre"
                                    control={<Radio color="primary" />}
                                    label="Chambre"
                                    labelPlacement="start"
                                        // defaultValue={values.sexe} 
                                        // onChange={handleChange('sexe')}
                                 />
                                <FormControlLabel
                                    value="Auberge de jeunesse"
                                    control={<Radio color="primary" />}
                                    label="Auberge de jeunesse"
                                    labelPlacement="start"
                                    // defaultValue={values.sexe} 
                                    // onChange={handleChange('sexe')}
                                />
                            </RadioGroup>
                        </Form.Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceTarif;