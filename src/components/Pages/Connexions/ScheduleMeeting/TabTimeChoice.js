import React from 'react';
import '../../../../css/TabTimeChoice.scss';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Col, Container, Row, Form} from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  MuiBox: {
    padding: '100px'
  },

  MuiDialogActions: {
    justifyContent: 'space-around;',
},

buttonNon : {
    backgroundColor: '#ffffff',
    border: '1px solid #49173B',
    display: 'flex',
    color: '#49173B'
},
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs
            className="tabs"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
        >
          <LinkTab label="Matin" href="/matin" {...a11yProps(0)} className="linkTab"/>
          <LinkTab label="Après-Midi" href="/apresMidi" {...a11yProps(1)} className="linkTab"/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}  >
        <Col xs={12} md={12} className="label-choix-horaire d-flex justify-content-center">
            <Form.Group controlId="select_time_morning" >
                <Form.Label>Veuillez choisir un créneaux horaire de rendez-vous :</Form.Label>
                    <Form.Control 
                        as="select" 
                        name="select_time_morning"
                        // defaultValue={values.ad_capacity} 
                        // onChange={handleChange('ad_capacity')}
                    >
                        <option>8:00</option>
                        <option>8:30</option>
                        <option>9:00</option>
                        <option>9:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={12} className="label-schoix-horaire d-flex justify-content-center">
                <Row>
                    <Button 
                        // onClick={this.handleClickShowAlertProfil.bind(this)}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleClickOpen}
                        endIcon={<EditIcon>Valider</EditIcon>}
                    >
                        Valider le rendez-vous
                    </Button>
                </Row>
            </Col>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmer le rendez-vous?"}</DialogTitle>

                <DialogActions className={classes.MuiDialogActions} >
                    <Button className={classes.buttonNon} onClick={handleClose} color="primary">
                        Non
                    </Button>
                    <button className="applicationConnexionEnvoyer" aria-label="Se connecter" onClick={handleClose}> 
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Oui</span>
                    </button>     
                </DialogActions>
            </Dialog>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Col xs={12} md={12} className="label-schoix-horaire d-flex justify-content-center">
            <Form.Group controlId="select_time_afternoon">
                 <Form.Label>Veuillez choisir un créneaux horaire de rendez-vous :</Form.Label>
                    <Form.Control 
                        as="select" 
                        name="select_time_afternoon"
                        // defaultValue={values.ad_capacity} 
                        // onChange={handleChange('ad_capacity')}
                    >
                        <option>13:30</option>
                        <option>13:00</option>
                        <option>14:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col xs={12} md={12} className="label-schoix-horaire d-flex justify-content-center">
                <Row>
                    <Button 
                        // onClick={this.handleClickShowAlertProfil.bind(this)}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleClickOpen}
                        endIcon={<EditIcon>Valider</EditIcon>}
                    >
                        Valider le rendez-vous
                    </Button>
                </Row>
            </Col>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmer le rendez-vous?"}</DialogTitle>

                <DialogActions className={classes.MuiDialogActions} >
                    <Button className={classes.buttonNon} onClick={handleClose} color="primary">
                        Non
                    </Button>
                    <button className="applicationConnexionEnvoyer" aria-label="Se connecter" onClick={handleClose}> 
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Oui</span>
                    </button>     
                </DialogActions>
            </Dialog>
      </TabPanel>

    </div>
  );
}

