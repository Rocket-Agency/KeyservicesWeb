import React, {Component} from 'react';
import '../../css/keyservices.scss';
import Services_component from './Services_conponent';

import {Container, Tabs, Tab, Row, Col, Nav} from 'react-bootstrap';

export class KeyservicesPresentation extends Component {

    render() {
        return(
            <div>


                <div>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="presentation">
                            <Col className="container-fluid" >

                                <Nav variant="pills" className="flex-colunn justify-content-center">
                                        <Nav.Item>
                                            <Nav.Link eventKey="presentation">Présentation</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="villes">Villes</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                <Tab.Content className="container bloc">

                                    <Tab.Pane eventKey="presentation">
                                        <Container>

                                            <Row middle="xs">
                                                <Col md={4} className="d-flex justify-content-center align-items-center">
                                                    <img src='./images/Keyservices_Logo_presentation.png' width="200px" height="200px" alt="Logo keyservices "/>
                                                </Col>
                                                    
                                                <Col md={8}>
                                                    <p className="textpresentation">Ea qui magna laboris labore. Sint sit commodo esse duis 
                                                    deserunt in commodo aliquip ut elit ex dolor adipisicing in. 
                                                    Aliquip deserunt aliqua pariatur aliquip culpa proident occaecat 
                                                    ullamco amet dolor. Ad officia incididunt aliquip Lorem pariatur 
                                                    adipisicing Lorem laborum est in voluptate mollit sit. Fugiat elit 
                                                    sunt ea culpa cillum eu amet in laborum dolore aliqua pariatur 
                                                    incididunt consectetur. Dolor aute commodo adipisicing non exercitation
                                                    sit sunt dolore consequat qui occaecat culpa fugiat. 
                                                    Duis minim ipsum qui id magna. Magna eu laboris sint in tempor 
                                                    cupidatat magna ipsum consequat. 
                                                    </p>
                                                </Col>
                                            </Row>                                        
                                        </Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="villes">
                                        <p>Villes images + Nom de la ville</p>

                                        <Container>
                                            <Row>
                                                <div class="col-sm">
                                                One of three columns
                                                </div>
                                                <div class="col-sm">
                                                One of three columns
                                                </div>
                                                <div class="col-sm">
                                                One of three columns
                                                </div>
                                            </Row>
                                            <Row>
                                                <div class="col-sm">
                                                One of three columns
                                                </div>
                                                <div class="col-sm">
                                                One of three columns
                                                </div>
                                                <div class="col-sm">
                                                One of three columns
                                                </div>
                                            </Row>


                                            <Row xs="3">
                                                <Col>Paris</Col>
                                                <Col>Lyon</Col>
                                                <Col>Lourdes</Col>
                                            </Row>

                                            <Row xs="3">
                                                <Col>Toulouse</Col>
                                                <Col>Nice</Col>
                                                <Col>La Rochelle</Col>
                                            </Row>

                                        </Container>
                                    </Tab.Pane>
                            </Tab.Content>

                        </Col>
                    </Tab.Container>
                </div>

                <Services_component />
            </div>
        )
    }
}