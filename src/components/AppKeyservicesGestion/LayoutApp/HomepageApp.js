import React, {Component} from 'react';
import axios from 'axios';
import '../../../css/HomepageApp.scss';
import { Container, Row,  Col } from 'react-bootstrap';
import HeaderApp from './HeaderApp';

export class HomepageApp extends Component {
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
            if(localStorage.getItem('token') && localStorage.getItem('id') && localStorage.getItem('group')){
                this.userid = localStorage.getItem('id');
                this.token = localStorage.getItem('token');
                this.group = localStorage.getItem('group');
              }
              else{
                localStorage.setItem('token', this.props.location.state.user.accessToken)
                localStorage.setItem('id', this.props.location.state.user.id)
                localStorage.setItem('group', this.props.location.state.user.groups)
                this.userid = this.props.location.state.user.id;
                this.token = this.props.location.state.user.accessToken;
                this.group = this.props.location.state.user.groups;
              }

              if(this.group != 'GROUP_CONCIERGE'){
                  this.props.history.push('/loginConcierge');
                  localStorage.clear();
              }
              
            const config = {
                headers: {
                  'x-access-token': this.token
                }
              }
            //   axios.get(`http://localhost:3001/photo/getPhotoByUserId/`+ this.userid)
            //   .then(res => {
            //     this.setState( { photo_url : res.data.photo_url} );
            //   })
          
              axios.get(`http://localhost:3001/api/user/`+ this.userid, config)
                .then(res => {
                  this.setState( { user_first_name : res.data.user_first_name});
                  this.setState( { user_last_name: res.data.user_last_name });
                  this.setState( { users : res.data });
                })
                this.forceUpdate();
        }

    render(){
        const { 
            user_first_name , user_last_name
          } = this.state;
        const values = { user_first_name,user_last_name };

        console.log(this.token);
        return (
            <div>
                <Container >
                    <Row className="d-flex justify-content-center">
                        <HeaderApp 
                        values={values}
                        />
                    </Row> 
                </Container>
                
                <Container>
                     <Row>
                        <Col md={12} className="welcome-message">
                            <h1> Bienvenue {this.state.user_first_name} sur l'application Keyservices Gestion</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default HomepageApp;