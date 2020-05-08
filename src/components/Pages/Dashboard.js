import React, {Component} from 'react';
import '../../css/Dashboard.scss';
import { BreadcrumbItem } from '../../index';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import MaterialTable from 'material-table';
import Img from 'react-cool-img';
import ImgDefaultAvatar from '../../ImagesPlaceholder/100.png';
import { Col, Row, Container } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
// import Announce from './Connexions/AnnounceDeposit/Announce';
import AnnounceaLinearStepper from './Connexions/AnnounceDeposit/AnnounceaLinearStepper';
import AnnounceVerticalStepper from './Connexions/AnnounceDeposit/AnnounceVerticalStepper';

class ProfileTabs extends Component {
constructor(props) {
  super(props);
  this.state = {
    activeIndex: 0,
    userid: '',
    accessToken: '',
    group: '',
    users: "",
    usersCollection: [],
    contactsCollection: [],
    user_first_name: "",
    user_last_name: "",
    user_date_of_birth: "",
    user_sexe: "",
    user_photo: "",
    user_email: "",
    user_password: "",
    user_adresse_txt: "",
    
  }

  this.userid = '';
  this.token = '';
  this.group = '';

}

  componentDidMount() {
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
    const config = {
      headers: {
        'x-access-token': this.token
      }
    }
    axios.get(`http://localhost:3001/api/user/`+ this.userid, config)
      .then(res => {
        const users = res.data;
        const user_first_name = res.data.user_first_name;
        const user_last_name = res.data.user_last_name;
        const user_date_of_birth = res.data.user_date_of_birth;
        const user_sexe = res.data.user_sexe;
        const user_photo = res.data.user_photo;
        const user_email = res.data.user_email;
        const user_password = res.data.user_password;
        const user_adresse_txt = res.data.user_adresse_txt;
        this.setState( { user_first_name});
        this.setState( { user_last_name });
        this.setState( { user_date_of_birth});
        this.setState( { user_sexe});
        this.setState( { user_photo});
        this.setState( { user_email});
        this.setState( { user_password});
        this.setState( { user_adresse_txt});
        this.setState( { users });
      })
    axios.get(`http://localhost:3001/api/users/`, config)
      .then(res => {
        const usersCollection = res.data;
        this.setState( { usersCollection } );
      })
    axios.get('http://localhost:3001/api/contacts')
      .then (res => {
        const contactsCollection = res.data;
        this.setState( {contactsCollection});
      })
  }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })

  handleSubmit(e) {
    const config = {
      headers: {
        'x-access-token': this.state.accessToken
      }
    }
    axios.put("http://localhost:3001/api/user/update/" + this.state.users.user_id ,
    {
      /*user_first_name: user_first_name,
      user_last_name: user_last_name,
      user_date_of_birth: user_date_of_birth,
      user_sexe: user_sexe,
      user_email: user_email,
      user_adresse_txt: user_adresse_txt*/
    }, config)

    e.preventDefault();
  }
  
  render() {
    const { activeIndex } = this.state;
    const { group } = this.state;
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
      <Container fluid>
        <Row>
          <Col xs={12} md={2} >
        <VerticalTabs
          value={activeIndex}
          onChange={this.handleChange}
        >    
          <MyTab label='Mon compte' />           
          <MyTab label='Information location' />      
           <MyTab label='Créer une annonce ' />
           <MyTab label='Prise de rendez-vous' /> 
          {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste utilisateurs' /> : null }
          {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste de contacts' /> : null }

        </VerticalTabs>
          </Col>

          <Col xs={12} md={10} >
        { activeIndex === 0 && <TabContainer>

        <Container fluid>
          <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
          <BreadcrumbItem >Mon compte</BreadcrumbItem>

          <h2 className="mt-2r">Mon Compte</h2>
          <hr/>
            <div className="row">
              <div className="col-md-3">
                  <div className="text-center">
                    <Img
                        placeholder={ImgDefaultAvatar} 
                        className="avatar img-circle mt-3 mb-3"
                        alt="avatar" 
                      />
                      <h6>Upload a different photo...</h6>
                     
                      <input type="file" className="form-control"/>
                  </div>
              </div>

              <div className="col-md-9 personal-info">
              <h3>Information personnel</h3>

                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                
                  <Grid container mt-3>
                    <Grid container item xs={12} spacing={3}>
                      <Grid item xs={12} md={6} className="d-flex justify-content-center">
                        <TextField value={this.state.user_last_name} onChange={e => this.setState({user_last_name: e.target.value})} label="Nom" />
                      </Grid>
                      <Grid item xs={12} md={6} className="d-flex justify-content-center">
                        <TextField value={this.state.user_first_name} onChange={e => this.setState({user_first_name: e.target.value})} label="Prénom" />
                      </Grid>
                      <Grid item xs={12} md={6} className="d-flex justify-content-center">
                        <TextField value={this.state.user_date_of_birth} onChange={e => this.setState({user_date_of_birth: e.target.value})} label="Date de naissance" />
                      </Grid>
                      <Grid item xs={12} md={6} className="d-flex justify-content-center">
                        <TextField value={this.state.user_sexe} onChange={e => this.setState({user_sexe: e.target.value})} label="Sexe" />
                      </Grid>
                      <Grid item xs={12} md={6} className="d-flex justify-content-center">
                        <TextField value={this.state.user_email} onChange={e => this.setState({user_email: e.target.value})} label="Email" />
                      </Grid>
                      <Grid item xs={12} md={6}  className="d-flex justify-content-center">
                        <TextField value={this.state.user_adresse_txt} onChange={e => this.setState({user_adresse_txt: e.target.value})} label="Adresse" />
                      </Grid>
                    </Grid>
                  </Grid>

                    <Row>
                      <Col md={12} className="d-flex justify-content-center pt-5 pb-3">
                        <Button 
                          variant="contained"
                          color="primary"
                          type="submit"
                          endIcon={<EditIcon>send</EditIcon>}
                        >
                          Modifier
                        </Button>
                      </Col>
                    </Row>
                </form>
            </div>
          </div>
      </Container>
          
        </TabContainer> }

        { activeIndex === 1 &&<TabContainer>
          <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
          <BreadcrumbItem >Information location</BreadcrumbItem>
          Information location
         </TabContainer> }

         { activeIndex === 2 &&<TabContainer>
          <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
          <BreadcrumbItem >Création d'une annonce</BreadcrumbItem>
          <h1>Création d'une annonce</h1>
            <AnnounceaLinearStepper/>
         </TabContainer> }

         { activeIndex === 3 &&<TabContainer>
          <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
          <BreadcrumbItem >Calendrier</BreadcrumbItem>
            Calendrier
         </TabContainer> }

        { activeIndex === 4 && <TabContainer style={{ minWidth: "100%" }}>
          <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
          <BreadcrumbItem >Liste d'utilisateurs</BreadcrumbItem>
            <MaterialTable
              columns={[
                {
                  title: "Photo", field: "user_photo",
                  // render: rowData => (
                  //   <img
                  //     style={{ height: 36, borderRadius: '50%' }}
                  //     src={rowData.avatar}
                  //   />
                  // ),
                },
                { title: "Id", field: "user_id", editable: 'never'},
                { title: "Prénom", field: "user_first_name" },
                { title: "Nom", field: "user_last_name" },
                { title: "Email", field: "user_email"},
                { title: "Birthay", field: "user_date_of_birth"},
                { title: "Sexe", field: "user_sexe"},
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
            {activeIndex === 5 && <TabContainer>
                <MaterialTable
                  columns={[
                    { title: 'Nom', field: 'contact_first_name' },
                    { title: 'Prénom', field: 'contact_last_name' },
                    { title: 'Email', field: 'contact_email' },
                    { title: 'Objet', field: 'contact_object'},
                    { title: 'Message', field: 'contact_message'}
                  ]}
                  data={this.state.contactsCollection}
                  title="Liste des messages"
                />
            </TabContainer> }
          </Col>
        </Row>
      </Container> 
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
    color: '#49173B',
    borderBottom: '2px solid #49173B',
  },
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" className="tabDashboard" style={{ paddingTop: 24, paddingRight: 0 }}>
      {props.children}
    </Typography>
  );
}

export default ProfileTabs; 