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
// import img_1 from '../../images/img_1.jpg';
import LogoTiny from '../../ImagesPlaceholder/LogoTiny.png';
import parisTiny from '../../ImagesPlaceholder/parisTiny.png';
import lyonTiny from '../../ImagesPlaceholder/lyonTiny.png';
import lourdesTiny from '../../ImagesPlaceholder/lourdesTiny.png';
import toulouseTiny from '../../ImagesPlaceholder/toulouseTiny.png';
import niceTiny from '../../ImagesPlaceholder/niceTiny.png';
import laRochelleTiny from '../../ImagesPlaceholder/larochelleTiny.png';

import Photo_Paris_Tiny from '../../ImagesPlaceholder/Photo_Paris_Tiny.png';
import Photo_Lyon_Tiny from '../../ImagesPlaceholder/Photo_Lyon_Tiny.png';
import Photo_Lourdes_Tiny from '../../ImagesPlaceholder/Photo_Lourdes_Tiny.png';
import Photo_Toulouse_Tiny from '../../ImagesPlaceholder/Photo_Toulouse_Tiny.png';
import Photo_Nice_Tiny from '../../ImagesPlaceholder/Photo_Nice_Tiny.png';
import Photo_LaRochelle_Tiny from '../../ImagesPlaceholder/Photo_LaRochelle_Tiny.png';
import HomeIcon from '@material-ui/icons/Home';
import Accordion from 'react-bootstrap/Accordion';



export class KeyservicesPresentation extends Component {

    render() {
        return(
            <>
                <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                <BreadcrumbItem >Keyservices</BreadcrumbItem>

                <div className="mt-3">
                    

                    <Tab.Container id="left-tabs-example" defaultActiveKey="presentation">
                        <Col className="container-fluid" >

                            <Nav variant="pills" className="flex-colunn justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="presentation">Présentation</Nav.Link>
                                </Nav.Item>

                                {/* <Nav.Item>
                                    <Nav.Link eventKey="villes">Villes</Nav.Link>
                                </Nav.Item> */}

                                <Nav.Item>
                                    <Nav.Link eventKey="NewVilles">Villes</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="container bloc">

                                <Tab.Pane eventKey="presentation">
                                    <Container >

                                         <Row  middle="xs">
                                            <Col md={4} className="d-flex justify-content-center align-items-center">

                                                <ProgressiveImage  className="card-img style-card" 
                                                    src='./images/Keyservices_Logo_presentation.png'
                                                    placeholder={LogoTiny} 
                                                    >
                                                    {src => <img src={src}  alt="Logo Keyservices"  />}
                                                </ProgressiveImage>                                                    
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
{/* 
                                    <Tab.Pane eventKey="villes">

                                        <Container>
                                             <h1 className="mt-2 text-center TitleBlocCity">Nos villes actuelles</h1>

                                                <Row className="BlocCity">

                                                    <div className="col-sm-4 d-flex justify-content-center CityImg">
                                                        <Card>
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/paris.png'
                                                                placeholder={parisTiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="paris" />}
                                                            </ProgressiveImage>  
                                                            <Card.Link className="CityLink" href="#">Paris</Card.Link>
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
                                                            <Card.Link className="CityNoLink" href="#">La Rochelle</Card.Link>
                                                        </Card>
                                                    </div>
                                                 </Row>
                                        </Container>
                                    </Tab.Pane> */}
                                    

                                    <Tab.Pane eventKey="NewVilles">
                
                                        <Container className="mt-5 mb-5">
                                            <h1 className="mt-2 text-center TitleBlocCity">Nos villes actuelles</h1>
                                                <Row className="BlocCity">
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                        <div className="hovereffect">
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/Photo_Paris.png'
                                                                placeholder={Photo_Paris_Tiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Image Paris" />}
                                                            </ProgressiveImage>                          
                                                                        
                                                            <div className="overlay">
                                                                <h2 className="Ville-Title">Paris</h2>
                                                                <p>
                                                                    <Card>
                                                                        <Card.Header>
                                                                            Anim pariatur cliche reprehenderit, 
                                                                            enim eiusmod high life accusamus terry richardson ad squid. 
                                                                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson 
                                                                        </Card.Header>
                                                                    </Card>
                                                                </p>                          
                                                            </div>
                                                        </div>
                                                    </div>        
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                        <div className="hovereffect">
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/Photo_Lyon.png'
                                                                placeholder={Photo_Lyon_Tiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Image Lyon" />}
                                                            </ProgressiveImage>                          
                                                                        
                                                            <div className="overlay">
                                                                <h2 className="Ville-Title">Lyon</h2>
                                                                <p>
                                                                    <Accordion >
                                                                        <Card>
                                                                            <Card.Header>
                                                                                Anim pariatur cliche reprehenderit, 
                                                                                enim eiusmod high life accusamus terry richardson ad squid. 
                                                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson 
                                                                            </Card.Header>
                                                                        </Card>
                                                                    </Accordion>
                                                                </p>                          
                                                            </div>
                                                        </div>
                                                    </div> 

                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                        <div className="hovereffect">
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/Photo_Lourdes.png'
                                                                placeholder={Photo_Lourdes_Tiny.png} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Image Lourdes" />}
                                                            </ProgressiveImage>                          
                                                                        
                                                            <div className="overlay">
                                                                <h2 className="Ville-Title">Lourdes</h2>
                                                                <p>
                                                                    <Accordion >
                                                                        <Card>
                                                                            <Card.Header>
                                                                                Anim pariatur cliche reprehenderit, 
                                                                                enim eiusmod high life accusamus terry richardson ad squid. 
                                                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson 
                                                                            </Card.Header>
                                                                        </Card>
                                                                    </Accordion>
                                                                </p>                          
                                                            </div>
                                                        </div>
                                                    </div>                                                
                                                </Row>
                                            </Container>
                                            <Container className="mt-5 mb-5">
                                            <h1 className="mt-2 text-center TitleBlocCity">Nos prochaines villes</h1>
                                                <Row className="BlocCity">
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                        <div className="hovereffect">
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/Photo_Toulouse.png'
                                                                placeholder={Photo_Toulouse_Tiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Image Paris" />}
                                                            </ProgressiveImage>                          
                                                                        
                                                            <div className="overlay AVenir">
                                                                <h2 className="Ville-Title">Toulouse</h2>
                                                                <p>
                                                                    <Card>
                                                                        <Card.Header>
                                                                           A venir
                                                                        </Card.Header>
                                                                    </Card>
                                                                </p>                          
                                                            </div>
                                                        </div>
                                                    </div>        
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                        <div className="hovereffect">
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/Photo_Nice.png'
                                                                placeholder={Photo_Nice_Tiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Image Lyon" />}
                                                            </ProgressiveImage>                          
                                                                        
                                                            <div className="overlay AVenir">
                                                                <h2 className="Ville-Title">Nice</h2>
                                                                <p>
                                                                    <Accordion >
                                                                        <Card>
                                                                            <Card.Header>
                                                                               A venir 
                                                                            </Card.Header>
                                                                        </Card>
                                                                    </Accordion>
                                                                </p>                          
                                                            </div>
                                                        </div>
                                                    </div> 

                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                        <div className="hovereffect">
                                                            <ProgressiveImage  className="card-img style-card" 
                                                                src='./images/Photo_LaRochelle.png'
                                                                placeholder={Photo_LaRochelle_Tiny} 
                                                            >
                                                                {src => <img src={src} width="100%" alt="Image Lourdes" />}
                                                            </ProgressiveImage>                          
                                                                        
                                                            <div className="overlay AVenir">
                                                                <h2 className="Ville-Title">La Rochelle</h2>
                                                                <p>
                                                                    <Accordion >
                                                                        <Card>
                                                                            <Card.Header>
                                                                                A venir
                                                                            </Card.Header>
                                                                        </Card>
                                                                    </Accordion>
                                                                </p>                          
                                                            </div>
                                                        </div>
                                                    </div>                                                
                                                </Row>
                                            </Container>
                                        
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                     </div>

                <ServicesComponent />
                
                    {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <ProgressiveImage  className="card-img style-card" 
                                src='./images/paris.png'
                                placeholder={parisTiny} 
                            >
                                {src => <img src={src} width="100%" alt="Image Paris" />}
                            </ProgressiveImage>                          
                                        
                            <div className="overlay">
                                <h2>Paris</h2>
                                <p>
                                    <Accordion >
                                        <Card>
                                            <Card.Header>
                                                     Anim pariatur cliche reprehenderit, 
                                                    enim eiusmod high life accusamus terry richardson ad squid. 
                                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson 

                                                    <br/><br/>
                                                    <Accordion.Toggle eventKey="0"
                                                         className="btn btn-primary"
                                                        data-toggle="collapse" 
                                                        href="#collapseExample" 
                                                        role="button" 
                                                        aria-expanded="false" 
                                                        aria-controls="collapseExample">
                                                            En savoir plus
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    Anim pariatur cliche reprehenderit, 
                                                    enim eiusmod high life accusamus terry richardson ad squid. 
                                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson 
                                                    cred nesciunt sapiente ea proident.
                                                    <Accordion.Toggle eventKey="0"
                                                         className="btn btn-primary"
                                                        data-toggle="collapse" 
                                                        href="#collapseExample" 
                                                        role="button" 
                                                        aria-expanded="false" 
                                                        aria-controls="collapseExample">
                                                            En savoir plus
                                                </Accordion.Toggle>
                                                
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </p>                          
                            </div>
                        </div>
                    </div> */}
            </>
        )
    }
}

export default KeyservicesPresentation;