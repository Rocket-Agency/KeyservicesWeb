import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';

import {loadStripe} from '@stripe/stripe-js';
import {CardElement, useStripe, useElements, Elements} from '@stripe/react-stripe-js';

export class AnnouncePayment extends Component {

    constructor(props){
        super(props);

        this.state = {
            stripe : 'pk_test_9xweeLk3zovQYpEWOEk0Tc0J004QTgAupc'
        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // const { values, handleChange } = this.props;
        // console.log(this.props);
        const stripePromise = loadStripe(this.state.stripe);
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <Row>
                        <Col sm>
                            <h2 className="title-form-Announce">1 - Votre addresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">2 - Votre logement </h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">3 - Règles et informations</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">4 - Tarif</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">5 - Votre annonce</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">6 - Validation</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">7 - Nos services</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce title-form-Announce-active">8 - Paiement</h2>
                        </Col>
                    </Row>
  
                    <Container fluid>
                
                        <h2>Paiement</h2>
                            
                        <form onSubmit={this.handleSubmit}>
                        <Elements stripe={stripePromise}>
                        <CardElement
                            options={{
                                style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                    color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                                },
                            }}
                            />
                        </Elements>
                        <button type="submit" disabled={!stripePromise}>
                                Pay
                        </button>
                        </form>
                        
                    </Container>

                    <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-4"> 
                                    <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.continue}
                                    aria-label="Continuer"
                                    >Continuer</Button>
                                </Col>
                </Container>
            </div>
        )
    }
}

export default AnnouncePayment;