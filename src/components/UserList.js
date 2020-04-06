import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.post('http://51.158.67.56:3001/api/auth/signup').then( res => {
            console.log(res);
            this.setState({users: res.data})
        });
    }

    render(){
        return(
            <ul>
                {this.state.users.map(user => <li key={user.user_id}>{user.user_email}</li>)}
            </ul>
        )
    }
}
export default UserList;