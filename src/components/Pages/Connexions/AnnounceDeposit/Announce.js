import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Container } from 'react-bootstrap';

export class AnnounceTarif extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <h2>Votre annonce</h2>
  
                    <Container fluid>
                        <Row>Titre de l'annonce</Row>
                        <Row>Description</Row>
                        <Row>Capacité d'accueil</Row>
                        <Row>Note importante</Row>
                        <Row>Heure d'arrivée</Row>
                        <Row>Heure de départ</Row>
                        <Row>Nuit minimum</Row>
                        <Row>Nuit maximum</Row>
                        <Row>Date d'arrivée</Row>
                        <Row>Date de départ</Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceTarif;