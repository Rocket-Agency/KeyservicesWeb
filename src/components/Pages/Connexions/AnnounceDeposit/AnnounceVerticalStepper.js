import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AnnounceAdress from './AnnounceAdresse';
import AnnounceHousing from './AnnounceHousing';
import AnnounceEquipement from './AnnounceEquipment';
import AnnounceConfirm from './AnnounceConfirm';
import AnnounceSuccess from './AnnounceSuccess';
import AnnounceRulesInformations from './AnnouceRulesInformations';
import Checkout from './Payment/Checkout';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Adresse de votre logement', "Votre logement", 'Équipement et installation', 'Informations et Règles', 'Récapitulatif', 'Tarif', 'Annonce à poster', 'Paiement', 'Validation annonce'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AnnounceAdress />;
    case 1:
      return <AnnounceHousing />;
    case 2:
      return <AnnounceEquipement />;
    case 3:
      return <AnnounceRulesInformations />;
    case 4:
      return <Checkout/>;
    case 6:
      return <Checkout/>;
    case 7:
      return <AnnounceConfirm/>;
    case 9:
      return <AnnounceConfirm/>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>

              <div className={classes.actionsContainer}>
                 <div className="d-flex justify-content-around pb-3 col-md-12">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}