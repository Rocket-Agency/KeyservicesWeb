import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

import "react-datepicker/dist/react-datepicker.css";
import DatePickerChoice from './DateChoice/DatePickerChoice';
import { Button } from 'reactstrap';
import Img from 'react-cool-img';
import ImgDefaultAvatar from '../../../../ImagesPlaceholder/100.png';


export class AnnounceResume extends Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: new Date(),
          files: null
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
    
    handleDateChange(date) {
        this.setState({
          startDate: date
        })
      }

      onChangeHandler=event=>{
        this.setState({
            files: event.target.files, //declareer chaque ellemeeent .size . name ...
                loaded: 0,
          })
        // console.log(event.target.files[0].size)
    }

      onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
      }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

      state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };

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
                                        <TextField
                                            type="text" 
                                            name="ad_title"
                                            pattern="[A-Za-z]{3}"
                                            required id="standard-required"
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            defaultValue={values.ad_title} 
                                            onChange={handleChange('ad_title')}
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
                                    <Form.Control 
                                        as="textarea" 
                                        rows="2" 
                                        name="ad_description" 
                                        defaultValue={values.ad_description} 
                                        onChange={handleChange('ad_description')}
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

                        <DatePickerChoice />

                    </Container>

                    <Col xs={12} md={12} className="d-flex justify-content-around pt-4 pb-4"> 
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                            aria-label="Retour"
                        >Retour</Button>

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

export default AnnounceResume;