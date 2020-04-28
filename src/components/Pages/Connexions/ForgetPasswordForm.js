import React, {Component} from 'react';
import '../../../css/ForgetPassword.scss';
import axios from 'axios';

import { Col, Container, Row, Form} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
// import { Redirect } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import { ForgetPassword } from './Profiles/ForgetPassword';


 class ForgetPasswordForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
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
        const { email } = this.state;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        axios.post("http://localhost:3001/api/auth/resetpassword",
            {
                email: email
            },
            config
          )
        event.preventDefault();
      }

  render() {
    return (
      <div className="formConnexion">
        <Form onSubmit={this.handleSubmit}>
            <Form.Row className="d-flex justify-content-center" >
                <Form.Group as={Col} md="8" controlId="formGridId">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    name="email" 
                    type="email" 
                    placeholder="Entrer votre email" 
                    value={this.state.email} 
                    onChange={this.handleChange} />
                </Form.Group>
            </Form.Row>


            <Form.Row className="mt-4">
                 <Form.Group as={Col} md="12" className="mt-4">
                    <Container>

                        <Row>
                            <Col xs={12} className="d-flex justify-content-center align-items-center">
                                <Hidden xs>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div id="container">
                                            <Row>
                                                <button className="forgetPassword" aria-label="Mot de passe oublié">
                                                    <span className="circle" aria-hidden="true">
                                                        <span className="icon arrow"></span>
                                                    </span>
                                                    <span className="button-text">Redefinir mon mot de passe</span>
                                                </button>
                                            </Row>                
                                         </div>
                                    </div>
                                </Hidden>
                                
                                <Visible xs>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div id="container">                    
                                            <Row>
                                                <button className="forgetPassword" aria-label="Mot de passe oublié">
                                                    <span className="circle" aria-hidden="true">
                                                        <span className="icon arrow"></span>
                                                    </span>
                                                    <span className="button-text">Redefinir mon mot de passe</span>
                                                </button>
                                            </Row>         
                                         </div>
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

export default withRouter(ForgetPasswordForm);