import React from 'react';
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
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
//   MuiListItem : {
//     size: 'lg',
//   },
}));


export default function SwitchListSecondary() {
  const classes = useStyles();

  return (
    <Container>
        <Row>
            <Col >
                <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
                    <ListItemIcon>
                        <BluetoothIcon />
                    </ListItemIcon>
                    <ListItem>
                        <div className="d-flex justify-content-center">
                            <Button class="Français" type="button" value="Français" href="#">Français</Button> 
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListItemText id="switch-list-label-contraste" primary="Contraste" />
                            <div className="d-flex justify-content-center contraste_blanc"> </div>
                            <div className="d-flex justify-content-center contraste_blanc"> </div>
                    </ListItem>
                    <ListItem>
                        <Button as="input" type="button" value="Profil" />{' '}
                    </ListItem>
                </List>
            </Col>
        </Row>
    </Container>

  );
}