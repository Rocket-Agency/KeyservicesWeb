import React, { Component } from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Row, Form } from 'react-bootstrap';
import InformationGenerales from './InformationGenerales';
import InformationAdresse from './InformationAdresse';
import InformationConnexion from './InformationConnexion';
import Confirm from './Confirm';
import Success from './Success';
import ConnexionProfilePropretaire from '../ConnexionProfilePropretaire';
import { Button } from 'reactstrap';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
      this.form.isFormValid(false).then((isValid) => {
        console.log(isValid);
        if (isValid) {
            let { step } = this.state;
            if (step < 3) {
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


  renderStep() {
    const { step } = this.state;
    const { sexe, first_name, last_name, tel, dateOfBirth, factureAdress, zipCode, email, password } = this.state;
    const values = { sexe, first_name, last_name, tel, dateOfBirth, factureAdress, zipCode, email, password };
    let content = null;  
    switch (step) {
        case 1:
        content = (
            <InformationGenerales
            handleChange={this.handleChange}
            values={values}
            validatorListener={this.validatorListener}
          />
          );
          break;
          case 2:
          content = (
            <InformationAdresse
              handleChange={this.handleChange}
              values={values}
              validatorListener={this.validatorListener}
            />
          );
          break;
          case 3:
          content = (
            <InformationConnexion
              handleChange={this.handleChange}
              values={values}
              validatorListener={this.validatorListener}
            />
          );
          break;
          case 4:
          content = (
            <Confirm
              handleChange={this.handleChange}
              values={values}
              validatorListener={this.validatorListener}
            />
          );
          break;
          case 5:
          content = (
            <Success 
              nextStep={this.nextStep}
              validatorListener={this.validatorListener}
          />
          );
          break;
          case 6: 
          content = (
            <ConnexionProfilePropretaire
              nextStep={this.nextStep}
              validatorListener={this.validatorListener}
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
          <Row xs={12} md={12} className="d-flex justify-content-around pt-3 pb-3">
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
              onClick={step < 5 ? this.nextStep : this.submit}
              disabled={disabled || submitted}
            >
              {
                (submitted && 'Votre inscription a bien été enregistrée !')
                || (step < 6 ? 'Continue' : 'Enregistrer')
              }
            </Button>
            </Row>
        </ValidatorForm>
  
        );
    }
}

export default UserForm;