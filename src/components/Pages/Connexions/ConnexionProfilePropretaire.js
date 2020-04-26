//ConnexionProfilProprietaire.js
import React, {Component, useState } from 'react';
import axios from 'axios';

import { Col, Container, Row, Form} from 'react-bootstrap';
import { Visible, Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// function MyComponent() {
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return <Dialog fullScreen={fullScreen} />
// }

class ConnexionProfileProprietaire extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
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
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        axios.post("http://localhost:3001/api/auth/signin",
            {
                email: email,
                password: password
            },
            config
          )
          .then(response => {
            this.props.history.push('/dashboard', {user: response.data});
          })
          .catch(error => {
          });
        event.preventDefault();
      }

  render() {
    return (
      <div className="formConnexion">

         <div className="mt-4 mb-4 d-flex justify-content-center">
             <h3>Connexion Propriétaire</h3>
        </div>
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
                </Form.Row>

                <Form.Row className="mt-4">
                    <Form.Group as={Col} md="12" className="mt-4">
                        <Container>

                            <Row>
                                <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
                                    <Hidden xs>
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
                                </Col>

                                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                    <Link  to="/inscriptionProprietaire">S'inscrire</Link>                                                        
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center mt-3"> 
                                 <Link>Mot de passe oublié</Link>    
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


