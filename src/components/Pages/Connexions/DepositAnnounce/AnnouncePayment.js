import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import axios from "axios";


export class AnnouncePayment extends Component {

    constructor(props){
        super(props);
    }

    async handleSubmit(event){
        event.preventDefault();
        const {stripe, elements} = this.props;
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement)
        });
    
        if (!error) {
          const { id } = paymentMethod;
          const { name } = this.props.values.address_road_number;
          console.log(name);
    
          try {
            const { data } = await axios.post("http://localhost:3001/api/payment", { id, amount: 1099 });
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }
      }

    render() {
        const {stripe} = this.props;
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
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ maxWidth: "400px", margin: "0 auto" }}
                                >
                                <h2>Prix: 9.90 € EUR</h2>
                                <CardElement />
                                <button 
                                    className="buttonPaiement"
                                    disabled={!stripe}>
                                    Paiement
                                </button>
                            </form>
                        
                    </Container>
                </Container>
            </div>
        )
    }
}

const InjectedCheckoutForm = () => {
    return (
        <ElementsConsumer>
        {({stripe, elements}) => (
            <AnnouncePayment stripe={stripe} elements={elements} />
        )}
        </ElementsConsumer>
    );
};

const stripePromise = loadStripe('pk_test_9xweeLk3zovQYpEWOEk0Tc0J004QTgAupc');

const Test = () => {
  return(
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
  );
};

export default Test;