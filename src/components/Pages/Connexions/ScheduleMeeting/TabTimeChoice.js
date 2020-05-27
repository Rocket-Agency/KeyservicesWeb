import React from 'react';
import '../../../../css/TabTimeChoice.scss';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SelectedTime from './SelectedTime';
import { Col, Container, Row, Form} from 'react-bootstrap';

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
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <Form.Group controlId="Announce_ad_description">
                <Form.Label>Veuillez choisir un horaire de rendez-vous :</Form.Label>
                    <Form.Control 
                        as="select" 
                        name="ad_capacity"
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Col xs={12} md={12} className="label-schoix-horaire d-flex justify-content-center">
            <Form.Group controlId="Announce_ad_description">
                 <Form.Label>Veuillez choisir un horaire de rendez-vous :</Form.Label>
                    <Form.Control 
                        as="select" 
                        name="ad_capacity"
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
      </TabPanel>

    </div>
  );
}