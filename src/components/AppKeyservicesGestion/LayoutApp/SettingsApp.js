import React from 'react';
import './../../../css/SettingsApp.scss';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Col, Container, Row, Form} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
// import FormSignalIssues from './SignalIssues';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
  },

MainTitle: {
    fontSize: '24px',
    fontWeight: 'boLd',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
},

MuiListItem: {
    paddingTop: '40px',
    paddingBottom: '40px',
    textAlign: 'center',
    maxWidth: '360px',
    justifyContent: 'center',
  },

Marges: {
    marginTop: '50px',
    marginBottom: '50px',
    paddingTop: '40px',
    paddingBottom: '40px',
    textAlign: 'center',
    maxWidth: '360px',
    justifyContent: 'center',
},

buttonLangues : {
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #49173B',
    label: {
        width: "100%",
    },
},

buttonProfil : {
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #49173B',
    "&:hover": {
        background: '#49173B',
        color: '#fff',
      },
},

rectangleWhite: {
    width: '108px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
},

rectangleGrey: {
    width: '108px',
    height: '30px',
    background: '#808080',
    display: 'inline-block'
},

rectangleBlack: {
    width: '108px',
    height: '30px',
    background: '#000000',
    display: 'inline-block'
},

linkIssues: {
    color: 'red',
    backgroundColor: 'white',
    width: '100%',
    "&:hover": {
        color: 'red',
        backgroundColor: 'white',
    },
},

MuiDialogContent: {
    width: '400px',
},   

MuiDialogActions: {
    justifyContent: 'space-around;',
},

buttonRetour : {
    backgroundColor: '#ffffff',
    border: '1px solid #49173B',
    display: 'flex',
},

buttonEnvoyer: {
    backgroundColor: '#87E990',
    display: 'flex',
    color: '#ffffff',
},

}));

export default function SwitchListSecondary() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
        <Container>
            <Row>
                <Col className="d-flex justify-content-center" >
                    <List subheader={<ListSubheader>PARAMÈTRE</ListSubheader>} className={classes.MuiListSubheader}>
                        <ListItem className={classes.Marges}>
                            <ListItemIcon>
                                    <LanguageIcon />
                            </ListItemIcon>
                            <div className="d-flex justify-content-center">
                                <Button className={classes.buttonLangues} type="button"  href="#">Français</Button> 
                            </div>
                        </ListItem>

                        <ListItem className={classes.MuiListItem}>
                            <List component="nav" aria-label="main contrast brightness">
                                    <div className={classes.rectangleWhite} />
                                    <div className={classes.rectangleGrey} />
                                    <div className={classes.rectangleBlack} />
                            </List>
                        </ListItem>
                        <ListItem className={classes.MuiListItem}>
                            <Button  className={classes.buttonLangues} variant="contained" className="profilButton" color="primary" href="/profilUserConcierge" >
                                Profil
                            </Button>
                        </ListItem>

                        <ListItem className={classes.Marges}>
                        <Button  className={classes.linkIssues}  variant="contained" onClick={handleClickOpen} >
                            Signaler
                        </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                            <DialogTitle id="form-dialog-title">Signaler un problème</DialogTitle>
                            <DialogContent className={classes.MuiDialogContent}>
                            <DialogContentText>
                            Adresse email
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                // label="Email Address"
                                type="email"
                                fullWidth
                            />
                            </DialogContent>
                            <DialogContent>
                            <DialogContentText>
                            Votre message
                            </DialogContentText>
                            <TextField
                                id="outlined-multiline-static"
                                // label="Multiline"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />

                            </DialogContent>
                            <DialogActions className={classes.MuiDialogActions} >
                            <Button className={classes.buttonRetour} onClick={handleClose} color="primary">
                                Retour
                            </Button>

                            <button className="applicationConnexionEnvoyer" aria-label="Se connecter" onClick={handleClose}> 
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Envoyer</span>
                            </button>                           
                            </DialogActions>
                        </Dialog>
                        </ListItem>
                    </List>
                </Col>
            </Row>
        </Container>
    </>
  );
}