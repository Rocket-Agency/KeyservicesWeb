// Au début de chaque fichier il est important d'importer les différentes dependances dont on aurais besoin !
import React from 'react';
import ReactDOM from 'react-dom';

// Import du plugin de routes
import { BrowserRouter as Router, Route } from "react-router-dom";
// Import des composants bootstrap et de la feuille css
import { Alert } from 'react-bootstrap';
import './css/index.css';
// Import des différents composants que nous aurions créés
import Header from './components/layout/Header';
import Example1 from './components/examples/Example1.js';
import Example2 from './components/examples/Example2.js';
import Example3 from './components/examples/Example3.js';
import Example4 from './components/examples/Example4.js';
import Example5 from './components/examples/Example5.js';

import Container from '@material-ui/core/Container';

// Ici nous allons gérer la structure globale du site, et les différents composants affichés selon les différents chemins
// Le chemin /exemple2 nous affichera donc le composant Example2
ReactDOM.render(
	<Router>
		<div>
			<Header />
			<Container fixed>
				<div className="test">
                	<Alert variant="secondary">
						<Route exact path="/" component={Example1} />
			        	<Route path="/exemple2" component={Example2} />
			        	<Route path="/exemple3" component={Example3} />
			        	<Route path="/exemple4" component={Example4} />
			        	<Route path="/exemple5" component={Example5} />
		        	</Alert>
	        	</div>
			</Container>
		</div>
	</Router>
, document.getElementById('root'));