import React, { Component } from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import AnnounceAdress from './AnnounceAdress';
import AnnounceHousing from './AnnounceHousing';
import AnnounceRulesInformations from './AnnounceRulesInformations';
import AnnounceTarif from './AnnounceTarif';
import AnnounceResume from './AnnounceResume';
import AnnouncePayment from './AnnouncePayment';
import AnnounceConfirm from './AnnounceConfirm';

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
    const { sexe, first_name, last_name, tel, dateOfBirth, factureAdress, zipCode, email, password } = this.state;
    const values = { sexe, first_name, last_name, tel, dateOfBirth, factureAdress, zipCode, email, password };
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
          />
          );
        case 6: 
          return (
            <AnnouncePayment
              nextStep={this.nextStep}
          />
          );
        case 7: 
          return (
            <AnnounceConfirm
              nextStep={this.nextStep}
          />
          );  
      }
    }
}

export default AnnounceStepperForm;