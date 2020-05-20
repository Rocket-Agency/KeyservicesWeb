import React, {useState} from "react";
import DatePicker from "react-datepicker";
import Grid from '@material-ui/core/Grid';
 
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerDeparture() {
    const [startDate, setStartDate] = useState(new Date("2020/05/28"));
    const [endDate, setEndDate] = useState(new Date("2020/05/28"));
    return (
        <>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label-info-annonce" >Date d'arrivée </div>      
            {/* <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              name="ad_starting_date"
              // defaultValue={values.ad_starting_date} 
            />  */}
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="d MMMM, yyyy h:mm aa"
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
                timeCaption="Heure"
                dateFormat="h:mm"
                name="ad_arrival_time"
                // defaultValue={values.ad_arrival_time} 
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
              name="ad_ending_date"
              // defaultValue={values.ad_ending_date} 
            />
          </Grid>
                            
          <Grid item xs={3}>
            <div className="label-info-annonce" >Heure de départ </div>  
            <DatePicker
                selected={endDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Heure"
                dateFormat="h:mm"
                name="ad_departure_time"
                // defaultValue={values.ad_departure_time} 
              />
          </Grid>
        </Grid>
        
      </>
    );
  };