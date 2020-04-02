//Profile.js
import React, {Component} from 'react';
import '../../../../css/Profiles.scss';

export class Profile extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex justify-content-center">
                   <h3>Profile page</h3>
                 </div>

                 <div id="container">                    
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Envoyer</span>
                    </button>
                </div>
            </div>
        )
    }
}