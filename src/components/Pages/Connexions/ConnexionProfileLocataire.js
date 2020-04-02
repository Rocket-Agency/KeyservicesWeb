// //ConnexionProfil en ConnexionProfilLocataire.js
// import React, {Component} from 'react';
// import axios from 'axios';

// import { Col, Container, Row, Form} from 'react-bootstrap';
// import { Visible, Hidden } from 'react-grid-system';
// import { Link, withRouter } from 'react-router-dom';

// //icons
// // import { IoIosArrowForward } from "react-icons/io";
// // import { FaArrowRight } from "react-icons/fa";

//  class ConnexionProfileLocataire extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           email: "",
//           password: "",
//           loginErrors: "",
//         };
    
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//       }
    
//       handleChange(event) {
//         this.setState({
//           [event.target.name]: event.target.value
//         });
//       }
    
//       handleSubmit(event) {
//         const { email, password } = this.state;
//         const config = {
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           }
//         }
//         axios.post("http://51.158.67.56:3001/api/auth/signin",
//             {
//                 email: email,
//                 password: password
//             },
//             config
//           )
//           .then(response => {
//             console.log(response.data);
//             this.props.history.push('/profile');
//           })
//           .catch(error => {
//             console.log("login error", error.message);
//           });
//         event.preventDefault();
//       }


//   render() {

//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit}>
//             <Form.Row className="d-flex justify-content-center" >
//                 <Form.Group as={Col} md="8" controlId="formGridId">
//                     <Form.Label>Identifiant</Form.Label>
//                     <Form.Control type="identifiant" placeholder="Entrer votre identifiant" />
//                 </Form.Group>
//             </Form.Row>

//             <Form.Row className="d-flex justify-content-center">
//                 <Form.Group as={Col} md="8" controlId="formGridPassword">
//                     <Form.Label>Mot de passe</Form.Label>
//                     <Form.Control type="Password" placeholder="Entrer votre mot de passe" />
//                 </Form.Group>
//              </Form.Row>

//             <Form.Row className="mt-4">
//                 <Form.Group as={Col} md="12" className="mt-4">
//                     <Container>

//                         <Row>
//                             <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
//                                 <Hidden xs>
//                                     <div className="d-flex justify-content-center align-items-center">
//                                                                     {/* <Button id="btn-seConnecter" type="submit"  to="/">
//                                                                         <IoIosArrowForward /> 
//                                                                     </Button>

//                                                                     <Link id="seConnecter" to="/profile">
//                                                                         Se connecter
//                                                                     </Link> */}

//                                         <div id="container">                    
//                                             <button className="learn-more">
//                                                 <span className="circle" aria-hidden="true">
//                                                     <span className="icon arrow"></span>
//                                                 </span>
//                                                 <span className="button-text">Se connecter</span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </Hidden>

//                                 <Visible xs>
//                                      <div className="d-flex justify-content-center align-items-center">
//                                                                         {/* <Button id="seConnecterMobile" to="/">
//                                                                             <FaArrowRight/>
//                                                                         <a clasName="envoyer" href="/profile"> 
//                                                                             Se connecter
//                                                                         </a>
//                                                                     </Button> */}


//                                         <div id="container">                    
//                                             <button className="learn-more">
//                                                 <span className="circle" aria-hidden="true">
//                                                     <span className="icon arrow"></span>
//                                                 </span>
//                                                 <span className="button-text">Se connecter</span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </Visible>
//                             </Col>

//                             <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
//                                 <Link  to="/">S'inscrire</Link>                                                        
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Form.Group>
//             </Form.Row>
//         </Form>
//       </div>
//     )
//   }
// }

// export default ConnexionProfileLocataire;