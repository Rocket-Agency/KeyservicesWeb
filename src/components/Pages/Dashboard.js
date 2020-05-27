import React, { Component } from 'react';
import '../../css/Dashboard.scss';

import { BreadcrumbItem } from '../../index';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { Col, Row, Container } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import AnnounceStepperForm from './Connexions/DepositAnnounce/AnnounceStepperForm';
import DateFnsUtils from '@date-io/date-fns'; 
import { MuiPickersUtilsProvider} from '@material-ui/pickers';
import ListUsers from './Molecule/ListUsers';
import ListContacts from './Molecule/ListContacts';
import MyProfil from './Molecule/MyProfil';
import Alert from 'react-bootstrap/Alert';
import ScheduleAppointment from './Connexions/ScheduleMeeting/ScheduleAppointment'
import TabTimeChoiceTest from './Connexions/ScheduleMeeting/ScheduleAppointment'


class ProfileTabs extends Component {
constructor(props) {
  super(props);
  this.state = {
    activeIndex: 0,
    userid: '',
    accessToken: '',
    group: '',
    selectedDate:  new Date(),
    handleDateChange: new Date(),
    setShow: true,
    show: true
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
    this.forceUpdate();
  }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state;
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
              {this.group == 'GROUP_LOCATAIRE' ? <MyTab label='Information location' />   : null}      
              {this.group == 'GROUP_PROPRIETAIRE' || this.group == 'GROUP_ADMIN' ? <MyTab label='Créer une annonce ' /> : null}
              {this.group == 'GROUP_LOCATAIRE' || this.group == 'GROUP_ADMIN' ? <MyTab label='Prise de rendez-vous' /> : null} 
              {this.group == 'GROUP_LOCATAIRE' ? <MyTab label='Paiement des courses' /> : null} 
              {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste utilisateurs' /> : null }
              {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste de contacts' /> : null }
              {this.group == 'GROUP_ADMIN' ? <MyTab label='Liste des annonces' /> : null }
              {this.group == 'GROUP_ADMIN' ? <MyTab label='Gestuon comptabilité' /> : null }
              {this.group == 'GROUP_PROPRIETAIRE'? <MyTab label='Mes annonces' /> : null}
            </VerticalTabs>
          </Col>

          <Col xs={12} md={10} >
            { activeIndex === 0 && 
            
              <TabContainer>
                <Container fluid>
                    <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                    <BreadcrumbItem >Mon compte</BreadcrumbItem>
                    <Alert variant="success" show={this.state.show} onClose={() => this.setState({setShow: false, show: false})} dismissible>
                    <Alert.Heading>Bienvenue !</Alert.Heading>
                    <p>
                     Ce site web est un projet étudiant !<br></br>
                     Aucun achat n'est requis pour accéder à nos services !
                    </p>
                    <hr />
                    <p>
                      Veuillez fermer cette fenêtre pour accéder à votre profil ! 
                    </p>
                  </Alert>
                  {this.state.setShow == false ? <MyProfil token={this.token} userid={this.userid}/> : null }
                </Container>
              </TabContainer>
          }

            { activeIndex === 1 && this.group == 'GROUP_ADMIN' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Création d'une annonce</BreadcrumbItem>
                <h1>Création d'une annonce</h1>
                  <AnnounceStepperForm />
            </TabContainer> }

            { activeIndex === 2 && this.group === 'GROUP_ADMIN' &&<TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Liste des rendez-vous</BreadcrumbItem>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  Liste des rendez-vous
                </MuiPickersUtilsProvider>
            </TabContainer> }

            { activeIndex === 3 && this.group === 'GROUP_ADMIN' && <TabContainer style={{ minWidth: "100%" }}>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Liste d'utilisateurs</BreadcrumbItem>
              <h1>Liste d'utilisateurs</h1>
                <ListUsers token={this.token}/>
            </TabContainer> }
            
            {activeIndex === 4 && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Liste de contacts</BreadcrumbItem>
                <h1>Liste de contacts</h1>
                <ListContacts token={this.token}/>
            </TabContainer> }

            { activeIndex === 5 && this.group == 'GROUP_ADMIN' && <TabContainer>
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

            { activeIndex === 6 && this.group == 'GROUP_ADMIN' && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem ></BreadcrumbItem>
                <h1>Gestion comptabilité</h1>
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
                  <h1 style={{textAlign: 'center'}}>Prise de rendez-vous</h1>
                  <TabTimeChoiceTest />
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