import React, {Component,  useState} from 'react';
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
import { Col, Row, Container } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import AnnounceStepperForm from './Connexions/DepositAnnounce/AnnounceStepperForm';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import BasicDateTimePicker from './Schedule';
import Alert from 'react-bootstrap/Alert';


// function MessageValidateUpdate() {
//   const [show, setShow] = useState(true);

//   if (show) {
//     return (
//       <Alert variant="primary" onClose={() => setShow(true)} dismissible>
//         <Alert.Heading>Votre profil a été mise à jour</Alert.Heading>
//       </Alert>
//     );
//   }
//   return <div className="style{{display : none}}"></div>;
// }


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
    passwordcurrent: "",
    passwordnew: "",
    selectedDate:  new Date(),
    handleDateChange: new Date(),
    addressCollection: [],
    selectedFile:[],
    showingAlertProfil: false,
    showingAlertPassword: false
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
  this.handleSubmitPhoto = this.handleSubmitPhoto.bind(this);

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
    
    axios.get(`http://localhost:3001/photo/getPhotoByUserId/`+ this.userid)
    .then(res => {
      this.setState( { photo_url : res.data.photo_url} );
    })

    axios.get(`http://localhost:3001/api/user/`+ this.userid, config)
      .then(res => {
        this.setState( { user_first_name : res.data.user_first_name});
        this.setState( { user_last_name: res.data.user_last_name });
        this.setState( { user_date_of_birth: res.data.user_date_of_birth});
        this.setState( { user_sexe : res.data.user_sexe});
        this.setState( { user_photo: res.data.user_photo});
        this.setState( { user_email : res.data.user_email});
        this.setState( { user_password : res.data.user_password});
        this.setState( { user_adresse_txt : res.data.user_adresse_txt});
        this.setState( { users : res.data });
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
        'x-access-token': this.token
      }
    }
    axios.put("http://localhost:3001/api/user/update/" + this.userid ,
    {
      user_first_name: this.state.user_first_name,
      user_last_name: this.state.user_last_name,
      user_date_of_birth: this.state.user_date_of_birth,
      user_sexe: this.state.user_sexe,
      user_email: this.state.user_email,
      user_adresse_txt: this.state.user_adresse_txt
    }, config)
    e.preventDefault();
  }

  handleSubmitPassword(e){
    axios.put("http://localhost:3001/api/user/update/password/" + this.userid ,
    {
      passwordcurrent: this.state.passwordcurrent,
      passwordnew: this.state.passwordnew,
    })
    e.preventDefault();
  }

  onChangePhotoHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  handleSubmitPhoto(e){
    const body = new FormData() 
    body.append('file', this.state.selectedFile)

    axios.put("http://localhost:3001/photo/updateUserPhoto/"+ this.userid,body);
    window.location.reload();
    e.preventDefault();
  }

  handleClickShowAlertProfil(onChange, showingAlertProfil) {
    if (onChange) {
      this.setState({
        showingAlertProfil: true
      });
      setTimeout(() => {
        this.setState({
          showingAlertProfil: false
        });
      }, 3000);
    }
  }

  handleClickShowAlertTest(){
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <strong>Succès!</strong> Les modifications de votre profil ont bien été enregistrer
        </Alert>
      );
    }
    return <div className="style{{display : none}}"></div>;
  }


  handleClickShowAlertPassword(onChange, showingAlertPassword) {
    if (onChange){
      this.setState({
        showingAlertPassword: true,
      });
      setTimeout(() => {
        this.setState({
          showingAlertPassword: false,
        });
      }, 3000);
    }
  }

  render() {
    const { activeIndex } = this.state;
    const { group } = this.state;
    const { saveImages } = this.state; 
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
              {this.group == 'GROUP_LOCATAIRE' || this.group == 'GROUP_ADMIN' ? <MyTab label='Information location' />   : null}      
              {this.group == 'GROUP_PROPRIETAIRE' || this.group == 'GROUP_ADMIN' ? <MyTab label='Créer une annonce ' /> : null}
              {this.group == 'GROUP_LOCATAIRE' || this.group == 'GROUP_ADMIN' ? <MyTab label='Prise de rendez-vous' /> : null} 
              {this.group == 'GROUP_LOCATAIRE' ? <MyTab label='Paiement des courses' /> : null} 
              {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste utilisateurs' /> : null }
              {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste de contacts' /> : null }
              {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste des annonces' /> : null }
              {this.group == 'GROUP_PROPRIETAIRE' || this.group == 'GROUP_ADMIN' ? <MyTab label='Mes annonces' /> : null}
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
                              src={this.state.photo_url}
                              className="avatar img-circle mt-3 mb-3"
                              alt="avatar" 
                            />
                            <h6></h6>
                          
                            <input type="file" className="form-control" onChange={this.onChangePhotoHandler}/>
                        </div>
                        <Col md={12} className="d-flex justify-content-center pt-5 pb-3">
                            <Button 
                              variant="contained"
                              color="primary"
                              type="submit"
                              endIcon={<EditIcon>send</EditIcon>}
                              onClick={this.handleSubmitPhoto}
                            >
                              Modifier ma photo
                            </Button>
                          </Col>    
                    </div>
                    
                    <div className="col-md-9 personal-info">

                    <Row className="d-flex justify-content-center">
                      <div className="mt-5 col-md-9">
                        <h3 className="mb-4">Information personnel</h3>

                        <form onSubmit={this.handleSubmit} noValidate autoComplete="off" >
                        <Grid container mt-3>
                          <Grid container item xs={12} md={12} spacing={3}>
                              <Grid item xs={12} md={6} lg={6} className="d-flex justify-content-center">
                                <TextField 
                                value={this.state.user_last_name} 
                                onChange={e => this.setState({user_last_name: e.target.value})} 
                                label="Nom" 
                                fullWidth
                                />
                              </Grid>
                              <Grid item xs={12} md={6} lg={6} className="d-flex justify-content-center">
                                <TextField 
                                  value={this.state.user_first_name} 
                                  onChange={e => this.setState({user_first_name: e.target.value})} 
                                  label="Prénom" 
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12} md={6} lg={6} className="d-flex justify-content-center">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    format="MM/dd/yyyy"
                                    value={this.state.user_date_of_birth}
                                    onChange={e => this.setState({user_date_of_birth: e.target.value})}
                                    KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                    }}
                                    fullWidth
                                  />
                                </MuiPickersUtilsProvider>
                              </Grid>
                              <Grid item xs={12} md={6} lg={6} className="d-flex justify-content-center">
                                <TextField 
                                  value={this.state.user_sexe} 
                                  onChange={e => this.setState({user_sexe: e.target.value})} 
                                  label="Sexe" 
                                  fullWidth
                                />
                              </Grid>
                              <Grid item xs={12} md={6} className="d-flex justify-content-center">
                                  <TextField 
                                    value={this.state.user_email} 
                                    onChange={e => this.setState({user_email: e.target.value})} 
                                    label="Email"
                                    fullWidth 
                                  />
                              </Grid>
                              <Grid item xs={12} md={6} lg={6} className="d-flex justify-content-center">
                                <TextField 
                                  value={this.state.user_adresse_txt} 
                                  onChange={e => this.setState({user_adresse_txt: e.target.value})} 
                                  label="Adresse" 
                                  fullWidth 
                                />
                              </Grid>
                          </Grid>
                        </Grid>

                        <Row>
                        <Col md={12} className="d-flex justify-content-center pt-5 pb-3">
                            <Button 
                              onClick={this.handleClickShowAlertProfil.bind(this)}
                              variant="contained"
                              color="primary"
                              type="submit"
                              endIcon={<EditIcon>send</EditIcon>}
                            >
                              Modifier mon profil
                            </Button>
                        </Col>
                        </Row>
                        <Row>
                            <Col className={`alert alert-success ${this.state.showingAlertProfil ? 'alert-shown' : 'alert-hidden'}`} >
                              <strong>Succès!</strong> Les modifications de votre profil ont bien été enregistré
                            </Col>
                        </Row>
                      </form>
                    </div>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <div className="mt-3 col-md-9">
                        <h3 className="mb-0">Modifier mot de passe</h3>
                        <form onSubmit={this.handleSubmitPassword} noValidate autoComplete="off">
                          <Grid container mt-3>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12} md={6} lg={6} className="d-flex justify-content-center">
                                  <TextField 
                                    value={this.state.passwordcurrent} 
                                    onChange={e => this.setState({passwordcurrent: e.target.value})} 
                                    label="Ancien mot de passe" 
                                    fullWidth
                                  />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} className="d-flex justify-content-center">
                                  <TextField 
                                    value={this.state.passwordnew} 
                                    onChange={e => this.setState({passwordnew: e.target.value})} 
                                    label="Nouveau mot de passe" 
                                    fullWidth
                                  />
                                </Grid>
                            </Grid>
                          </Grid>

                          <Row>
                          <Col md={12} className="d-flex justify-content-center pt-5 pb-3">
                              <Button 
                                onClick={this.handleClickShowAlertPassword.bind(this)}
                                variant="contained"
                                color="primary"
                                type="submit"
                                endIcon={<EditIcon>send</EditIcon>}
                              >
                                Modifier mot de passe
                              </Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col className={`alert alert-success ${this.state.showingAlertPassword ? 'alert-shown' : 'alert-hidden'}`}>
                            <strong>Succès!</strong> Votre mot de passe a bien été modifié, veuillez vérifier votre email !
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Row>

                  </div>
                </div>
            </Container>

            
          </TabContainer> }
            { activeIndex === 1 && this.group === 'GROUP_ADMIN' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Information location</BreadcrumbItem>
              <h1>Information location</h1>
            </TabContainer> }

            { activeIndex === 2 && this.group == 'GROUP_ADMIN' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Création d'une annonce</BreadcrumbItem>
                <h1>Création d'une annonce</h1>
                  <AnnounceStepperForm />
            </TabContainer> }

            { activeIndex === 3 && this.group === 'GROUP_ADMIN' &&<TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Prise de rendez-vous</BreadcrumbItem>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <BasicDateTimePicker />
                </MuiPickersUtilsProvider>
            </TabContainer> }

            { activeIndex === 4 && this.group === 'GROUP_ADMIN' && <TabContainer style={{ minWidth: "100%" }}>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Liste d'utilisateurs</BreadcrumbItem>
              <h1>Liste d'utilisateurs</h1>
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
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Liste de contacts</BreadcrumbItem>
                <h1>Liste de contacts</h1>
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

            { activeIndex === 6 && this.group == 'GROUP_ADMIN' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Liste des annonces</BreadcrumbItem>
                <h1>Liste des annonces</h1>
                <MaterialTable
                  columns={[
                    { title: 'Update' },
                    { title: 'Id de l\'annonce' },
                    { title: 'Nom', field: 'contact_first_name' },
                    { title: 'Prénom', field: 'contact_last_name' },
                    { title: 'Titre de l\'annonce', field: 'contact_email' },
                    { title: 'Addresse de l\'annonce', field: 'contact_email' },
                    { title: 'Date de début publication', field: 'contact_object'},
                    { title: 'Fin de publication', field: 'contact_message'}
                  ]}
                  data={this.state.contactsCollection}
                  title="Liste des annonces"
                />
            </TabContainer> }

            { activeIndex === 7 && this.group == 'GROUP_ADMIN' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem ></BreadcrumbItem>
                <h1>Gestion comptabilité</h1>

                />
            </TabContainer> }

            { activeIndex === 1 && this.group == 'GROUP_PROPRIETAIRE' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Création d'une annonce</BreadcrumbItem>
                <h1>Création d'une annonce</h1>
                  <AnnounceStepperForm />
            </TabContainer> }
          
            { activeIndex === 2 && this.group == 'GROUP_PROPRIETAIRE' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Mes annonces</BreadcrumbItem>
                <h1>Mes annonces</h1>
                <MaterialTable
                  columns={[
                    { title: 'Update' },
                    { title: 'Titre de l\'annonce', field: 'contact_email' },
                    { title: 'Addresse de l\'annonce', field: 'contact_email' },
                    { title: 'Date de début publication', field: 'contact_object'},
                    { title: 'Fin de publication', field: 'contact_message'},
                    { title: 'Supprimer', field: 'contact_email' },
                  ]}
                  data={this.state.contactsCollection}
                  title="Liste des messages"
                />
            </TabContainer> }

            { activeIndex === 1 && this.group === 'GROUP_LOCATAIRE' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Information location</BreadcrumbItem>
                <h1>Information location</h1>
            </TabContainer> }

            { activeIndex === 2 && this.group === 'GROUP_LOCATAIRE' &&<TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Prise de rendez-vous</BreadcrumbItem>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <h1>Prise de rendez-vous</h1>
                  <BasicDateTimePicker />
                </MuiPickersUtilsProvider>
              </TabContainer> }

              { activeIndex === 3 && this.group === 'GROUP_LOCATAIRE' &&<TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Paiement des courses</BreadcrumbItem>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <h1>Paiement de vos courses</h1>
                </MuiPickersUtilsProvider>
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