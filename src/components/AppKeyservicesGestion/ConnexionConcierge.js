import React, {Component} from 'react';
import '../../css/ConnexionConcierge.scss';
import axios from 'axios';
import { Col, Container, Row, Form} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import ProgressiveImage from "react-progressive-graceful-image";
import LogoKeyservicesGestionTiny from '../../ImagesPlaceholder/LogoKeyservicesGestion.png';

class ConnexionConcierge extends Component {
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
      <div className="formConnexionApplication">
        <Form onSubmit={this.handleSubmit}>
            <Col sm={12} className="d-flex justify-content-left mb-5">
                 <ProgressiveImage  className="card-img-logo style-card" 
                    src='./images/LogoKeyservicesGestion.png'
                    placeholder={LogoKeyservicesGestionTiny} 
                >
                {src => <img src={src}  alt="Logo Keyservices"  />}
                </ProgressiveImage>     
            </Col>      
            <Form.Row className="d-flex justify-content-center" >
                <Form.Group as={Col} md="12" controlId="formGridId">
                    <Form.Control 
                    name="email" 
                    type="email" 
                    placeholder="Entrer votre email" 
                    value={this.state.email} 
                    onChange={this.handleChange} />
                </Form.Group>
            </Form.Row>

            <Form.Row className="d-flex justify-content-center">
                <Form.Group as={Col} md="12" controlId="formGridPassword">
                <Form.Control 
                    name="password" 
                    type="password" 
                    placeholder="Entrer votre mot de passe" 
                    value={this.state.password} 
                    onChange={this.handleChange} />
                </Form.Group>
            </Form.Row>

            <Form.Row className="mt-4">
                 <Form.Group as={Col} md="12">
                    <Container>
                        <Row>
                            <Col xs={12} className="d-flex justify-content-center align-items-center">                                
                                <div id="container">                    
                                    <Row>
                                        <button className="applicationConnexionButton" aria-label="Se connecter">
                                            <span className="circle" aria-hidden="true"></span>
                                            <span className="button-text">Se connecter</span>
                                        </button>
                                    </Row>       
                                    <Row className="d-flex justify-content-center align-items-center mt-3">
                                        <Link className="appForgetPassword" to="/forgetPassword">Mot de passe oublié</Link>   
                                    </Row>     
                                </div>
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

export default withRouter(ConnexionConcierge);
