import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go';
import '../../css/Searchbar.scss';


export class Searchbar extends Component {
    render() {
        return(
            <Form className="p-2 searchbarHeader justify-content-center" inline>
                <Button className="searchIconZone">
                    <GoSearch/>
                </Button>
                <FormControl type="text" placeholder="Search" className="mr-sm-1 searchFormControl" />
            </Form>
            )
        }
    }
    
export default Searchbar;