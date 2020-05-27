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
            }
        }
    
        componentDidMount(){
            const config = {
                headers: {
                  'x-access-token': this.props.token
                }
              }
              axios.get(`http://localhost:3001/photo/getPhotoByUserId/`+ this.props.userid)
              .then(res => {
                this.setState( { photo_url : res.data.photo_url} );
              })
          
              axios.get(`http://localhost:3001/api/user/`+ this.props.userid, config)
                .then(res => {
                  this.setState( { user_first_name : res.data.user_first_name});
                  this.setState( { user_last_name: res.data.user_last_name });
                  this.setState( { users : res.data });
                })
                this.forceUpdate();
            }

    render(){
        return (
            <div>
                <Container >
                    <Row className="d-flex justify-content-center">
                        <HeaderApp />
                    </Row> 
                </Container>
                
                <Container>
                     <Row>
                        <Col md={12} className="welcome-message">
                            <h1> Bienvenue {this.state.user_first_name}  et Prénom sur l'application Keyservices Gestion</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default HomepageApp;