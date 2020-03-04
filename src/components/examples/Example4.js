import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../css/examples.css';

class Example4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Fonction qui récupère la valeur de l'input et set le State avec
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // Fonction qui s'éxécute lors du submit du formulaire, celui ci va tout simplement faire une "alert" avec la valeur récupérée
    // C'est un exemple de comment récupérer une valeur d'un input, ensuite, au lieu d'un alert, nous pourrions faire une requete HTTP
    // Voir l'exemple suivant ;)
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    // Dans la vue, nous allons nous occuper d'appeller les fonctions détaillées ci dessus sur les input correspondants
    render() {
        return(
            <div>
                <h1>Le formulaire !</h1>
                <p>Comprendre comment récupérer et traiter les informations renseignées par l'utilisateur</p>
                <Form className="nameForm" onSubmit={this.handleSubmit}>
                    <Form.Label>
                      <h2>Votre nom :</h2>
                      <Form.Control type="text" value={this.state.value} onChange={this.handleChange} />
                    </Form.Label><br/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                  </Form>
            </div>
        )
    }
}

export default Example4;