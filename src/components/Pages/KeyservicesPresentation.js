import React, {Component} from 'react';
import '../../css/keyservices.scss';
import ServicesComponent from './ServicesComponent';

import {Container, Tab, Row, Col, Nav, Card} from 'react-bootstrap';
import Img from 'react-cool-img';

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
                                        <Container >

                                            <Row className="mt-2" middle="xs">
                                                <Col md={4} className="d-flex justify-content-center align-items-center">
                                                    <Img src='./images/Keyservices_Logo_presentation.png' width="200px" height="200px" alt="Logo keyservices "/>
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

                                        <Container>
                                                
                                                <h1 className="mt-2 text-center TitleBlocCity">Nos villes actuelles</h1>

                                                <Row className="BlocCity">
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card>
                                                            <Card.Img variant="top" src='./images/paris.png' width="300px" height="150px" alt="Logo keyservices "/>
                                                            <Card.Link className="CityLink" href="#">Paris</Card.Link>
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card>
                                                            <Card.Img variant="top" src='./images/lyon.png' width="300px" height="150px" alt="Logo keyservices "/>
                                                            <Card.Link className="CityLink" href="#">Lyon</Card.Link>
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card>
                                                            <Card.Img variant="top" src='./images/lourdes.png' width="300px" height="150px" alt="Logo keyservices "/>
                                                            <Card.Link className="CityLink" href="#">Lourdes</Card.Link>
                                                        </Card>
                                                    </div>
                                                </Row>

                                                <h1 className="text-center">Nos prochaines villes</h1>

                                                <Row className="BlocCity">
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card >
                                                            <Card.Img variant="top" src='./images/toulouse.png' width="300px" height="150px" alt="Logo keyservices "/>
                                                            <Card.Link className="CityLink" href="#">Toulouse</Card.Link>
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card style={{ width: '18rem' }}>
                                                            <Card.Img variant="top" src='./images/nice.png' width="300px" height="150px" alt="Logo keyservices "/>
                                                            <Card.Link className="CityLink" href="#">Nice</Card.Link>
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card style={{ width: '18rem' }}>
                                                            <Card.Img variant="top" src='./images/la_rochelle.png' width="300px" height="150px" alt="Logo keyservices "/>
                                                            <Card.Link className="CityLink" href="#">La Rochelle</Card.Link>
                                                        </Card>
                                                    </div>
                                                 </Row>

                                        </Container>
                                    </Tab.Pane>
                            </Tab.Content>

                        </Col>
                    </Tab.Container>
                </div>

                <ServicesComponent />
            </div>
        )
    }
}