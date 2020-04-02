//ConnexionProfil en ConnexionProfilLocataire.js
import React, {Component} from 'react';
import axios from 'axios';

import { Col, Container, Row, Form} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom';

//icons
// import { IoIosArrowForward } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa";

 class ConnexionProfileLocataire extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          loginErrors: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        const { email, password } = this.state;
        axios.post(
            "http://51.158.67.56:3000/api/auth/signin",{
                user: {
                email: email,
                password: password
              },
            },
          )
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("login error", error);
          });
        event.preventDefault();
      }

  render() {

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <Form.Row className="d-flex justify-content-center" >
                <Form.Group as={Col} md="8" controlId="formGridId">
                    <Form.Label>Identifiant</Form.Label>
                    <Form.Control type="identifiant" placeholder="Entrer votre identifiant" />
                </Form.Group>
            </Form.Row>

            <Form.Row className="d-flex justify-content-center">
                <Form.Group as={Col} md="8" controlId="formGridPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="Password" placeholder="Entrer votre mot de passe" />
                </Form.Group>
             </Form.Row>

            <Form.Row className="mt-4">
                <Form.Group as={Col} md="12" className="mt-4">
                    <Container>

                        <Row>
                            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                <Hidden xs>
                                    <div className="d-flex justify-content-center align-items-center">
                                                                    {/* <Button id="btn-seConnecter" type="submit"  to="/">
                                                                        <IoIosArrowForward /> 
                                                                    </Button>

                                                                    <Link id="seConnecter" to="/profile">
                                                                        Se connecter
                                                                    </Link> */}

                                        <div id="container">                    
                                            <button class="learn-more">
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">Se connecter</span>
                                            </button>
                                        </div>
                                    </div>
                                </Hidden>

                                <Visible xs>
                                     <div class="d-flex justify-content-center align-items-center">
                                                                        {/* <Button id="seConnecterMobile" to="/">
                                                                            <FaArrowRight/>
                                                                        <a clasName="envoyer" href="/profile"> 
                                                                            Se connecter
                                                                        </a>
                                                                    </Button> */}


                                        <div id="container">                    
                                            <button class="learn-more">
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">Se connecter</span>
                                            </button>
                                        </div>
                                    </div>
                                </Visible>
                            </Col>

                            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                <Link  to="/">S'inscrire</Link>                                                        
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Form.Row>
        </Form>
      </div>
    )
  }
}

export default ConnexionProfileLocataire;