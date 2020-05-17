import React, { Component } from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import AnnounceAdress from './AnnounceAdress';
import AnnounceHousing from './AnnounceHousing';
import AnnounceRulesInformations from './AnnounceRulesInformations';
import AnnounceTarif from './AnnounceTarif';
import AnnounceResume from './AnnounceResume';
import AnnouncePayment from './AnnouncePayment';
import AnnounceConfirm from './AnnounceConfirm';
import AnnounceSuccess from './AnnounceSuccess';

export class AnnounceStepperForm extends Component {
  state = {
    step: 1,
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
  };

    // Proceed to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };
  
    // Go back to prev step
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };


  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { address_road_number, address_road_type, address_road_name, address_additional_info, address_state, address_city, address_zip_code,
            housing_type_property, housing_type, housing_nb_room, housing_nb_bathroom, housing_observation,
    
    
    
    } = this.state;
    const values = { address_road_number, address_road_type, address_road_name, address_additional_info, address_state, address_city, address_zip_code,
                    housing_type_property, housing_type, housing_nb_room, housing_nb_bathroom, housing_observation
    };
      switch (step) {
        case 1:
          return (
            <AnnounceAdress
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <AnnounceHousing
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 3:
          return (
            <AnnounceRulesInformations
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 4:
          return (
            <AnnounceTarif
              nextStep={this.nextStep}
              prevStep={this.prevStep}
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
                values={values}
            />
            );
            case 6: 
              return (
                <AnnounceConfirm
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
              />
            );
          case 7: 
            return (
              <AnnouncePayment
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
            );
          case 8:
            return (
              <AnnounceSuccess 
                nextStep={this.nextStep}
            />
          );
      }
    }
}

export default AnnounceStepperForm;