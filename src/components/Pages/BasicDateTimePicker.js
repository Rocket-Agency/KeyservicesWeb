import React, { Fragment, useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { Container, Row,  Col } from 'react-bootstrap';

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DateTimePicker
        label="DateTimePicker"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default BasicDateTimePicker;