import React, {Component, useState} from 'react';
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
import { KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import BasicDateTimePicker from './Schedule';
import ListUsers from './Molecule/ListUsers';
import ListContacts from './Molecule/ListContacts';
import MyProfil from './Molecule/MyProfil';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


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
    setShow: true
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
              {this.group == 'GROUP_LOCATAIRE' || this.group == 'GROUP_ADMIN' ? <MyTab label='Information location' />   : null}      
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
                    <Alert variant="success" onClose={() => this.setState({setShow: false})} dismissible>
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                      Aww yeah, you successfully read this important alert message. This example
                      text is going to run a bit longer so that you can see how spacing within an
                      alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to keep things nice
                      and tidy.
                    </p>
                  </Alert>
                  <h2 className="mt-2r">Mon Compte</h2>
                  {this.state.setShow == false ? <MyProfil token={this.token} userid={this.userid}/> : null }
                </Container>
              </TabContainer>
          }

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
                <ListUsers token={this.token}/>
            </TabContainer> }
            
            {activeIndex === 5 && <TabContainer>
              <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
              <BreadcrumbItem >Liste de contacts</BreadcrumbItem>
                <h1>Liste de contacts</h1>
                <ListContacts token={this.token}/>
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