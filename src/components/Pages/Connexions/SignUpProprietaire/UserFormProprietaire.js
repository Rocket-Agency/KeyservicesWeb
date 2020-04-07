import React, {Component} from 'react';
import UserFormProprietairePersonalDetail from './UserFormProprietairePersonalDetail'

export class UserFormProprietaire extends Component {
    state = {
        step : 1,
        firstName : '',
        lastName : '',
        email : '',
        tel : '',
        dateOfBirth : ''
    }

    // Pour aller au formulaire suivant
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Pour retourner au formulaire précédent
    provStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, tel, dateOfBirth } = this.state;
        const values = { firstName, lastName, email, tel, ddateOfBirth } = this.state;

       switch(step) {
           case 1:
            return (
                <UserFormProprietairePersonalDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    value={values}
                />
            )
            case 2:
            return <h1>UserFormProprietairePersonalDetail</h1>
            case 3:
            return <h1>Confirm</h1>
            case 4:
            return <h1>Succes</h1>
       }
    }
}

export default UserFormProprietaire;