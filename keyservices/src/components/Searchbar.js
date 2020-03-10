import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import '../css/Searchbar.css';


export class Searchbar extends Component {
    render() {
        return(
            <Form className="p-2" inline>
                <Button className="searchIconZone" >Icon</Button>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            )
        }
    }
    
export default Searchbar;
