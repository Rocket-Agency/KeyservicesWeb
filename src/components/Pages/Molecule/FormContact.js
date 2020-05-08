import React, {Component} from 'react';
import '../../../css/Contact.scss';
import {Form, Col} from 'react-bootstrap';
import axios from 'axios';

export class FormContact extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          first_name: "",
          last_name: "",
          email: "",
          object: "",
          message: ""
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
        const { first_name, last_name, email, object, message} = this.state;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        axios.post("http://localhost:3001/api/contact/create",
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                object: object,
                message: message,
            },
            config
          )
          .then(response => {
            this.props.history.push('/');
          })
          .catch(error => {
          });
        event.preventDefault();
      }

      render(){
          return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control name="first_name" type="name" placeholder="Entrer votre nom" value={this.state.first_name} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridLastName">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control name="last_name" type="lastname" placeholder="Entrer votre prénom" value={this.state.last_name} onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} lg="6" md="12" sm="12" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Entrer votre adresse email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Sujet</Form.Label>
                            <Form.Control name="object" as="select" value={this.state.object} onChange={this.handleChange}>
                                <option>Choisir un sujet...</option>
                                <option>Demande d'information</option>
                            </Form.Control>
                        </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}  controlId="votreMessage.ControlTextarea">
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control name="message" as="textarea" rows="3" placeholder="Entrer votre message" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row className="mt-4">

                        <Col xs={8} sm={12} className="d-flex justify-content-end align-items-center">
                            <div id="container">                    
                                <button className="learn-more" aria-label="Envoyer">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                <span className="button-text">Envoyer</span>
                                </button>
                            </div>
                        </Col>      
                </Form.Row>
            </Form>
        )
    }
}
export default FormContact;