import React, { useState } from "react";
import format from "date-fns/format";
import frLocale from "date-fns/locale/fr";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

class DateChoiceArrival extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "dd MMM yyyy", { locale: this.locale });
  }
}

function DatePickerDepartureArrival() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateChoiceArrival} locale={frLocale}>
      <DatePicker
        clearable
        // helperText="La date est correcte"
        format="dd MMM yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        clearLabel="vider"
        cancelLabel="annuler"
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePickerDepartureArrival;
