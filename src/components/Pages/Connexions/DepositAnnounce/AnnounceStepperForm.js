import React, { Component } from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import AnnounceAdress from './AnnounceAdress';
import AnnounceHousing from './AnnounceHousing';
import AnnounceRulesInformations from './AnnounceRulesInformations';
import AnnounceTarif from './AnnounceTarif';
import AnnounceResume from './AnnounceResume';
import AnnounceServices from './AnnounceServices';
import AnnouncePayment from './AnnouncePayment';
import AnnounceConfirm from './AnnounceConfirm';
import AnnounceSuccess from './AnnounceSuccess';
import axios from 'axios';
import { Button } from 'reactstrap';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class AnnounceStepperForm extends Component {
  state = {
    step: 1,
    compteur_service : 1,
    address_road_number:"",
    address_road_type: '',
    address_road_name: '',
    address_additional_info: '',
    address_state: '',
    address_city: '',
    address_zip_code: '',

    housing_type_property: '',
    housing_type: '',
    housing_nb_room: '',
    housing_nb_bathroom: '',
    housing_observation: '',
    housing_nb_surface: '',

    equipment_kitchen: '',
    equipment_heater: '',
    equipment_wifi: '',
    equipment_iron: '',
    equipment_working_space: '',
    equipment_private_bathroom: '',
    equipment_shampoo: '',
    equipment_air_conditioner: '',
    equipment_hangers: '',
    equipment_hair_dryer: '',
    equipment_television: '',

    installation_parking: '',
    installation_gym: '',
    installation_pool: '',
    installation_jaccuzi: '',

    info_stairs: '',
    info_pets: '',
    info_no_parking: '',
    info_shared_space: '',
    info_equipment_restriction: '',
    info_monitoring_device: '',
    info_weapons: '',
    info_dangerous_animals: '',
    info_noise: '',

    rule_age_2: '',
    rule_age_2_12: '',
    rule_pets: '',
    rule_smoking: '',
    rule_event: '',

    info_area: '',
    info_around: '',
    rule_add: '',
    info_infos: '',
    info_availability: '',
    observation: '',

    price_starting:'',
    price_min:'',
    price_max:'',
    
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
    ad_departure_time:'',
    
    selectedFile:[],
    files:[],
    ad_id:'',

    service_category:'',
    service_prix_total:'',
    service_menage:'',
    service_frigo:'',
    service_checkin_checkout:'',
    service_remise_cle:'',
    service_mise_en_ligne:'mise_en_ligne',
  };

    // Proceed to next step
    nextStep = () => {
      this.form.isFormValid(false).then((isValid) => {
        console.log(isValid);
        if (isValid) {
            let { step } = this.state;
            if (step < 8) {
                step++;
            }
            this.setState({ step });
        }

    });
    };
  
    // Go back to prev step
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };

     //Save Images
     saveImages  = e => {
    this.setState({ files: e.target.files });
    };

    //Save Images
    saveAd  = () => {
      var aValue = localStorage.getItem('id');

      axios.get(`http://localhost:3001/ad/getLastAdByUserId/`+ aValue)
          .then(res => {
            var ad_id = parseInt(JSON.stringify(res.data.ad_id),10)+1;
            localStorage.setItem('ad_id', ad_id);
          })
      };

  handleChangeService = input => e => {
    if(this.props.service_category){
      this.setState({'service_category': ''});
      this.setState({'service_remise_cle': ''});
      this.setState({'service_frigo': ''});
      this.setState({'service_checkin_checkout': ''});
      this.setState({'service_menage': ''});
      this.setState({'service_prix_total': ''});
    }

    if(e.target.value == 'pack'){
      this.setState({'service_category': 'pack'});
      this.setState({'service_remise_cle': 'remise_cle'});
      this.setState({'service_frigo': ''});
      this.setState({'service_checkin_checkout': 'checkin_checkout'});
      this.setState({'service_menage': 'menage'});
      this.setState({'service_prix_total': ''});
    }
    else{
      this.setState({'service_category': 'carte'});
      this.setState({'service_remise_cle': ''});
      this.setState({'service_frigo': ''});
      this.setState({'service_checkin_checkout': ''});
      this.setState({'service_menage': ''});
      this.setState({'service_prix_total': ''});
    }
  }

  // Handle fields change
  handleChange = input => e => {
    // console.log('input : '+input+ 'value : '+e.target.value);
    this.setState({ [input]: e.target.value });
  };

  submit(){
    this.form.submit();
  }

  handleSubmit(){
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  }

  validatorListener = (result) => {
    this.setState({ disabled: !result });
  }

  renderStep(){
    const { step } = this.state;
    const { address_road_number, address_road_type, address_road_name, address_additional_info, address_state, address_city, address_zip_code,
            housing_type_property, housing_type, housing_nb_room, housing_nb_bathroom, housing_observation, housing_nb_surface,
            equipment_kitchen, equipment_heater, equipment_wifi, equipment_iron, equipment_working_space, equipment_private_bathroom, equipment_shampoo, equipment_air_conditioner, equipment_hangers, equipment_hair_dryer, equipment_television,
            installation_parking, installation_gym, installation_pool, installation_jaccuzi,
            info_stairs, info_pets, info_no_parking, info_shared_space, info_equipment_restriction, info_monitoring_device, info_weapons, info_dangerous_animals, info_noise,
            rule_age_2, rule_age_2_12, rule_pets, rule_smoking, rule_event, rule_add,compteur_service,
            info_area, info_around, info_infos, info_availability, observation,
            price_starting, price_min, price_max,files,ad_id,
            service_category,service_mise_en_ligne,service_remise_cle,service_frigo,service_checkin_checkout,service_menage,service_prix_total,
            ad_title, ad_description, ad_capacity, ad_notice, ad_arrival_time, ad_departure_time, ad_min_night, ad_max_night, ad_starting_date, ad_ending_date
          } = this.state;
    const values = { address_road_number, address_road_type, address_road_name, address_additional_info, address_state, address_city, address_zip_code,
                    housing_type_property, housing_type, housing_nb_room, housing_nb_bathroom, housing_observation, housing_nb_surface,
                    equipment_kitchen, equipment_heater, equipment_wifi, equipment_iron, equipment_working_space, equipment_private_bathroom, equipment_shampoo, equipment_air_conditioner, equipment_hangers, equipment_hair_dryer, equipment_television,
                    installation_parking, installation_gym, installation_pool, installation_jaccuzi,compteur_service,
                    info_stairs, info_pets, info_no_parking, info_shared_space, info_equipment_restriction, info_monitoring_device, info_weapons, info_dangerous_animals, info_noise,
                    rule_age_2, rule_age_2_12, rule_pets, rule_smoking, rule_event, rule_add,
                    info_area, info_around, info_infos, info_availability, observation,
                    price_starting, price_min, price_max,files,ad_id,
                    service_category,service_mise_en_ligne,service_remise_cle,service_frigo,service_checkin_checkout,service_menage,service_prix_total,
                    ad_title, ad_description, ad_capacity, ad_notice, ad_arrival_time, ad_departure_time, ad_min_night, ad_max_night, ad_starting_date, ad_ending_date
                  };
    let content = null;
    switch (step) {
      case 1:
        content = (
          <AnnounceAdress
            handleChange={this.handleChange}
            values={values}
            validatorListener={this.validatorListener}
          />
        );
        break;
      case 2:
        content = (
          <AnnounceHousing
            handleChange={this.handleChange}
            values={values}
            validatorListerner={this.validatorListener}
          />
        );
        break;
        case 3:
          content = (
            <AnnounceRulesInformations
              handleChange={this.handleChange}
              values={values}
            />
          );
          break;
        case 4:
          content = (
            <AnnounceTarif
              handleChange={this.handleChange}
              values={values}
            />
          );
          break;
        case 5:
          content = (
            <AnnounceResume 
              handleChange={this.handleChange}
              saveImages={this.saveImages}
              values={values}
            />
          );
          break;
        case 6: 
          content = (
            <AnnounceConfirm
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 5:
            return (
              <AnnounceResume 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                saveImages={this.saveImages}
                values={values}
              />
            );
          case 6: 
            return (
              <AnnounceConfirm
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                saveAd={this.saveAd}
                values={values}
              />
            );
            break;
          case 7:
            return (
              <AnnounceServices
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeService={this.handleChangeService}
              handleChange={this.handleChange}
              values={values}
            />
            );
            break;
          case 8:
            return (
              <AnnouncePayment
                values={values}
              />
            )
            break;
          case 9:
            content = (
              <AnnounceSuccess 
              />
            );
            break;
      }
    return content;
  }


  render() {
    const { step, disabled, submitted } = this.state;
      return (
      <ValidatorForm
        ref={(r) => { this.form = r; }}
        onSubmit={this.handleSubmit}
        instantValidate
      >
        {this.renderStep()}
        <Button
          onClick={this.prevStep}
          style={{ marginRight: '16px' }}
          disabled={step === 1}
        >
          Retour
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={step < 8 ? this.nextStep : this.submit}
          disabled={disabled || submitted}
        >
          {
            (submitted && 'Votre annonce a été enregistrée !')
            || (step < 8 ? 'Continue' : 'Enregistrer')
          }
        </Button>
      </ValidatorForm>

      );
        
    }
}

export default AnnounceStepperForm;