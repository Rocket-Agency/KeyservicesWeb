import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {Form, Container, Col, Row} from 'react-bootstrap';
import AttachFileIcon from '@material-ui/icons/AttachFile';

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
  return ['Information générales', 'Information sur votre adresse', 'Information sur votre connexion'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return  <Form>
            <Container fluid className="pt-4 pb-4 blocForm" >  
                <h2 className="title-form">Information  Générales</h2>
                <Form.Row className="mt-4">
                    <Col  xs={12} md={4} className="col d-flex justify-content-center pt-3 pb-3">
                        {['checkbox'].map((type) => (
                            <div key={`custom-inline-${type}`} >
                                <Form.Check
                                    custom
                                    inline
                                    label="Mme"
                                    type={type}
                                    id={`custom-inline-${type}-Mme`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Mr"
                                    type={type}
                                    id={`custom-inline-${type}-Mr`}
                                />
                            </div>
                        ))}

                        
                    </Col>
                </Form.Row>     

                <Container fluid>
                    <Row>
                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Nom</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Entrer votre nom" />
                                </Col>
                            </Form.Row>     
                        </Col>

                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Prénom</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Entrer votre prénom" />
                                </Col>
                            </Form.Row>     
                        </Col>
                    </Row>
            
                    <Row>
                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Numéro de téléphone</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Entrer votre numéro de téléphone" />
                                </Col>
                            </Form.Row>     
                        </Col>

                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Date de naissance</Form.Label>
                                <Col>
                                    <Form.Control type="date" />
                                </Col>
                            </Form.Row>     
                        </Col>
                    </Row>
                </Container>
            </Container>
            </Form>
    case 1:
      return  <Container fluid className="pt-4 pb-4 blocForm">
                    <h2 className="title-form">Information sur votre adresse</h2>
                    <Row className="mt-4 mb-4">
                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Votre adresse de facturation</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Votre adresse" />
                                </Col>
                                <Row>
                                    {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
                                </Row>
                            </Form.Row>     
                        </Col>

                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Code postal</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Entrer votre code postal" />
                                </Col>
                            </Form.Row>     
                        </Col>

                        <Col  xs={12} md={6}>
                            <Form.Row>
                                <Form.Label column sm={12}>Veuillez fournir un justificatif de domicile</Form.Label>
                            </Form.Row>

                            <Form.Row>
                                <Button className="attachmenBtn">
                                    <AttachFileIcon className="iconAttachFile" />  
                                    Envoyer un justificatif
                                </Button>         
                            </Form.Row>     
                        </Col>
                    </Row>
                </Container>

    case 2:
      return  <Form> 
                <Container fluid className="pt-4 pb-4 blocForm">

                    <h2 className="title-form">Information sur votre connexion</h2>
                    <Row>
                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Adresse mail</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Entrer votre adresse mail" />
                                </Col>
                            </Form.Row>     
                        </Col>

                        <Col  xs={12} md={6} className="pb-3">
                            <Form.Row>
                                <Form.Label className="label-info-generales" column sm={4}>Votre mot de passe</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Entrer votre mot de passe" />
                                </Col>
                            </Form.Row>     
                        </Col>
                    </Row>


                    <Container fluid className="d-flex justify-content-left">
                        <Col  xs={12} md={6} className="pb-3">
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="J'accepte les conditions d'utilisations par Keyservices." />
                            </Form.Group>
                        </Col>   
                    </Container>

                    {/* <Container fluid className="mt-2 d-flex justify-content-end">
                        <div id="container">                    
                            <button className="validation-btn">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Valider l'inscriotion</span>
                            </button>
                        </div>           
                    </Container> */}
                </Container>
            </Form>
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

  const hanfleConnexion = () => {
      setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
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
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Vous avez terminer l'inscription - vous pouvez retourner à la page d'accueil </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Recommancer
          </Button>

          <Container fluid className="mt-2 d-flex justify-content-end">
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