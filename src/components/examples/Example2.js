import React from 'react';
import '../../css/examples.css';

class Example2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // La fonction componentDidMount nous permet de éxécuter du code lorsque le montage du composant est finis.
    // C'est à dire, une fois que le composant à été "construit", le code s'éxécute, et ensuite il render la vue !
    // Ici, nous créons un interval de 1 seconde qui appelle la fonction tick()
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    // Ici nous allons tout simplement recréer une date a la seconde.
    tick() {
        this.setState({
          date: new Date()
        });
    }

    // ComponentWillUnmount nous permet d'éxécuter du code lorsque notre composant est sur le point d'être "démonté", donc, supprimé ou modifié.
    // Ici, nous allons clear la valeur de notre variable.
    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    // Lorsque nous allons render ce code, componentDidMount crée un timer qui appelle la fonction tick()
    // La fonction tick() créer une nouvelle date et actualise le state de notre composant
    // Cette date est affichée grâce a la vue détaillée dans le code juste en bas
    // Et ensuite componentWillUnmount est appellé afin de reset le timer

    // Le rendu final est tout simplement une horloge donc l'heure s'actualise a chaque seconde.
    render() {
        return (
            <div>
                <h1>L'horloge !</h1>
                <p>Comprendre les fonctions componentDidMount et componentWillUnmount</p>
                <p className="clock">{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Example2;