import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function MenuBottomApp() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Carte" icon={<MapIcon to="/mapApp" />}  />
      <BottomNavigationAction label="Accueil" icon={<HomeIcon />} exact to="/homepageApp" />
      <BottomNavigationAction label="Paramètres" icon={<SettingsIcon />} to="/settingsApp" />
    </BottomNavigation>
  );
}