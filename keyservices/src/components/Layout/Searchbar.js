import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go';
import '../../css/Searchbar.css';


export class Searchbar extends Component {
    render() {
        return(
            <Form className="p-2 searchbarHeader" inline>
                <Button className="searchIconZone">
                    <GoSearch/>
                </Button>
                <FormControl type="text" placeholder="Search" className="mr-sm-1 searchFormControl" />
            </Form>
            )
        }
    }
    
export default Searchbar;
