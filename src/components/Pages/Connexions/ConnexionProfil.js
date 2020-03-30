import React, {Component} from 'react';
import axios from 'axios';

import { Col, Container, Row, Form, Button} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';

//icons
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

 class ConnexionProfil extends Component {

    constructor(props) { 
        super(props); 
        this.state = { 
            errors: {}, 
            client: { 
                userclient: '', 
                clientname: '', 
                clientbusinessname: '', 
                password: '', 
                confirmPassword: '' } 
            };

    state = {
        name: '',
        email    : '',
        password : '',
        redirection: false, 
    }


  handleChange = event => {
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
        email    : this.state.email,
        password : this.state.password
    };

    axios.post('http://51.158.67.56:3001/api/auth/signup', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        // <Redirect to={'/profileLocataire'}/>;
        this.setState({ redirection: true });
      })
  }

  render() {

    const { redirection } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <Form.Row className="d-flex justify-content-center" >
                <Form.Group as={Col} md="8" controlId="formGridId">
                    <Form.Label>Identifiant</Form.Label>
                    <Form.Control type="email" placeholder="Entrer votre identifiant" />
                </Form.Group>
            </Form.Row>

            <Form.Row className="d-flex justify-content-center">
                <Form.Group as={Col} md="8" controlId="formGridPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Entrer votre mot de passe" />
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
                                            <a clasName="envoyer" href=""> 
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

export default ConnexionProfil;