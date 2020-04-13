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

// import {Container} from 'react-bootstrap';

// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import {Button} from 'react-bootstrap';

export class UserForm extends Component {
  state = {
    step: 1,
    sexe:"",
    firstName: '',
    lastName: '',
    tel: '',
    dateOfBirth: '',
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
    const { sexe, firstName, lastName, tel, dateOfBirth, factureAdress, zipCode, email, password } = this.state;
    const values = { sexe, firstName, lastName, tel, dateOfBirth, factureAdress, zipCode, email, password };
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
              values={values}
            />
          );
        case 5:
          return <Success 
        />;
        case 5: 
          return <ConnexionProfilePropretaire />;
      }
    }
}

// getSteps = () => {
//   return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// }

// export default function VerticalLinearStepper() {
    
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };
  

//   return (
//     <div>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//             <StepContent>
//               <Typography>{getStepContent(index)}</Typography>
//               <div>
//                 <div  className="blocButtonForm">
//                   <Button
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     className="buttonReturn"
//                   >
//                     Retour
//                   </Button>
//                   <Button
//                     onClick={handleNext}
//                     className="buttonStep"
//                   >
//                     {activeStep === steps.length - 1 ? 'Finalisation' : 'Suivant'}
//                   </Button>
//                 </div>
//               </div>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0}>
//           <Typography>Vous avez terminer l'inscription - vous pouvez retourner à la page d'accueil </Typography>
//           <Button onClick={handleReset} className="mt-3">
//             Recommencer
//           </Button>

//           <Container fluid className="mt-2 mb-2 d-flex justify-content-end">
//                 <div id="container">                    
//                     <button className="validation-btn">
//                         <span className="circle" aria-hidden="true">
//                             <span className="icon arrow"></span>
//                         </span>
//                         <span className="button-text">Se connecter</span>
//                     </button>
//                 </div>           
//             </Container>
//         </Paper>
//       )}
//     </div>
//   );
// }

export default UserForm;