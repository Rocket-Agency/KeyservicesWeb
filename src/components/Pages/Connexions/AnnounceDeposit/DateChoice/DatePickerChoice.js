import React, {useState} from "react";
import DatePicker from "react-datepicker";
import Grid from '@material-ui/core/Grid';
 
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerDeparture() {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    return (
        <>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label-info-annonce" >Date d'arrivée </div>      
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />              
          </Grid>
            
          <Grid item xs={3}>
            <div className="label-info-annonce" >Heure d'arrivée </div>  
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
          </Grid>
                            
          <Grid item xs={3}>  
            <div className="label-info-annonce" >Date de départ </div>  
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Grid>
                            
          <Grid item xs={3}>
            <div className="label-info-annonce" >Heure de départ </div>  
          </Grid>
        </Grid>
        
      </>
    );
  };