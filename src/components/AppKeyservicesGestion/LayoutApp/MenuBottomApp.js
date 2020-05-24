import React from 'react';
import '../../../css/MenuBottomApp';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { Container } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
});

const styleBottomNavigation = makeStyles ({
  MuiSvgIcon : {
    fontSize: '40',
  }
})

export default function MenuBottomApp() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);
  const classes = useStyles();
  const classesNavigation = useStyles();
  
  return (
    <>
      <Container fluid  >
        <Row className="bottomMenu">
          <BottomNavigation value={value}  onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
            className={classesNavigation.styleBottomNavigation}
          >
            <BottomNavigationAction  
              className="Settings" 
              fontSize="large" 
              label="Carte"      
              value="/mapApp"      
              icon={<MapIcon />} 
              to="/mapApp"  
              value={value}  
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <BottomNavigationAction  className="Settings" fontSize="large" label="Accueil"    value="/homepageApp" icon={<HomeIcon />} component={Link} to="/homepageApp" />
            <BottomNavigationAction  className="Settings" fontSize="large" label="Paramètres" valut="/settingApp"  icon={<SettingsIcon />}  to="/settingsApp" />
          </BottomNavigation>
        </Row>

      </Container>
    </>
  );
}

// fontSize="large"
// style={{ fontSize: 40 }}