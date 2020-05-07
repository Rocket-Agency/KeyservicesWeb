import React from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Container fluid className="pt-4 blocForm" >  
      <h2> Adresse de votre logement</h2>

        <Container fluid className="contentForm">
          <Row>
            <Col xs={12} md={12} lg={12} className="pb-3">

             <Form.Row className="mt-4">
              <Form.Group className="form-group" as={Col} sm="12" md="12" lg="2" controlId="formGridAddressRoadNumber">
                <Form.Control name="address_road_numbere" type="number" placeholder="N° de rue" />
              </Form.Group>
                    

              <Form.Group as={Col} sm="12" md="12" lg="3" controlId="formGridRoadType">
                <Form.Control name="address_road_type" as="select" >
                  <option>Choisir un type de rue</option>
                  <option>Rue</option>
                  <option>Allée</option>
                  <option>Boulevard</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm="12" md="12" lg="7" controlId="formGridEmail">
                  <Form.Control name="Road_Name" type="text" placeholder="Nom de rue" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group className="form-group"  as={Col} sm="12" md="12" lg="12" controlId="formGridEmail">
                <Form.Label>Information complémentaire</Form.Label>
                <Form.Control name="text" type="text" placeholder="Bêtiment, Escalier etc..." />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm="12" md="12" lg="4" controlId="formGridState">
                <Form.Control name="first_name" type="name" placeholder="Région" />
              </Form.Group>

              <Form.Group as={Col} sm="12" md="12" lg="4" controlId="formGridCity">
                <Form.Control name="first_name" type="name" placeholder="Ville" />
              </Form.Group>

              <Form.Group as={Col} sm="12" md="12" lg="4" controlId="formGridZip">
                <Form.Control name="first_name" type="text"  placeholder="Code  Postal" />
              </Form.Group>
            </Form.Row>

            </Col>
          </Row>
        </Container>
      </Container>

    </React.Fragment>
  );
}