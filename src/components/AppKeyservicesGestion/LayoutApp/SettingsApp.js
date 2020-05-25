import React, {Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export class SettingsApp extends Component {


    render(){
        return (
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="d-flex justify-content-center"><h4>PARAMÉTRAGE</h4></Col>
                    </Row>




                </Container>
                <Container>

                </Container>
                <Grid 
                            container
                            direction="column"
                            justify="space-evenly"
                            alignItems="center" spacing={3}>
                            <Grid item xs={6} sm={3}>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <div>Langue</div>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <div>Contraste</div>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <div>Profil</div>
                                    {/* <Redirect to='/profilUserConcierge'/>; */}
                                    </Col>
                                </Row>                      
                            </Grid>
                        </Grid>
            </div>

        )
    }
}

export default SettingsApp;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function FullWidthGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>xs=12 sm=6</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>xs=12 sm=6</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }