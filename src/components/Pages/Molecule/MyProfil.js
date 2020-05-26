import React,{ Component, useState} from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Img from 'react-cool-img';
import Alert from 'react-bootstrap/Alert';
import { Col, Row, Container } from 'react-bootstrap';
import { KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

class MyProfil extends Component {
    constructor(props){
        super(props);

        this.state = {
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
            selectedFile:[],
            showingAlertProfil: false,
            showingAlertPassword: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
        this.handleSubmitPhoto = this.handleSubmitPhoto.bind(this);
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
              this.setState( { user_date_of_birth: res.data.user_date_of_birth});
              this.setState( { user_sexe : res.data.user_sexe});
              this.setState( { user_photo: res.data.user_photo});
              this.setState( { user_email : res.data.user_email});
              this.setState( { user_password : res.data.user_password});
              this.setState( { user_adresse_txt : res.data.user_adresse_txt});
              this.setState( { users : res.data });
            })
            
            this.forceUpdate();
    }
    
    handleSubmit(e) {

        const config = {
          headers: {
            'x-access-token': this.props.token
          }
        }
        axios.put("http://localhost:3001/api/user/update/" + this.props.userid ,
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
        axios.put("http://localhost:3001/api/user/update/password/" + this.props.userid ,
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

        console.log(this.state.selectedFile);
      }
    
      handleSubmitPhoto(e){
        const body = new FormData() 
        body.append('file', this.state.selectedFile)
        for (var value of body.values()) {
          console.log('value:',value); 
       }
        axios.put("http://localhost:3001/photo/updateUserPhoto/"+ this.props.userid,body);
        this.forceUpdate();
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

    render(){
        return(
            <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                        <h2 className="mt-2r">Mon Compte</h2>
                          <Img
                              src={
                                    this.state.selectedFile!=''?
                                      'http://localhost:3001/userPicture/'+this.props.userid+'/'+this.state.selectedFile.name
                                    
                                    :this.state.photo_url
                                  }

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
        )
    }
}

export default MyProfil;