import React from 'react';
import '../../../../css/InscriptionProprietaire.scss';

// import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InformationGenerales from './InformationGenerales';

import {Button} from 'react-bootstrap';

import {Form, Container, Col, Row} from 'react-bootstrap';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function getSteps() {
  return ['Information générales', 'Information sur votre adresse', 'Information sur votre connexion', 'Résumer de votre inscription'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return    <Form>
                    <InformationGenerales />
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

    case 3:
    return "Résumer de votre inscription"
        
    default:
      return 'Etape inconnu';
  }
}

export default function VerticalLinearStepper() {
    
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