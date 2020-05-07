import React, { Component } from 'react';
import '../../../../css/Announce.scss';

// import FormUserDetails from './FormUserDetails';
import AnnouncePresentation from './AnnouncePresentation';
import AnnounceAdress from './AnnounceAdresse';
import AdresseEquipement from './AnnounceEquipment';
import AnnounceHousing from './AnnounceHousing';
import AnnounceSucces from './AnnounceSuccess';
import Checkout from './Payment/Checkout';

export class Announce extends Component {
  state = {
    step: 1,
    sexe:"",
    first_name: '',
    last_name: '',
    tel: '',
    birth: '',
    factureAdress: '',
    zipCode: '',
    email: '',
    password: '',
    error: true,
    firstNameError: "",
    lastNameError: "",
    telEroor:"",
    factureAdressError: "",
    postCodeError: "",
    emailError: "",
    passwordError: ""
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
          <Checkout
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 1:
        return (
          <AnnouncePresentation
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 2:
          return (
            <AnnounceAdress
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
          return (
            <AdresseEquipement
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 4:
          return (
            <AnnounceHousing
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 5:
            return (
              <AnnounceSucces 
                nextStep={this.nextStep}
            />
            );

        // case 6: 
        //   return (
        //     <ConnexionProfilePropretaire
        //       nextStep={this.nextStep}
        //   />
        //   );
      }
    }
}

export default Announce;