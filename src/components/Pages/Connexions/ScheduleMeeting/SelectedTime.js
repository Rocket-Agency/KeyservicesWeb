import React, { Fragment, useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { Container, Row,  Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));


function BasicDateTimePicker() {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DateTimePicker
        label="DateTimePicker"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />

    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
    </Fragment>
  );
}

export default BasicDateTimePicker;






