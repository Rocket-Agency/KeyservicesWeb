//Inscription Propriétaire
import React, {Component} from 'react';
import axios from 'axios';
import { BreadcrumbItem } from '../../../../index';
import '../../../../css/InscriptionProprietaire.scss';

import { Col, Container, Form} from 'react-bootstrap';


import UserForm from './UserForm';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import HomeIcon from '@material-ui/icons/Home';
import NewsletterForm  from './NewsletterForm';
import { Redirect } from 'react-router';


export class InscriptionProprietaire extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            noneComponent: true,
            newsletterForm: false,
            userForm: false,
            ville : [
                { title: 'Paris', boolean: true },
                { title: 'Lyon', boolean: true} ,
                { title: 'Lourdes', boolean: true },
                { title: 'Nice', boolean: false },
                { title: 'Toulouse', boolean: false },
                { title: 'La Rochelle', boolean: false },
            ],
            cityChoice : "",
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
      }



    handleChange(event, value) {    
        if (value == null) {
            this.setState({
                cityChoice : "",
            })
        }  else {
            this.setState({
                cityChoice : value.title,
            })
        }
    }
    
      handleSubmit(event)  {
        this.state.ville.map((villesData) => {
            
            if( this.state.cityChoice === villesData.title && villesData.boolean === true) {
                 this.setState ({
                    userForm: true 
                })
                return <Redirect to='/inscriptionProprietaire'/>;
            } else {
                this.setState ({
                    newsletterForm : true  
                })
                return <Redirect to='/inscriptionProprietaire'/>;
            }  
        })
        event.preventDefault();
    }

    render() {
        const ville = this.state.ville
        return(
            <div>
                <div className="mt-3 d-flex justify-content-center">
                   <h3>Inscription</h3>
                </div>

                <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                <BreadcrumbItem to="/monEspace" >Connexion</BreadcrumbItem>
                <BreadcrumbItem >Connexion Propriétaire</BreadcrumbItem>


                 <Container fluid className="mt-5 searchCityFields">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="2" controlId="formGridCity">
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={ville}
                                    // getOptionDisabled={(option) => option.title == 'Lourdes'}
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 300 }}
                                    onChange={this.handleChange} 
                                    renderInput={(params) => <TextField {...params}  
                                    label="Ville" variant="outlined"  />}
                                />
                            </Form.Group>
                        </Form.Row>
                    

                        <Container fluid className="searchCityFields">               
                            <button type="submit" className="learn-more" aria-label="Valider la ville">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Valider la ville</span>
                            </button>
                        </Container>         
                     </Form>               
                 </Container>


                    <Container fluid className="Formulaire-incription">

                        {this.state.userForm === true ? (
                            <UserForm/>
                        ) : this.state.newsletterForm === true ? (
                            <NewsletterForm/>
                        ) : (
                             null
                        )}
                    {/* {/* <UserForm />  */}
                    {/* <NewsletterForm />  */}

                    {/* <button onClick={this._onButtonClick}>Button</button>
                    {this.state.noneComponent ? <NewsletterForm /> : null} */}

                </Container>
            </div>
        )
    }
}