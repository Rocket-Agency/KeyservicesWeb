import React, {Component, useState} from 'react';
import '../../../../css/Newsletter.scss';
import { Col, Container, Form} from 'react-bootstrap';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'reactstrap';

function AlertNewsletterInfo() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>La ville n'est pas encore disponible</Alert.Heading>
          <div>
            Inscrivez votre adresse mail et on vous recontactera dès qu’on sera dans votre zone
          </div>
        </Alert>
      );
    }
    return <div className="style{{display : none}}"></div>;
  }


export class NewsletterForm extends Component {
    constructor (props){
        super(props);

        this.state = {
            email : '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({email: event.target.value})
    }
    handleSubmit(event){
        axios.post('http://localhost:3001/api/newsletter/create',
        {
            email: this.state.email,
            ville: this.props.value
        })
        event.preventDefault();
    }

    render() {
        return(
            <div>

                <div className="d-flex text-center justify-content-center pb-3">
                    <AlertNewsletterInfo/>
                </div>
                <Container fluid className="mt-2 d-flex justify-content-center searchCityFields">
                    <form onSubmit={this.handleSubmit}>
                    <Form.Row className="d-flex justify-content-center">
                        <Form.Group as={Col} md="4" controlId="formGridId">
                            <Form.Label>Entrer votre adresse mail</Form.Label>
                            <Form.Control 
                            name="email" 
                            type="email" 
                            placeholder="Entrer votre adresse mail" 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                        />
                        </Form.Group>
                    </Form.Row>

                    <div id="container">                    
                         <button className="email" aria-label="Valider la ville">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                             <span className="button-text">Valider votre email</span>
                        </button>
                     </div>
                     </form>                        
                 </Container>

            </div>
        )
    }
}
export default NewsletterForm;