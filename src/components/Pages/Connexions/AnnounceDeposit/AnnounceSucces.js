import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export class AnnounceSucces extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider > 
                <React.Fragment>
                    <AppBar title="Success"/>
                    <div className="text-center success">
                        <h1>Votre annonce a bien été enregistrer</h1>
                        <p>Vous recevrez un email de confirmation pour la validation de votre annonce</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div id="container">                    
                                    <button className="retour-login" aria-label="Retour à la page d'inscription">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <Link className="button-text" to="/" aria-label="Retour dashboard">
                                            Retourner à votre espace
                                        </Link>
                                    </button>
                                 </div>
                             </div>
                    </div>
                </React.Fragment>
          </MuiThemeProvider>
        )
    }
}

export default AnnounceSucces;