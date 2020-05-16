import React, {Component} from 'react';
import '../../../../css/Newsletter.scss';
import { Col, Container, Form} from 'react-bootstrap';


export class NewsletterForm extends Component {

    render() {
        return(
            <div>

                <div className="d-flex text-center justify-content-center">
                    <p className="InformationForm">Inscrivez votre adresse mail et on vous recontactera dès qu’on sera dans votre zone</p>
                </div>
                <Container fluid className="mt-2 d-flex justify-content-center searchCityFields">
                    <Form.Row className="d-flex justify-content-center">
                        <Form.Group as={Col} md="4" controlId="formGridId">
                            <Form.Label>Entrer votre adresse mail</Form.Label>
                            <Form.Control 
                            name="email" 
                            type="email" 
                            placeholder="Entrer votre adresse mail" 
                            // value={this.state.email} 
                            // onChange={this.handleChange} 
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
                 </Container>

            </div>
        )
    }
}
export default NewsletterForm;