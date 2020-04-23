import React, { Component } from 'react';
import '../../../../css/InscriptionProprietaire.scss';

// import FormUserDetails from './FormUserDetails';
import InformationGenerales from './InformationGenerales';
import InformationAdresse from './InformationAdresse';
import InformationConnexion from './InformationConnexion';

// import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import ConnexionProfilePropretaire from '../ConnexionProfilePropretaire';

export class UserForm extends Component {
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
            <InformationGenerales
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <InformationAdresse
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 3:
          return (
            <InformationConnexion
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 4:
          return (
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 5:
          return (
            <Success 
              nextStep={this.nextStep}
          />
          );

        case 6: 
          return (
            <ConnexionProfilePropretaire
              nextStep={this.nextStep}
          />
          );
      }
    }
}

export default UserForm;