import React, {Component} from 'react';
import '../../css/Dashboard.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MaterialTable from 'material-table';
// import { Link } from 'react-router-dom';
import Img from 'react-cool-img';
import ImgDefaultAvatar from '../../ImagesPlaceholder/100.png';
import { Col, Row, Form, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import MonCompte from './MonCompte';


class ProfileTabs extends Component {
state = {
    activeIndex: 0,
    userid: this.props.location.state.user.id,
    accessToken: this.props.location.state.user.accessToken,
    group: this.props.location.state.user.groups,
    users: "",
    usersCollection: [],
    form: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      gender: null,
      language: [],
      country: null,
      zipCode: ""
    }
  }

  componentDidMount() {
    const config = {
      headers: {
        'x-access-token': this.state.accessToken
      }
    }
    axios.get(`http://localhost:3001/api/user/`+ this.state.userid, config)
      .then(res => {
        const users = res.data;
        this.setState( { users } );
      })
    axios.get(`http://localhost:3001/api/users/`, config)
      .then(res => {
        const usersCollection = res.data;
        this.setState( { usersCollection } );
      })
  }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })
  render() {
    const { activeIndex } = this.state;
    const { group } = this.state;
    const { form } = this.state;
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <VerticalTabs
          value={activeIndex}
          onChange={this.handleChange}
        >
          <MyTab label='Mon compte' />
          <MyTab label='Information location' />
          <MyTab label='Calendrier' />
          {group == 'GROUP_ADMIN' ? <MyTab label='Liste utilisateurs' />: null }
        </VerticalTabs>

        { activeIndex === 0 && <TabContainer>

      <Container fluid>
          {/* <h1 className="mt-2 text-center">Bienvenue  {this.state.users.user_first_name} dans votre Espace</h1> */}

          <h2 className="mt-2r">Mon Compte</h2>
          <hr/>
            <div className="row">
              <div className="col-md-3">
                  <div className="text-center">
                    <Img
                      placeholder={ImgDefaultAvatar} 
                      class="avatar img-circle mt-3"
                      alt="avatar" 
                      />
                      <h6>Upload a different photo...</h6>
                     
                      <input type="file" class="form-control"/>
                  </div>
              </div>

              <div class="col-md-9 personal-info mt-3">
              <h3>Information personnel</h3>

              <form class="form-horizontal" role="form">

                   <Container fluid>
                        <Row>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Nom :</Form.Label>

                                    <Col xs={12} md={6} className="informations">
                                      {this.state.users.user_last_name}
                                    </Col>
                                </Form.Row>  
                            </Col>
                            <Col  xs={12} md={6} className="pb-3">
                                <Form.Row>
                                    <Form.Label className="label-info-generales" column sm={4}>Prénom :</Form.Label>

                                    <Col xs={12} md={6} className="informations">
                                      {this.state.users.user_first_name}
                                    </Col>
                                </Form.Row>     
                            </Col>
                        </Row>
                  </Container>

                  {/* <div class="form-group">
                          
                    <div class="col-xs-6">
                      <label for="first_name"><h4>Prénom</h4></label>
                        <input 
                          type="text" 
                          class="form-control" 
                          name="first_name" 
                          id="first_name" 
                          placeholder="Prénom" 
                          title="entrer votre Prénom"
                        />
                      </div>
                    </div> */}
                  {/* <label class="col-lg-3 control-label">Prénom:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value="Jane"/>
                  </div>
                </div> */}
                {/* <div class="form-group">
                  <label class="col-lg-3 control-label">Last name:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value="Bishop"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Company:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value=""/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Email:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value="janesemail@gmail.com"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">Password:</label>
                  <div class="col-md-8">
                    <input class="form-control" type="password" value="11111122333"/>
                  </div>
                </div> */}

                {/* <div class="form-group">
                  <label class="col-md-3 control-label"></label>
                  <div class="col-md-8">
                    <input type="button" class="btn btn-primary" value="Save Changes"/>
                    <span></span>
                    <input type="reset" class="btn btn-default" value="Cancel"/>
                  </div>
                </div> */}

              </form>
           </div>
          </div>
      </Container>
          
        </TabContainer> }

        { activeIndex === 1 &&<TabContainer>
          Information location
         </TabContainer> }

         { activeIndex === 2 &&<TabContainer>
         Calendrier
         </TabContainer> }

        { activeIndex === 3 && <TabContainer style={{ minWidth: "100%" }}>
            <MaterialTable
              columns={[
                { title: "Id", field: "user_id", editable: 'never'},
                { title: "Prénom", field: "user_first_name" },
                { title: "Nom", field: "user_last_name" },
                { title: "Email", field: "user_email"},
                { title: "Password", field: "user_password", show: false},
                { title: "Birthay", field: "user_date_of_birth"},
                { title: "Sexe", field: "user_sexe"},
                { title: "Photo", field: "user_photo"},
                { title: "Adresse", field: "user_adresse_txt"}
              ]}
              data={this.state.usersCollection}
              title="Liste d'utilisateurs"
              editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                const data = this.state.usersCollection;
                                const config = {
                                  headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                  }
                                }
                                data.push(newData);
                                axios.post("http://localhost:3001/api/auth/signup",
                                {
                                    first_name: newData.user_first_name,
                                    last_name: newData.user_last_name,
                                    birth: newData.user_date_of_birth,
                                    sexe: newData.user_sexe,
                                    photo: newData.user_photo,
                                    email: newData.user_email,
                                    password: newData.user_password,
                                    adresse: newData.user_adresse_txt
                                },
                                config
                                )
                                this.setState({ data }, () => resolve());
                            }
                            resolve();
                        }, 1000);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                const data = this.state.usersCollection;
                                const index = data.indexOf(oldData);
                                data[index] = newData;
                                console.log(newData);
                                const config = {
                                  headers: {
                                    'x-access-token': this.state.accessToken
                                  }
                                }
                                axios.put("http://localhost:3001/api/user/update/" + newData.user_id ,
                                {
                                  user_first_name: newData.user_first_name,
                                  user_last_name: newData.user_last_name,
                                  user_date_of_birth: newData.user_date_of_birth,
                                  user_sexe: newData.user_sexe,
                                  user_photo: newData.user_photo,
                                  user_email: newData.user_email,
                                  user_password: newData.user_password,
                                  user_adresse_txt: newData.user_adresse_txt
                                }, config)                
                                this.setState({ data }, () => resolve());
                            }
                            resolve();
                        }, 1000);
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                let data = this.state.usersCollection;
                                const index = data.indexOf(oldData);
                                data.splice(index, 1);
                                const config = {
                                  headers: {
                                    'x-access-token': this.state.accessToken
                                  }
                                }
                                axios.delete("http://localhost:3001/api/user/delete/" + oldData.user_id , config) 
                                this.setState({ data }, () => resolve());
                            }
                            resolve();
                        }, 1000);
                    })
            }}
            />
        </TabContainer> }
    </div>
    )
  }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

const MyTab = withStyles(theme => ({
  selected: {
    color: 'tomato',
    borderBottom: '2px solid tomato'
  }
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" className="tabDashboard" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

export default ProfileTabs; 