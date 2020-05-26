import React from 'react';
import './../../../css/SettingsApp.scss';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import { Col, Container, Row, Form} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
// import ParameterContraste from './ParameterContraste';


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
  },
button : {
    width: '100%',
    backgroundColor: '#49173B',
    border: 'transparent',
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
// rectangleWhite: {
//     width: '50px',
//     height: '50px',
//     border: '1px solid black',
//     display: 'inline-block;'
// },
// rectangleGrey: {
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'grey',
// },
// rectangleBlack: {
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'black',
// }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }


export default function SwitchListSecondary() {
  const classes = useStyles();

  return (
      <>
        <Container>
            <Row>
                <Col className="d-flex justify-content-center" >
                    <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
                        <ListItem className={classes.MuiListItem}>
                            <ListItemIcon>
                                    <LanguageIcon />
                            </ListItemIcon>
                            <div className="d-flex justify-content-center">
                                <Button className={classes.button} type="button"  href="#">Français</Button> 
                            </div>
                        </ListItem>
                        <ListItem className={classes.MuiListItem}>
                            <List component="nav" aria-label="main mailbox folders">
                                    <div className={classes.rectangleWhite} />
                                    <div className={classes.rectangleGrey} />
                                    <div className={classes.rectangleBlack} />
                            </List>
                        </ListItem>
                        <ListItem className={classes.MuiListItem}>
                            <Button variant="contained" color="primary" href="/profilUserConcierge" className={classes.Button}>
                                Profil
                            </Button>
                        </ListItem>
                        <ListItem className={classes.MuiListItem}>
                            <div className="d-flex justify-content-center contraste_blanc"> 
                                Signaler
                            </div>
                        </ListItem>
                    </List>
                </Col>
            </Row>
        </Container>
    </>
  );
}