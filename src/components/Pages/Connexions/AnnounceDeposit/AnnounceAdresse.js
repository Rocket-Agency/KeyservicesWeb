import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function AddressForm() {

  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>


      <Grid container spacing={3}>

        <Grid item xs={12} sm={2}>
          <TextField
            id="standard-number"
            label="Numéro de rue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>


        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="Nom_de_rue"
            name="Nom_de_rueom"
            label="Nom de rue"
            fullWidth
            autoComplete="street name"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

//     render() {
//         const { values, handleChange } = this.props;
//         return(
//             <div>
//                 <Container fluid className="pt-4 blocForm" >  
//                     <h2 className="title-form">Adresse de votre annonce</h2>
//                     <h2>
// 			            <p class="step-icon"><span>1</span></p>
// 			            <span class="step-text">Personal Info</span>
// 			        </h2>
  
//                     <Container fluid>
//                         <Row>
//                             <Col  xs={12} md={3} className="mt-5 pb-3">
//                                 <Form.Row>
//                                     <Form.Label className="label-info-generales" column sm={4}>N° de rue</Form.Label>
//                                     <Col md={6}>
//                                     <TextField
//                                         id="outlined-number"
//                                         label="Numéro de rue"
//                                         type="number"
//                                         InputLabelProps={{
//                                             shrink: true,
//                                         }}
//                                         variant="outlined"
//                                         />
//                                     </Col>
//                                 </Form.Row>     
//                             </Col>

//                             <Col  xs={12} md={4} className="mt-5 pb-3">
//                                 <Form.Row>
//                                     <Form.Label className="label-info-generales" column sm={4}>Type de rue</Form.Label>


//                                     <Col>
//                                         {/* <TextField
//                                             required id="standard-required"
//                                             label="Entrez votre prénom"
//                                             onChange={handleChange('first_name')}
//                                             defaultValue={values.first_name}
//                                             variant="outlined"
//                                             fullWidth
//                                             size="small"
//                                         /> */}
//                                         <div>Liste type de rue => rue, allée, boulevard, etc...</div>
//                                     </Col>
//                                 </Form.Row>  
//                             </Col>
//                             <Col  xs={12} md={4} className="mt-5 pb-3">
//                                 <Form.Row>
//                                     <Form.Label className="label-info-generales" column sm={4}>Nom de rue</Form.Label>
//                                     <Col>
//                                         <TextField
//                                             type="text" 
//                                             onChange={handleChange('tel')} 
//                                             defaultValue={values.tel} 
//                                             pattern="^\d{4}-\d{3}-\d{4}$" 
//                                             required id="standard-required"
//                                             variant="outlined"
//                                             fullWidth
//                                             size="small"
//                                             label="Nom de rue"
//                                         />
//                                     </Col>
//                                 </Form.Row>     
//                             </Col>
//                         </Row>
                
//                         <Row>


//                             <Col  xs={12} md={12} className="pb-3">
//                                 <Form.Row>
//                                     <Form.Label className="label-info-generales" column sm={2}>Information complémentaire</Form.Label>
//                                         <Col>
//                                             <TextField
//                                                 type="text" 
//                                                 onChange={handleChange('tel')} 
//                                                 defaultValue={values.tel} 
//                                                 pattern="^\d{4}-\d{3}-\d{4}$" 
//                                                 required id="standard-required"
//                                                 variant="outlined"
//                                                 fullWidth
//                                                 size="small"
//                                                 label="Bat"
//                                             />
//                                         </Col>
//                                 </Form.Row>     
//                             </Col>
//                             <br />
//                         </Row>
//                         <Row xs={12} md={12} className="d-flex justify-content-center pt-3 pb-3">
//                             <Button
//                                 color="primary"
//                                 variant="contained"
//                                 onClick={this.continue}
//                                 aria-label="Continuer"
//                                 >Continuer
//                             </Button>
//                         </Row>
//                     </Container>
//                 </Container>
//             </div>
//         )
//     }
// }