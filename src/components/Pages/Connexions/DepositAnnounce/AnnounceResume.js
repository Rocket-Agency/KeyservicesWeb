import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

import "react-datepicker/dist/react-datepicker.css";
import Img from 'react-cool-img';
import ImgDefaultAvatar from '../../../../ImagesPlaceholder/100.png';
import {TextValidator} from 'react-material-ui-form-validator';


export class AnnounceResume extends Component {
    constructor (props) {
        super(props)
        this.state = {
          files: null
        };
      }
    values = {
        ad_title:'',
        ad_description:'',
        ad_capacity:'',
        ad_notice:'',
        ad_arrival_time:'',
        ad_departure_time:'',
        ad_min_night:'',
        ad_max_night:'',
        ad_starting_date:'',
        ad_ending_date:'',
        ad_arrival_time:'',
        ad_departure_time:''
    }
      onChangeHandler=event=>{
        this.setState({
            files: event.target.files, //declareer chaque ellemeeent .size . name ...
                loaded: 0,
          })
        // console.log(event.target.files[0].size)
    }

    render() {
        const { values, handleChange ,saveImages } = this.props;
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
                            <h2 className="title-form-Announce title-form-Announce-active">5 - Votre annonce</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">6 - Validation</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce">7 - Nos services</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce ">8 - Paiement</h2>
                        </Col>
                    </Row> 
                    <h2>Votre annonce</h2>
  
                    <Container fluid>
                        <Row className="pt-3 pb-3">
                            <Col xs={12} md={12}>
                                <Form.Row>
                                <Form.Label className="label-info-annonce" column sm={12}>Titre de l'annonce</Form.Label>
                                    <Col sm={12}>
                                        <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="ad_title"
                                            validators={['required']}
                                            errorMessages={['Le titre de l\'annonce est requis']}
                                            value={values.ad_title}
                                            onChange={handleChange('ad_title')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid>
                        <Row className="pt-3 pb-3">
                            <Col xs={12} md={12} className="label-info-annonce">
                                <Form.Group controlId="Announce_ad_description">
                                    <Form.Label>Description</Form.Label>
                                     <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="ad_description"
                                            multiline
                                            rows={4}
                                            validators={['required']}
                                            errorMessages={['La description de l\'annonce est requise']}
                                            value={values.ad_description}
                                            onChange={handleChange('ad_description')}
                                            validatorListener={this.props.validatorListener}
                                        /> 
                                </Form.Group> 
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                        <Col md={12}>
                            <div className="text-center">
                            <Img
                                placeholder={ImgDefaultAvatar} 
                                className="location img-circle mt-3 mb-3"
                                alt="photo de la location" 
                                />
                                <h6>Mettre une photo de votre logement...</h6>
                            
                                <input type="file" class="form-control" multiple onChange={saveImages}/>
                            </div>
                        </Col>
                        </Row>
                    </Container>

                    <Container fluid>
                        <Row className="pt-3 pb-3">
                            <Col xs={12} md={6} className="label-info-annonce">
                                <Form.Group controlId="Announce_ad_description">
                                    <Form.Label>Capacité d'accueil</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        name="ad_capacity"
                                        defaultValue={values.ad_capacity} 
                                        onChange={handleChange('ad_capacity')}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6} className="label-info-annonce">
                                <Form.Group controlId="Announce_ad_notice">
                                <Form.Label>Préavis (A combien de jour souhaitez-vous être prévenu d'une arrivée ?)</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        name="ad_notice"
                                        defaultValue={values.ad_notice} 
                                        onChange={handleChange('ad_notice')}
                                    >
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid> 
                        <Row className="pt-2 pb-2 d-flex justify-content-center">
                            <Col xs={6} md={3} className="d-flex justify-content-center info-annonce-night">
                                <Form.Group controlId="Announce_ad_description">
                                    <Form.Label>Nuit minimum</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        name="ad_min_night"
                                        defaultValue={values.ad_min_night} 
                                        onChange={handleChange('ad_min_night')}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            
                            <Col xs={6} md={3} className="d-flex justify-content-center info-annonce-night">
                                <Form.Group controlId="Announce_ad_description">
                                    <Form.Label>Nuit maximum (*)</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        name="ad_max_night"
                                        defaultValue={values.ad_max_night} 
                                        onChange={handleChange('ad_max_night')}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center">* Nous contacter pour plus de nuité</Row>
                    </Container>

                    <Container fluid className="pt-3 pb-3"> 
                        <Row className="pt-3 pb-3">
                            <Col xs={6} md={6} className="d-flex justify-content-center info-annonce-date">
                               Arrivée
                            </Col>
                            
                            <Col xs={6} md={6} className="d-flex justify-content-center info-annonce-date">
                                Départ
                            </Col>
                        </Row>

                        
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <TextValidator
                                variant="outlined"
                                fullWidth
                                size="small"
                                label="Date d'arrivée"
                                type="date"
                                defaultValue="2020-05-29"
                                validators={['required']}
                                errorMessages={['La date d\arrivée est requise']}
                                value={values.ad_starting_date}
                                onChange={handleChange('ad_starting_date')}
                                validatorListener={this.props.validatorListener}
                                />
                            </Grid>
                            
                            <Grid item xs={3}>

                                <TextValidator
                                variant="outlined"
                                fullWidth
                                size="small"
                                label="Heure d'arrivée"
                                type="time"
                                defaultValue="2020-05-29"
                                validators={['required']}
                                errorMessages={['L\'heure d\'arrivée est requise']}
                                value={values.ad_arrival_time}
                                onChange={handleChange('ad_arrival_time')}
                                validatorListener={this.props.validatorListener}
                                /> 
                            </Grid>
                                                
                            <Grid item xs={3}>  
                                <TextValidator
                                variant="outlined"
                                fullWidth
                                size="small"
                                type="date"
                                label="Date de départ"
                                defaultValue="2020-05-29"
                                validators={['required']}
                                errorMessages={['La date de départ est requise']}
                                value={values.ad_ending_date}
                                onChange={handleChange('ad_ending_date')}
                                validatorListener={this.props.validatorListener}
                                /> 
                            </Grid>
                                                
                            <Grid item xs={3}>
                                <TextValidator
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    label="Heure de départ"
                                    type="time"
                                    defaultValue="2020-05-29"
                                    validators={['required']}
                                    errorMessages={['La heure de départ est requise']}
                                    value={values.ad_departure_time}
                                    onChange={handleChange('ad_departure_time')}
                                    validatorListener={this.props.validatorListener}
                                /> 
                            </Grid>
                        </Grid>

                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceResume;