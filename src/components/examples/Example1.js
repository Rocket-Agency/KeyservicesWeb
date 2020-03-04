import React from 'react';
import { Button } from 'react-bootstrap';

// Création d'un composant sous la forme :
// class NomDeLaClasse extends React.Component {}
class Example1 extends React.Component {

	// La fonction constructor nous permet de définir la structure de notre composant
	// Différentes propriétés et méthodes seront déclarés ici.
  	constructor() {
		super()
		this.state = {
			nb: 0,
		}
	}

	// La création d'une méthode se fait de la façon suivante :
	increment() {
		this.setState({
			nb: this.state.nb + 1
		})
	}
 
 	// Ensuite, la fonction render nous permet de créer l'affichage de nos données a l'aide de JSX
 	// JSX nous permet de gérer l'affichage en mélangeant JS et HTML, un peu de la même forme qu'un langage de templating !
	render() {
		return (
			// IMPORTANT, les "class=" en CSS s'écrivent className en ReactJS !
			<div className="test">
				<h1>Le conteur !</h1>
				<p>Comprendre la notion de state et la modification du state de notre composant</p>
				<div className="counter">
					<h2>{ this.state.nb }</h2>
					<Button variant="outline-danger" onClick={ ( ) => this.increment() }>
						Click HERE
					</Button>
				</div>
			</div>
		)
	}
}

export default Example1;