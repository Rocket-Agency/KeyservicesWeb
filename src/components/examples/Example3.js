import React from 'react';
import { Button } from 'react-bootstrap';

class Example3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn : true};

        // Lorsque nous créons une méthode dans lequel nous manipulons l'objet "this", il faut "binder" celle ci afin de lui donner un contexte d'éxécution.
        this.handleClick = this.handleClick.bind(this);
    }

    // Ici nous récupéront la valeur de state.isToggleOn et nous éxécutons du code ensuite.
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        if (this.state.isToggleOn) {
            alert("Yes !");
        } else {
            alert('No !');
        }
    }

    // Et ici, nous affichons un texte différent dans le bouton en fonction du state.isToggleOn
    render() {
        return(
            <div>
                <h1>Le toggle button !</h1>
                <p>Comprendre les évènements !</p>
                <Button variant="outline-danger" onClick= {this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </Button>
            </div>
        )
    }
}

export default Example3;