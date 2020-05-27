import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TabTimeChoice from './TabTimeChoice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(16),
      },
  },
  rootTab: {
    flexGrow: 1,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Grid container spacing={5} className={classes.root}>

            <TabTimeChoice />

            {/* <Grid item sm={6} className={classes.root}>
                <Button variant="contained" color="primary" disableElevation > 
                        Matin
                </Button>
            </Grid>
            <Grid item  sm={6}  className={classes.root}>
                <Button variant="contained" color="primary" disableElevation>
                    Après-Midi
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <BasicDateTimePicker />
            </Grid> */}
        </Grid>
    </>
  );
}