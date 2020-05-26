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


const useStyles = makeStyles((theme) => ({
root: {
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

LinkIssues: {
    color: 'red',
    backgroundColor: 'white',
    width: '100%',
    "&:hover": {
        color: 'red',
        backgroundColor: 'white',
        width: '100%',
    },
},

}));

export default function SwitchListSecondary() {
  const classes = useStyles();

  return (
      <>
        <Container>
            <Row>
                <Col className="d-flex justify-content-center" >
                    <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
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
                            <Button  className={classes.LinkIssues} variant="contained"  href="#" >
                                Signaler
                            </Button>
                        </ListItem>
                    </List>
                </Col>
            </Row>
        </Container>
    </>
  );
}