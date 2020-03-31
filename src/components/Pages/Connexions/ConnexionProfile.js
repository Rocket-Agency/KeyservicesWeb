import React, {Component} from 'react';
import axios from 'axios';

import { Col, Container, Row, Form, Button} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

 class ConnexionProfile extends Component {
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
        axios.post("http://localhost:3001/api/auth/signin",{
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
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Entrer votre email" value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
            </Form.Row>

            <Form.Row className="d-flex justify-content-center">
                <Form.Group as={Col} md="8" controlId="formGridPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control name="password" type="password" placeholder="Entrer votre mot de passe" value={this.state.password} onChange={this.handleChange} />
                </Form.Group>
            </Form.Row>

            <Form.Row class="mt-4">
                 <Form.Group class="mt-4">
                    <Container>

                        <Row>
                            <Col xs={12} className="d-flex justify-content-center align-items-center">
                                <Hidden xs>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Button id="btn-seConnecter" type="submit" >
                                            <IoIosArrowForward /> 
                                        </Button>
                                        <Link id="seConnecter">
                                            Se connecter
                                        </Link>
                                    </div>
                                </Hidden>
                                
                                <Visible xs>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <Button id="seConnecterMobile" >
                                            <FaArrowRight/>
                                            <a clasName="envoyer"> 
                                                Se connecter
                                            </a>
                                        </Button>
                                    </div>
                                </Visible>
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

export default ConnexionProfile;