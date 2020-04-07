//ConnexionProfilProprietaire.js
import React, {Component} from 'react';
import axios from 'axios';

import { Col, Container, Row, Form} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ConnexionProfileProprietaire extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          emailError:"",
          passwordError: "",
          loginErrors: "",
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    // validate = () => {
    //     let emailError = "";
    //     // let passwordError = "";

    //     if (this.state.email.includes('@')) {
    //         emailError = "Veuillez entrer un email valide";
    //     }

    //     if (emailError) {
    //         this.setState({emailError});
    //         return false;
    //     }
    //     return true;
    // };


      handleSubmit(event) {
        const { email, password } = this.state;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        axios.post("http://51.158.67.56:3001/api/auth/signin",
            {
                email: email,
                password: password
            },
            config
          )
          .then(response => {
            console.log(response.data);
            this.props.history.push('/indexProfil');
          })
          .catch(error => {
            console.log("login error", error.message);
          });
        event.preventDefault();
        // const isValid = this.validate();
      }

  render() {

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <Form.Row className="d-flex justify-content-center" >
                <Form.Group as={Col} md="8" controlId="formGridId">
                    <Form.Label>Identifiant</Form.Label>
                    <Form.Control 
                        name="email" 
                        type="email" 
                        placeholder="Entrer votre email" 
                        value={this.state.email} 
                        onChange={this.handleChange} />
                </Form.Group>
                {/* <div style={{ fontSize: 12, color: red}}>{this.state.emailError}</div> */}
            </Form.Row>

            <Form.Row className="d-flex justify-content-center">
                <Form.Group as={Col} md="8" controlId="formGridPassword">
                <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        name="password" 
                        type="password" 
                        placeholder="Entrer votre mot de passe" 
                        value={this.state.password} 
                        onChange={this.handleChange} />
                </Form.Group>
                {/* <div style={{ fontSize: 12, color: red}}>{this.state.emailError}</div> */}
            </Form.Row>

            <Form.Row className="mt-4">
                <Form.Group as={Col} md="12" className="mt-4">
                    <Container>

                        <Row>
                            <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
                                <Hidden xs>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div id="container">                    
                                            <button className="learn-more">
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                        </span>
                                                    <span className="button-text">Se connecter</span>
                                                </button>
                                            </div>
                                        </div>
                                </Hidden>
                                <Visible xs>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div id="container">                    
                                            <button className="learn-more">
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                 </span>
                                                <span className="button-text">Se connecter</span>
                                            </button>
                                        </div>
                                   </div>
                                </Visible>
                            </Col>

                            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                <Link  to="/inscriptionProprietaire">S'inscrire</Link>                                                        
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

export default withRouter(ConnexionProfileProprietaire);