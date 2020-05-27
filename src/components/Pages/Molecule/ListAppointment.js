// import React,{ Component } from "react";
// import axios from 'axios';
// import MaterialTable from 'material-table';

// class ListUsers extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//           usersCollection: [],
//         }
//     }
    
//     componentDidMount(){
//       const config = {
//         headers: {
//           'x-access-token': this.props.token
//         }
//       }
//       axios.get(`http://localhost:3001/api/users/`, config)
//       .then(res => {
//         const usersCollection = res.data;
//         this.setState( { usersCollection } );
//       })
//     }

//     render(){
//         return(
 
//             />
//         )
//     }
// }

// export default ListUsers;