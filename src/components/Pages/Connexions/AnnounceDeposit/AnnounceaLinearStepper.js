import React from 'react';
import '../../../../css/Announce.scss';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import AnnounceAdress from './AnnounceAdresse';
import AnnounceHousing from './AnnounceHousing';
import AnnounceEquipement from './AnnounceEquipment';
import AnnounceConfirm from './AnnounceConfirm';
import AnnounceSuccess from './AnnounceSuccess';
import AnnounceRulesInformations from './AnnouceRulesInformations';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      display: 'block',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },

  }));

  // const steps = ['Adresse de votre logement', "Votre logement", 'Équipement et installation', 'Informations et Règles', 'Récapitulatif', "Tarif", "Annonce à poster", "Paiement", "Validation de l'annonce"];
  const steps = ['Adresse de votre logement', "Votre logement", "Tarif", 'Récapitulatif', "Annonce à poster", "Paiement", "Validation de l'annonce"];
   
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
        return <AnnounceConfirm/>;
      // case 5:
      //   return <AnnounceSuccess/>;
      default:
        return 'Étape inconnu';
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
    
    return (
        <div className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
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
                  <div className="text-center success">
                    <h1>Votre annonce a bien été enregistrer</h1>
                    <p>Vous recevrez un email de confirmation pour la validation de votre annonce</p>
                      <div className="d-flex justify-content-around align-items-center">
                        <div id="container">                    
                          <button className="retour-login" aria-label="Retour à la page d'inscription">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <Link className="button-text" to="/" aria-label="Retour dashboard">
                              Retourner à votre espace
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                </Typography>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className="d-flex justify-content-around pb-3 col-md-12">
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Retour
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
            )}
          </div>
        </div>
      );
    }