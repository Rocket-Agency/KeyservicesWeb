import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container, Row,  Col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BasicDateTimePicker from './../../BasicDateTimePicker';

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
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={5} className={classes.root}>
            <Grid item xs={12} sm={6} className={classes.root}>
                <Button variant="contained" color="primary" disableElevation > 
                        Matin
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.root}>
                <Button variant="contained" color="primary" disableElevation>
                    Après-Midi
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <BasicDateTimePicker />
            </Grid>


        </Grid>
    </>
  );
}