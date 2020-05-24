import React from 'react';
import '../../../css/LogoutApp.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoKeyservicesGestionTiny from '../../../ImagesPlaceholder/LogoKeyservicesGestion.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ProgressiveImage from "react-progressive-graceful-image";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HomepageApp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container>
            <Row>
                <Col variant="h6" className={classes.title}>
                    <a className="navbar-brand">
                        <ProgressiveImage  className="card-img react-log" 
                            src='./images/LogoKeyservicesGestion.png'
                            placeholder={LogoKeyservicesGestionTiny} 
                        >
                        {src => <img src={src} width="120" alt="Logo Keyservices Gestion"  />}
                        </ProgressiveImage>
                    </a>
                </Col>

                <Col  className="d-flex align-items-center" >
                    <NavLink className="userProfilInfo" to="/profilUserConcierge">
                        <AccountCircleIcon  style={{ fontSize: 40 }} name='InfoUser' />
                        <br/>
                        <Row className="d-flex justify-content-center" >
                             Nom
                        </Row>
                        <Row className="d-flex justify-content-center" >
                             Prénom
                        </Row>
                    </NavLink>
                </Col>

                <NavLink  className="d-flex justify-content-center align-items-center" to="/loginConcierge">
                    <div className="btn_déconnexion">
                        <ExitToAppIcon  fontSize="large" className="iconDeconnexion" />
                        <br />
                        <div>Déconnexion</div>
                    </div>
                </NavLink>

            </Row>

        </Container>
    </div>
  );
}