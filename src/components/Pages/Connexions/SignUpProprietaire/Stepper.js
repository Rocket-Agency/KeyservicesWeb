
import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

export function VerticalLinearStepper() {
    
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <div>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div>
                  <div  className="blocButtonForm">
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="buttonReturn"
                    >
                      Retour
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="buttonStep"
                    >
                      {activeStep === steps.length - 1 ? 'Finalisation' : 'Suivant'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>Vous avez terminer l'inscription - vous pouvez retourner à la page d'accueil </Typography>
            <Button onClick={handleReset} className="mt-3">
              Recommencer
            </Button>
  
            <Container fluid className="mt-2 mb-2 d-flex justify-content-end">
                  <div id="container">                    
                      <button className="validation-btn">
                          <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                          </span>
                          <span className="button-text">Se connecter</span>
                      </button>
                  </div>           
              </Container>
          </Paper>
        )}
      </div>
    );
  }

  export default VerticalLinearStepper;