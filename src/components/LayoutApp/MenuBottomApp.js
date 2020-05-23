import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { Container } from 'react-bootstrap';
import MapApp from './MapApp';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
});

export default function MenuBottomApp() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Container fluid>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Carte" selected icon={<MapIcon /> } />
          <BottomNavigationAction label="Accueil" selected icon={<HomeIcon />} exact to="/homepageApp" />
          <BottomNavigationAction label="Paramètres" selected icon={<SettingsIcon />} to="/settingsApp" />
        </BottomNavigation>
      </Container>
    </>
  );
}