import React, { Component } from 'react';
import '../../../css/LoginValidation.scss';

import { Container, Col, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { Visible, Hidden } from 'react-grid-system';

class LoginValidation extends Component {
  constructor(props) {
    super(props);
      this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${ this.state.email }`)
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="LoginValidForm">
        <h2 className="titleLoginForm">Connexion Locataire</h2>
            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
                <Col>
                    <FormGroup>
                    <Label>Identifiant</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                        value={ email }
                        valid={ this.state.validate.emailState === 'has-success' }
                        invalid={ this.state.validate.emailState === 'has-danger' }
                        onChange={ (e) => {
                                    this.validateEmail(e)
                                    this.handleChange(e)
                                } }
                    />
                    <FormFeedback valid>
                        Email valide
                    </FormFeedback>
                    <FormFeedback>
                       Veuillez entrer un email valide
                    </FormFeedback>
                    <FormText>Votre identifiant est votre email</FormText>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Mot de passe</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        value={ password }
                        onChange={ (e) => this.handleChange(e) }
                    />
                    </FormGroup>
                </Col>
                    <Hidden xs>
                        <div className="d-flex justify-content-center align-items-center">
                            <div id="container">                    
                                <button className="learn-more" aria-label="En savoir plus">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">
                                        Se connecter
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Hidden>
                                
                    <Visible xs>
                        <div className="d-flex justify-content-center align-items-center">
                             <div id="container">                    
                                <button className="learn-more" aria-label="En savoir plus">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Se connecter</span>
                                </button>
                            </div>
                        </div>
                    </Visible> 
                </Form>
         </Container>
        );
    }
}

export default LoginValidation;
