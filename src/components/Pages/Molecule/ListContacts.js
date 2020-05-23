import React, {Component} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

class ListContacts extends Component {
    constructor(props){
        super(props);

        this.state = {
          contactsCollection: []
        }
    }
    componentDidMount(){
      const config = {
        headers: {
          'x-access-token': this.props.token
        }
      }
      axios.get('http://localhost:3001/api/contacts')
      .then (res => {
        const contactsCollection = res.data;
        this.setState( {contactsCollection});
      })
    }
    render(){
        return(
          <MaterialTable
          columns={[
            { title: 'Nom', field: 'contact_first_name' },
            { title: 'Prénom', field: 'contact_last_name' },
            { title: 'Email', field: 'contact_email' },
            { title: 'Objet', field: 'contact_object'},
            { title: 'Message', field: 'contact_message'}
          ]}
          data={this.state.contactsCollection}
          title="Liste des messages"
        />
        )
    }
}

export default ListContacts;