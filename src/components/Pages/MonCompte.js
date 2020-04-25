import React, {Component} from 'react';

export class MonCompte extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                   <h3>Bienvenue sur votre espace</h3>
                 </div>

                 <ul>
                    <li>{this.state.users.user_first_name}</li>
                    <li>{this.state.users.user_last_name}</li>
                </ul>

            </div>
        )
    }
}

export default MonCompte; 