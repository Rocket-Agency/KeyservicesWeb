import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import '../../css/Searchbar.css';


export class Searchbar extends Component {
    render() {
        return(
            <Form className="p-2 ml-auto" inline>
                <Button className="searchIconZone">Icon</Button>
                <FormControl type="text" placeholder="Search" className="mr-sm-1 searchFormControl" />
            </Form>
            )
        }
    }
    
export default Searchbar;
