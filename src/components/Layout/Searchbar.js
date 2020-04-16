import React, {Component} from 'react';
import '../../css/Searchbar.scss';

import {Form, FormControl, Button, Col} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go';



export class Searchbar extends Component {
    render() {
        return(
            <Form className="p-2 mt-3 searchbarHeader justify-content-center" inline>
                <Button className="searchIconZone">
                    <GoSearch/>
                </Button>
                <FormControl type="text" placeholder="Search" className="mr-sm-1 searchFormControl" />
            </Form>
            )
        }
    }
    
export default Searchbar;