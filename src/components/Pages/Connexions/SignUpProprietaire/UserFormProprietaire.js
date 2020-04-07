import React, {Component} from 'react';

export class UserFormProprietaire extends Component {
    state = {
        step : 1,
        firstName : '',
        lastName : '',
        email : '',
        tel : '',
        user_date_of_birth : ''

    }

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                   <h3>Bienvenue sur votre espace</h3>
                 </div>


            </div>
        )
    }
}

export default FormProprietairePersonalDetail;