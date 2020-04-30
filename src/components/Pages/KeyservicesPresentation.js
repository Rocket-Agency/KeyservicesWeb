import React, {Component} from 'react';
import '../../css/keyservices.scss';
import { BreadcrumbItem } from '../../index';
import ServicesComponent from './ServicesComponent';

import {Container, Tab, Row, Col, Nav, Card} from 'react-bootstrap';
// import Img from 'react-cool-img';
// import ImgDefaultLogo from '../../ImagesPlaceholder/placeholderLogo.png';
// import ImgDefaultServices from '../../ImagesPlaceholder/placeholderServices.png';

import ProgressiveImage from "react-progressive-graceful-image";
import Keyservices_logo from '../../ImagesPlaceholder/Keyservices_Logo.png';
import parisTiny from '../../ImagesPlaceholder/parisTiny.png';
import lyonTiny from '../../ImagesPlaceholder/lyonTiny.png';
import lourdesTiny from '../../ImagesPlaceholder/lourdesTiny.png';
import toulouseTiny from '../../ImagesPlaceholder/toulouseTiny.png';
import niceTiny from '../../ImagesPlaceholder/niceTiny.png';
import laRochelleTiny from '../../ImagesPlaceholder/larochelleTiny.png';



export class KeyservicesPresentation extends Component {

    render() {
        return(
            <div>
                <BreadcrumbItem to="/" >Home</BreadcrumbItem>
                <BreadcrumbItem >Keyservices</BreadcrumbItem>
                
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

                                         <Row  middle="xs">
                                            <Col md={4} className="d-flex justify-content-center align-items-center">

                                                <ProgressiveImage  className="card-img style-card" 
                                                        src='./images/Keyservices_Logo_presentation.png'
                                                        placeholder={Keyservices_logo} 
                                                    >
                                                    {src => <img src={src}  alt="Logo Keyservices"  />}
                                                </ProgressiveImage>      
                                                    {/* <Img src='./images/Keyservices_Logo_presentation.png' width="200px" height="200px" alt="Logo keyservices "/> */}
                                                    {/* <Img 
                                                        placeholder={ImgDefaultLogo} 
                                                        src='./images/Keyservices_Logo_presentation.png'
                                                        width="200px"
                                                        height="200px"
                                                        debounce={1000}
                                                        alt="Logo keyservices"
                                                    /> */}                                                 
                                                </Col>
                                                    
                                                <Col md={8} className="d-flex justify-content-center align-items-center">
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
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/paris.png'
                                                                placeholder={parisTiny} 
                                                                alt="Image paris"
                                                            >
                                                                 {src => <img src={src} width="100%" alt="Paris" />}
                                                            </ProgressiveImage>  
                                                            <Card.Link className="CityLink" href="#">Paris</Card.Link>
                                                            {/* <Card.Img variant="top" src='./images/paris.png' width="300px" height="150px" alt="Logo keyservices "/> */}
                                                            {/* <Card.Img 
                                                                placeholder={ImgDefaultServices} 
                                                                src='./images/paris.png'
                                                                width="300px"
                                                                height="150px"
                                                                debounce={1000}
                                                                alt="Image paris"
                                                            /> */}
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card>
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/lyon.png'
                                                                placeholder={lyonTiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Lyon" />}
                                                            </ProgressiveImage>  
                                                            {/* <Card.Img variant="top" src='./images/lyon.png' width="300px" height="150px" alt="Logo keyservices "/> */}
                                                            {/* <Card.Img 
                                                                placeholder={ImgDefaultServices} 
                                                                src='./images/lyon.png'
                                                                width="300px"
                                                                height="150px"
                                                                debounce={1000}
                                                                alt="Image paris"
                                                            /> */}
                                                            <Card.Link className="CityLink" href="#">Lyon</Card.Link>
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card>
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/lourdes.png'
                                                                placeholder={lourdesTiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Lourdes" />}
                                                            </ProgressiveImage>  
                                                            {/* <Card.Img variant="top" src='./images/lourdes.png' width="300px" height="150px" alt="Logo keyservices "/> */}
                                                            {/* <Card.Img 
                                                                placeholder={ImgDefaultServices} 
                                                                src='./images/lourdes.png'
                                                                width="300px"
                                                                height="150px"
                                                                debounce={1000}
                                                                alt="Image paris"
                                                            /> */}
                                                            <Card.Link className="CityLink" href="#">Lourdes</Card.Link>
                                                        </Card>
                                                    </div>
                                                </Row>

                                                <h1 className="text-center">Nos prochaines villes</h1>

                                                <Row className="BlocCity">
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card >
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/toulouse.png'
                                                                placeholder={toulouseTiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Toulouse" />}
                                                            </ProgressiveImage>  
                                                            {/* <Card.Img variant="top" src='./images/toulouse.png' width="300px" height="150px" alt="Logo keyservices "/> */}
                                                            {/* <Card.Img 
                                                                placeholder={ImgDefaultServices} 
                                                                src='./images/toulouse.png'
                                                                width="300px"
                                                                height="150px"
                                                                debounce={1000}
                                                                alt="Image paris"
                                                            /> */}
                                                            <Card.Link className="CityNoLink" href="#">Toulouse</Card.Link>
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card style={{ width: '18rem' }}>
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/nice.png'
                                                                placeholder={niceTiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Nice" />}
                                                            </ProgressiveImage>  
                                                            {/* <Card.Img variant="top" src='./images/nice.png' width="300px" height="150px" alt="Logo keyservices "/> */}
                                                            {/* <Card.Img 
                                                                placeholder={ImgDefaultServices} 
                                                                src='./images/nice.png'
                                                                width="300px"
                                                                height="150px"
                                                                debounce={1000}
                                                                alt="Image paris"
                                                            /> */}
                                                            <Card.Link className="CityNoLink" href="#">Nice</Card.Link>
                                                        </Card>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card style={{ width: '18rem' }}>
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/la_rochelle.png'
                                                                placeholder={laRochelleTiny} 
                                                            >
                                                            {src => <img src={src} width="100%" alt="La_Rochelle" />}
                                                            </ProgressiveImage>  
                                                            {/* <Card.Img variant="top" src='./images/la_rochelle.png' width="300px" height="150px" alt="Logo keyservices "/> */}
                                                            {/* <Card.Img 
                                                                placeholder={ImgDefaultServices} 
                                                                src='./images/la_rochelle.png'
                                                                width="300px"
                                                                height="150px"
                                                                debounce={1000}
                                                                alt="Image paris"
                                                            /> */}
                                                            <Card.Link className="CityNoLink" href="#">La Rochelle</Card.Link>
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

export default KeyservicesPresentation;