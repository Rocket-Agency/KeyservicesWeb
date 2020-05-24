import React from 'react';
// import '../../../css/MenuBottomApp.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { Container, Row } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
});


export default function MenuBottomApp() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);
  const classes = useStyles();
  
  return (
    <>
      <Container fluid  >
        <Row className="bottomMenu">
          <BottomNavigation value={value}  onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction  className="Map_App" fontSize="large" label="Carte"  value="/mapApp"  icon={<MapIcon />} to="/mapApp"  />
            <BottomNavigationAction  className="Homepage_App" fontSize="large" label="Accueil"  value="/homepageApp" icon={<HomeIcon />} component={Link} to="/homepageApp" />
            <BottomNavigationAction  className="Settings_App" fontSize="large" label="Paramètres" valut="/settingApp"  icon={<SettingsIcon />}  to="/settingsApp" />
          </BottomNavigation>
        </Row>

      </Container>
    </>
  );
}

// fontSize="large"
// style={{ fontSize: 40 }}