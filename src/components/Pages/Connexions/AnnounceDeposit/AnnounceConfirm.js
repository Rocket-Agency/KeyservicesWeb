import React, {Component} from 'react';
import '../../../../css/InscriptionProprietaire.scss';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class AnnounceConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


    render() {
        // const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider > 
                <React.Fragment>
                    <AppBar title="Confirm"/>
                    <div className="text-center confirm">
                        <h1>Récapitulatif de l'annonce</h1>

                    </div>
                </React.Fragment>
          </MuiThemeProvider>
        )
    }
}

export default AnnounceConfirm;