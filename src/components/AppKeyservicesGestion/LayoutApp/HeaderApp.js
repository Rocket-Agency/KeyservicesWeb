// import React, {Component} from 'react';
// import '../../../css/LogoutApp.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
// import {Navbar, Nav} from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoKeyservicesGestionTiny from '../../../ImagesPlaceholder/LogoKeyservicesGestion.png';
import UserProfil from '../../../ImagesPlaceholder/userProfil.png';
// import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ProgressiveImage from "react-progressive-graceful-image";

// export class HomepageApp extends Component {


//     render(){
//         return (
//             <div>
//                 <Container>
//                     <Row className="d-flex justify-content-center">

//                     <a className="navbar-brand">
//                         <ProgressiveImage  className="card-img react-log" 
//                             src='./images/LogoKeyservicesGestion.png'
//                             placeholder={LogoKeyservicesGestionTiny} 
//                         >
//                             {src => <img src={src} width="100" alt="Logo Keyservices Gestion"  />}
//                         </ProgressiveImage>
//                     </a>

//                         <Nav className="ml-auto mr-auto d-flex justify-content-center align-items-center #navigation" role="navigation">
//                             <ProgressiveImage  className="card-img react-log" 
//                                 src='./images/userProfil.png'
//                                 placeholder={UserProfil} 
//                             >
//                                 {src => <img src={src} width="50" height="50" label="Nom et Prénom" alt="image utilisateur"  />}
//                             </ProgressiveImage>
                            
//                         </Nav>

                       
//                         <NavLink  className="d-flex justify-content-center align-items-center" className="btn_déconnexion" to="/loginConcierge">
//                             <ExitToAppIcon/>
//                             Déconnexion
//                         </NavLink>
//                     </Row> 
//                 </Container>
//             </div>

//         )
//     }
// }

// export default HomepageApp;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
                {/* <Col className="d-flex align-items-center"> */}
                    {/* <Row>
                        <div className="userProfilApp">
                            <ProgressiveImage  className="card-img react-log" 
                                src='./images/userProfil.png'
                                placeholder={UserProfil} 
                            >
                            {src => <img src={src} width="50" height="50" label="Nom et Prénom" alt="image utilisateur"  />}
                            </ProgressiveImage>
                        </div>
                        <div className="userProfilInfo">Nom et Prénom</div>
                    </Row> */}
                    {/* <Row>
                        <AccountCircleIcon />
                        <AccountCircleIcon name='pause' />
                            <br style={{margin: '0 20px'}} />
                            Nom et Prénom
                    </Row> */}
                {/* </Col> */}

                <Col  className="d-flex align-items-center" to="/loginConcierge">
                    <div className="userProfilInfo">
                        <AccountCircleIcon  fontSize="large" name='pause' />
                        <br/>
                        <Row className="d-flex justify-content-center" >
                             Nom
                        </Row>
                        <Row className="d-flex justify-content-center" >
                             Prénom
                        </Row>
                    </div>
                </Col>

                <NavLink  className="d-flex justify-content-center align-items-center" to="/loginConcierge">
                    <div className="btn_déconnexion">
                        <ExitToAppIcon className="iconDeconnexion" />
                        <br />
                        <div>Déconnexion</div>
                    </div>
                </NavLink>

            </Row>

        </Container>
    </div>
  );
}