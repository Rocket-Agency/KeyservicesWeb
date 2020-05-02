import React, {Component} from 'react';
import '../../../../css/Newsletter.scss';
import { BreadcrumbItem } from '../../index';
import HomeIcon from '@material-ui/icons/Home';


export class NewsletterForm extends Component {

    render() {
        return(
            <div>

                <BreadcrumbItem to="/" ><HomeIcon/>Home</BreadcrumbItem>
                <BreadcrumbItem >Inscription Propriétaire </BreadcrumbItem>

               <div className="d-flex text-center justify-content-center">
                    <h1>Newsletter</h1>
                </div>
            </div>
        )
    }
}