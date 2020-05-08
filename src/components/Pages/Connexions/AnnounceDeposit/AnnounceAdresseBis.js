import React from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Container fluid className="pt-4 blocForm" >  
      <h2> Adresse de votre logement</h2>

      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="mt-3">
            <Form.Row>
              <Form.Label className="label-info-annonce" column sm={4}>Numéro de rue</Form.Label>

                <Col sm={6}>
                  <TextField
                    required id="standard-required"
                    name="address_road_number"
                    variant="outlined"
                    pattern="[A-Za-z]{3}"
                    fullWidth
                    type="number"
                    size="small"
                  />   
                </Col>
            </Form.Row>     
          </Col>

          <Col xs={12} md={6} className="mt-3">
            <Form.Row>
              <Form.Label className="label-info-annonce" column sm={4}>Type de rue</Form.Label>

              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select" name="address_road_type" >
                    <option>Choisir un type de rue</option>
                    <option>Rue</option>
                    <option>Allée</option>
                    <option>Boulevard</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>  
          </Col>
        </Row>


        <Row>
          <Col xs={12} md={6} className="mt-3">
            <Form.Row>
              <Form.Label className="label-info-annonce" column sm={4}>Nom de rue</Form.Label>
              <Col sm={12}>
                <TextField
                  type="text" 
                  name="address_road_name"
                  pattern="[A-Za-z]{3}"
                  required id="standard-required"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Col>
            </Form.Row>     
          </Col>

          <Col xs={12} md={6} className="mt-3">
            <Form.Row>
              <Form.Label className="label-info-annonce" column sm={12}>Information complémentaire (Bâtiment, escalier, interphone etc...)</Form.Label>
              <Col sm={12}>
                <TextField
                  type="text" 
                  name="address_additional_info"
                  pattern="[A-Za-z]{3}"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Col>
            </Form.Row>     
          </Col>
        </Row>

        <Row className="pt-4 pb-4">
          <Col xs={12} md={4} className="mt-2">
            <Form.Row>
              <Form.Label className="label-info-annonce" column sm={4}>Région</Form.Label>
              <Col sm={8}>
                <TextField
                  type="text" 
                  name="address_state"
                  pattern="[A-Za-z]{3}"
                  required id="standard-required"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Col>
            </Form.Row>     
          </Col>

          <Col xs={12} md={4} className="mt-2">
            <Form.Row>
              <Form.Label className="label-info-annonce" column sm={4}>Ville</Form.Label>
              <Col sm={8}>
                <TextField
                  type="text" 
                  name="address_city"
                  pattern="[A-Za-z]{3}"
                  required id="standard-required"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Col>
            </Form.Row>     
          </Col>

          <Col xs={12} md={4} className="mt-2">
            <Form.Row>
              <Form.Label className="label-info-generales" column sm={4}>Code postal</Form.Label>
                <Col sm={8}>
                  <TextField
                    required id="standard-required"
                    name="address_zip_code"
                      // onChange={handleChange('zipCode')}
                      // defaultValue={values.factureAdress} 
                    variant="outlined"
                    pattern="[A-Za-z]{3}"
                    fullWidth
                    type="text" 
                    size="small"                    
                    />   
                </Col>   
            </Form.Row>     
          </Col>
        </Row>

      </Container>
      </Container>

    </React.Fragment>
  );
}