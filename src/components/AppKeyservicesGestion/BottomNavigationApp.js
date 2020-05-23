import React from 'react';
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import BottomNavigation from '@bit/mui-org.material-ui.bottom-navigation';
import BottomNavigationAction from '@bit/mui-org.material-ui.bottom-navigation-action';
import RestoreIcon from '@bit/mui-org.material-ui-icons.restore';
import FavoriteIcon from '@bit/mui-org.material-ui-icons.favorite';
import LocationOnIcon from '@bit/mui-org.material-ui-icons.location-on';
 
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNavigationApp() {
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
			style={{width: 'auto', height: 'auto'}}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
