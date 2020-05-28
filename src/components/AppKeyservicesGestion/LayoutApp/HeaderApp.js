import React, {Component} from 'react';
import axios from 'axios';
import '../../../css/HeaderApp.scss';
import '../../../css/LogoutApp.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoKeyservicesGestionTiny from '../../../ImagesPlaceholder/LogoKeyservicesGestion.png';
import ProgressiveImage from "react-progressive-graceful-image";

export class HeaderApp extends Component {
  constructor(props){
    super(props);
        this.state = {
            user_first_name: "",
            user_last_name: "",
            userid: '',
            accessToken: '',
            group: '',
        }
        this.userid = '';
            this.token = '';
            this.group = '';
    }

    componentDidMount(){
     
        this.userid = localStorage.getItem('id');
        this.token = localStorage.getItem('token');
        this.group = localStorage.getItem('group');
        const config = {
            headers: {
              'x-access-token': this.token
            }
          }
          
          axios.get(`http://localhost:3001/photo/getPhotoByUserId/`+ this.userid)
          .then(res => {
            this.setState( { photo_url : res.data.photo_url} );
          })
      
          axios.get(`http://localhost:3001/api/user/`+ this.userid, config)
            .then(res => {
              this.setState( { user_first_name : res.data.user_first_name});
              this.setState( { user_last_name: res.data.user_last_name });
              this.setState( { users : res.data });
            })
            this.forceUpdate();
    }

render(){

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
  const classes = useStyles;
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
                        <div className="userProfilInfo">
                            <ProgressiveImage  className="card-img react-log" 
                                    src={this.state.photo_url}
                            >
                            {src => <img src={src} width="90" alt="User Profile Image"  />}
                            </ProgressiveImage>
                            <br />
                            <Row className="d-flex justify-content-center" >
                                 {this.state.user_first_name}
                            </Row>
                            <Row className="d-flex justify-content-center" >
                                 {this.state.user_last_name}
                            </Row>
                        </div>
                    </Col>
    
                    <NavLink  className="d-flex justify-content-center align-items-center" to="/logoutApp">
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
}
export default HeaderApp;