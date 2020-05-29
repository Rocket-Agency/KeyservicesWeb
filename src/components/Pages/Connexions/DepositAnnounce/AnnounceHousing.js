import React, {Component} from 'react';
import '../../../../css/Announce.scss';

import { Row, Col, Container, Form } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import 'react-phone-input-2/lib/bootstrap.css'

export class AnnounceHousing extends Component {

    constructor(props){
        super(props)
    }
    values = {
        housing_type_property: '',
        housing_type:'',
        housing_nb_room:'',
        housing_nb_bathroom:'',
        housing_observation:'',
        housing_nb_surface: '',
        equipment_kitchen:'',
        equipment_heater:'',
        equipment_wifi:'',
        equipment_iron:'',
        equipment_working_space:'',
        equipment_private_bathroom:'',
        equipment_shampoo: '',
        equipment_air_conditioner: '',
        equipment_hangers: '',
        equipment_hair_dryer: '',
        equipment_television: '',
        
        installation_parking: '',
        installation_gym: '',
        installation_pool: '',
        installation_jaccuzi: '',
    }

    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <Container fluid className="pt-4 blocForm" >  
                    <Row>
                        <Col sm>
                            <h2 className="title-form-Announce">1 - Votre adresse</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce title-form-Announce-active">2 - Votre logement </h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce ">3 - Règles et informations</h2>
                        </Col>
                        <Col sm>
                            <h2 className="title-form-Announce ">4 - Tarif</h2>
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
                            <h2 className="title-form-Announce ">8 - Paiement</h2>
                        </Col>
                    </Row>
                    <h2 className="mb-4">Votre logement</h2>
                    <fieldset>
                    <Container fluid>
                        <Form.Row>
                            <Form.Label className="d-flex align-items-center label-info-annonce">
                                Type de propriété : 
                            </Form.Label>

                            <RadioGroup row aria-label="position" name="position" defaultValue="Maison">
                                <FormControlLabel
                                    value="Maison"
                                    label="Maison"
                                    control={<Radio color="primary" />}
                                    onChange={handleChange('housing_type_property')}
                                />       

                                <FormControlLabel
                                    value="Appartement"
                                    control={<Radio color="primary" />}
                                    label="Appartement"
                                    onChange={handleChange('housing_type_property')}
                                />

                                <FormControlLabel
                                    value="Chambre(s)"
                                    control={<Radio color="primary" />}
                                    label="Chambre(s)"
                                    onChange={handleChange('housing_type_property')}
                                 />

                                <FormControlLabel
                                    value="Auberge de jeunesse"
                                    control={<Radio color="primary" />}
                                    label="Auberge de jeunesse"
                                    onChange={handleChange('housing_type_property')}
                                />
                            </RadioGroup>
                        </Form.Row>

                        <Form.Row>
                            <Form.Label className="d-flex align-items-center label-info-annonce">
                                Type de logement : 
                            </Form.Label>
                            <RadioGroup row aria-label="position" name="position" defaultValue="Logement entier">
                                <FormControlLabel
                                    value="Logement entier"
                                    control={<Radio color="primary" />}
                                    label="Logement entier"
                                    defaultValue={values.housing_type} 
                                    onChange={handleChange('housing_type')}
                                />                               

                                 <FormControlLabel
                                    value="Chambre privé"
                                    control={<Radio color="primary" />}
                                    label="Chambre privé"
                                    defaultValue={values.housing_type} 
                                    onChange={handleChange('housing_type')}
                                />

                                <FormControlLabel
                                    value="Chambre partagée"
                                    control={<Radio color="primary" />}
                                    label="Chambre partagée"
                                    defaultValue={values.housing_type} 
                                    onChange={handleChange('housing_type')}
                                 />
                            </RadioGroup>
                        </Form.Row>

                        <Row>
                            <Col xs={12} md={6} >
                                <Form.Row>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={7} className="d-flex align-items-center label-info-annonce"> 
                                            Nombre de chambres : 
                                        </Form.Label>
                                        <Col sm={5}>
                                            <TextValidator
                                                key={1}
                                                type="number" 
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                validators={['required', 'minNumber:0' , 'matchRegexp:^[0-9]{1,2}$']}
                                                errorMessages={['Ce champ est obligatoire', 'Nombre invalide', 'Nombre invalide']}
                                                name="housing_nb_room"
                                                onChange={handleChange('housing_nb_room')}
                                                value={values.housing_nb_room}
                                                validatorListener={this.props.validatorListener}
                                            />
                                        </Col>
                                </Form.Group>
                                </Form.Row>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Row>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={7} className="d-flex align-items-center label-info-annonce"> 
                                            Nombre de salles de bain : 
                                        </Form.Label>
                                        <Col sm={5}>
                                            <TextValidator
                                                key={1}
                                                type="number" 
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                validators={['required', 'minNumber:0' , 'matchRegexp:^[0-9]{1,2}$']}
                                                errorMessages={['Ce champ est obligatoire', 'Nombre invalide', 'Nombre invalide']}
                                                name="housing_nb_bathroom"
                                                onChange={handleChange('housing_nb_bathroom')}
                                                value={values.housing_nb_bathroom}
                                                validatorListener={this.props.validatorListener}
                                            />
                                        </Col>
                                    </Form.Group>
                                </Form.Row>
                            </Col>  
                        </Row> 

                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Row>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={7} className="d-flex align-items-center label-info-annonce"> 
                                            Superficie en m2 :
                                        </Form.Label>
                                        <Col sm={5}>
                                            <TextValidator
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                validators={['required', 'minNumber:0' , 'matchRegexp:^[0-9]{1,4}$']}
                                                errorMessages={['Ce champ est obligatoire', 'Nombre invalide', 'Nombre invalide']}
                                                name="housing_nb_surface"
                                                onChange={handleChange('housing_nb_surface')}
                                                value={values.housing_nb_surface}
                                                validatorListener={this.props.validatorListener}
                                            />
                                        </Col>
                                </Form.Group>
                                </Form.Row>
                            </Col>  
                        </Row> 

                        <Form.Row>
                            <Form.Group as={Col} controlId="TextareaObservation">
                                <Form.Label className="label-info-annonce">Observations : </Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows="3"
                                    defaultValue={values.housing_observation} 
                                    onChange={handleChange('housing_observation')}
                                />
                            </Form.Group>
                        </Form.Row>
                    </Container>
                    </fieldset>

                                              
                    <Container fluid>
                        <h2 className="mt-4 mb-4">Vos Équipements et installations</h2>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-annonce">
                                   Équipements :
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Cuisine"  
                                            defaultValue={values.equipment_kitchen} 
                                            onChange={handleChange('equipment_kitchen')} 
                                            color="primary" />}
                                            label="Cuisine"
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Chauffage"  
                                            color="primary" />}
                                            defaultValue={values.equipment_heater} 
                                            onChange={handleChange('equipment_heater')}
                                            label="Chauffage" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Wifi"  
                                            color="primary" />}
                                            defaultValue={values.equipment_wifi} 
                                            onChange={handleChange('equipment_wifi')}
                                            label="Wifi" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Fer à repasser"  
                                            color="primary" />}
                                            defaultValue={values.equipment_iron} 
                                            onChange={handleChange('equipment_iron')}
                                            label="Fer à repasser"
                                        />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Espace de travail"  
                                            color="primary" />}
                                            defaultValue={values.equipment_working_space} 
                                            onChange={handleChange('equipment_working_space')}
                                            label="Espace de travail" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Salle de bain privée"  
                                            color="primary" />}
                                            defaultValue={values.equipment_private_bathroom} 
                                            onChange={handleChange('equipment_private_bathroom')}
                                            label="Salle de bain privée" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Produits d'entretiens"  
                                            color="primary" />}
                                            defaultValue={values.equipment_shampoo} 
                                            onChange={handleChange('equipment_shampoo')}
                                            label="Produits d'entretiens" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Climatiseur"  
                                            color="primary" />}
                                            defaultValue={values.equipment_air_conditioner} 
                                            onChange={handleChange('equipment_air_conditioner')}
                                            label="Climatiseur" 
                                        />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Cintres"  
                                            color="primary" />}
                                            defaultValue={values.equipment_hangers} 
                                            onChange={handleChange('equipment_hangers')}
                                            label="Cintres" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                         <FormControlLabel
                                            control={<Checkbox 
                                            value="Sèche cheveux"  
                                            color="primary" />}
                                            defaultValue={values.equipment_hair_dryer} 
                                            onChange={handleChange('equipment_hair_dryer')}
                                            label="Sèche cheveux" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Télévision"  
                                            color="primary" />}
                                            defaultValue={values.equipment_television} 
                                            onChange={handleChange('equipment_television')}
                                            label="Télévision" 
                                        />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="label-info-annonce">
                                    Installations :
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Parking"  
                                            color="primary" />}
                                            defaultValue={values.installation_parking} 
                                            onChange={handleChange('installation_parking')}
                                            label="Parking" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Salle de sport/ Équipement musculaire"  
                                            color="primary" />}
                                            defaultValue={values.installation_gym} 
                                            onChange={handleChange('installation_gym')}
                                            label="Salle de sport/ Équipement musculaire" 
                                        />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Piscine"  
                                            color="primary" />}
                                            defaultValue={values.installation_pool} 
                                            onChange={handleChange('installation_pool')}
                                            label="Piscine" 
                                        />
                                    </Form.Group>

                                    <Form.Group id="formGridCheckbox">
                                        <FormControlLabel
                                            control={<Checkbox 
                                            value="Jaccuzi"  
                                            color="primary" />}
                                            defaultValue={values.installation_jaccuzi} 
                                            onChange={handleChange('installation_jaccuzi')}
                                            label="Jaccuzi" 
                                        />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default AnnounceHousing;