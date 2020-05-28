import React from 'react';
import '../../../css/MenuApp.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import { Container, Row } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
  bottomNavigationAction : {
    border: '1px solid black',
    color: '#49173B', 
    "&:hover": {
      background: '#49173B',
      color: '#fff',
    },
    "&:active": {
      background: '#49173B',
      color: '#fff',
    },
    "&:focus": {
      background: '#49173B',
      color: '#fff',
    },
    '&:selected' : {
      background: '#49173B',
      color: '#fff',
    },
  },
});


export default function MenuBottomApp() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);
  const classes = useStyles();
  
  return (
    <>
      <Container fluid  >
        <Row>
          <BottomNavigation value={value} onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction className={classes.bottomNavigationAction} fontSize="large" label="Accueil"  value="/homepageApp"  icon={<HomeIcon className="Homepage_App" />} component={Link} to="/homepageApp"  />
            <BottomNavigationAction className={classes.bottomNavigationAction} fontSize="large" label="Carte"  value="/mapApp"  icon={<MapIcon className="Map_App" />} component={Link} to="/mapApp"  />
            <BottomNavigationAction className={classes.bottomNavigationAction} fontSize="large" label="Tâches"  value="/taskApp" icon={<ListIcon className="Tasks_App"/>} component={Link} to="/tasksApp" />
            <BottomNavigationAction className={classes.bottomNavigationAction} fontSize="large" label="Paramètres" valut="/settingApp"  icon={<SettingsIcon className="Settings_App"/>} component={Link} to="/settingsApp" />
          </BottomNavigation>
        </Row>

      </Container>
    </>
  );
}

// fontSize="large"
// style={{ fontSize: 40 }}