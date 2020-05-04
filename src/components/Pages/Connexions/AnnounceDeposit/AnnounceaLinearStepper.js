import React from 'react';
import '../../../../css/Announce.scss';

import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import { Col, Container, Row, Form } from 'react-bootstrap';
// import TextField from '@material-ui/core/TextField';
// import AddressForm from './Payment/AddressForm';
import AnnounceAdress from './AnnounceAdresse';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  const steps = ['Adresse de votre logement', 'Équipement et installation', 'Informations et Règles', 'Tarif', 'Votre annonce'];
  
//   function getSteps() {
//     return ['Adresse de votre logement', 'Équipement et installation', 'Informations et Règles', 'Tarif', 'Votre annonce'];
//   }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AnnounceAdress />;
      case 1:
        return 'Votre Logement';
      case 2:
        return 'Équipement de votre logement!';
      default:
        return 'Unknown step';
    }
  }

  export default function AnnounceaLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleReset = () => {
      setActiveStep(0);
    };

    return (
        <div className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Retour
                  </Button>
   
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }