import React, {Component} from 'react';
import { Redirect } from 'react-router';

export class LogoutApp extends Component {
    constructor(props){
        super(props);
        this.remove = '';
    }

    clear (){
        this.remove = localStorage.clear();
    }
    
    render(){
        this.clear();
        return <Redirect to='/loginConcierge'/>;
    }
}

export default LogoutApp;