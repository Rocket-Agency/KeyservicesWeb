//Inscription Propriétaire
import React, {Component} from 'react';
import axios from 'axios';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Form} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';

// import FormProprietairePersonalDetail from './FormProprietairePersonalDetail'
// import { UserForm } from './UserForm';
import UserForm from './UserForm';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export class InscriptionProprietaire extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            sexe:"",
            firstName: '',
            lastName: '',
            tel: '',
            dateOfBirth: '',
            factureAdress: '',
            zipCode: '',
            email: '',
            password: '',
            loading: false,
            message: "",
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        const { sexe, firstName, lastName, tel, dateOfBirth, factureAdress, zipCode, email, password } = this.state;
        console.log( sexe, firstName, lastName, tel, dateOfBirth, factureAdress, zipCode, email, password);
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }

        this.setState({
            loading: true
        })

        const data = {
            sexe: sexe,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            dateOfBirth: dateOfBirth,
            factureAdress: factureAdress,
            zipCode: zipCode,
            email : email,
            password : password,
        }

        axios.post("http://localhost:3001/api/auth/signup", data, config)
          .then(response => {
            console.log(response.data);
            this.setState({
                loading: false,
                message: response.data
            })
            this.props.history.push('dashboard', {user: response.data});
          })
          .catch(error => {
            console.log(error);
            this.setState({
                loading: false
            })
          });
        event.preventDefault();
      }
    
      loadingShowMsg() {
        if (this.state.loading) {
            return <p>Loading...</p>
        } else {
            return <p>{this.state.message}</p>
        }
      }

    render() {
        const ville = [
            { title: 'Paris', boolean: true },
            { title: 'Lourdes', boolean: false}
          ];
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                   <h3>Inscription</h3>
                </div>


                 <Container fluid className="mt-5 d-flex justify-content-center searchCityFields">
                    <Form.Row className="d-flex justify-content-center">
                        <Form.Group as={Col} md="2" controlId="formGridCity">
                            <Autocomplete
                                id="combo-box-demo"
                                options={ville}
                                getOptionDisabled={(option) => option.title == 'Lourdes'}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Ville" variant="outlined" />}
                            />
                        </Form.Group>
                    </Form.Row>

                    <div id="container">                    
                         <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                             <span className="button-text">Valider la ville</span>
                        </button>
                     </div>                        
                 </Container>


                    <Container fluid className="Formulaire-incription">

                    <UserForm /> 

                </Container>
            </div>
        )
    }
}