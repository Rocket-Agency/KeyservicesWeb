import React,{ Component } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';

class ListUsers extends Component {
    constructor(props){
        super(props);

        this.state = {
          usersCollection: [],
        }
    }
    
    componentDidMount(){
      const config = {
        headers: {
          'x-access-token': this.props.token
        }
      }
      axios.get(`http://localhost:3001/api/users/`, config)
      .then(res => {
        const usersCollection = res.data;
        this.setState( { usersCollection } );
      })
    }

    render(){
        return(
            <MaterialTable
            columns={[
              { title: "Id", field: "user_id", editable: 'never'},
              {
                title: 'Photo',
                field: 'user_photo',
                render: rowData => (
                  <img
                    style={{ height: 36, borderRadius: '50%' }}
                    src={rowData.user_photo == 'test.png' || 'admin.png' || 'concierge.png' ? 'http://localhost:3001/userPicture/' + rowData.user_photo : 'http://localhost:3001/userPicture/'+ rowData.user_id +'/'+ rowData.user_photo}
                  />
                ),
                editable: 'never'
              },
              { title: "Prénom", field: "user_first_name" },
              { title: "Nom", field: "user_last_name" },
              { title: "Email", field: "user_email"},
              { title: "Birthay", field: "user_date_of_birth"},
              { title: "Sexe", field: "user_sexe"},
              { title: "Adresse", field: "user_adresse_txt"}
            ]}
            data={this.state.usersCollection}
            title="Liste d'utilisateurs"
            editable={{
              onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                      setTimeout(() => {
                          {
                              const data = this.state.usersCollection;
                              const config = {
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Accept': 'application/json'
                                }
                              }
                              data.push(newData);
                              axios.post("http://localhost:3001/api/auth/signup",
                              {
                                  first_name: newData.user_first_name,
                                  last_name: newData.user_last_name,
                                  birth: newData.user_date_of_birth,
                                  sexe: newData.user_sexe,
                                  photo: newData.user_photo,
                                  email: newData.user_email,
                                  password: newData.user_password,
                                  adresse: newData.user_adresse_txt
                              },
                              config
                              )
                              this.setState({ data }, () => resolve());
                          }
                          resolve();
                      }, 1000);
                  }),
              onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                      setTimeout(() => {
                          {
                              const data = this.state.usersCollection;
                              const index = data.indexOf(oldData);
                              data[index] = newData;
                              console.log(newData);
                              const config = {
                                headers: {
                                  'x-access-token': this.props.token
                                }
                              }
                              axios.put("http://localhost:3001/api/user/update/" + newData.user_id ,
                              {
                                user_first_name: newData.user_first_name,
                                user_last_name: newData.user_last_name,
                                user_date_of_birth: newData.user_date_of_birth,
                                user_sexe: newData.user_sexe,
                                user_photo: newData.user_photo,
                                user_email: newData.user_email,
                                user_password: newData.user_password,
                                user_adresse_txt: newData.user_adresse_txt
                              }, config)                
                              this.setState({ data }, () => resolve());
                          }
                          resolve();
                      }, 1000);
                  }),
              onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                      setTimeout(() => {
                          {
                              let data = this.state.usersCollection;
                              const index = data.indexOf(oldData);
                              data.splice(index, 1);
                              const config = {
                                headers: {
                                  'x-access-token': this.props.token
                                }
                              }
                              axios.delete("http://localhost:3001/api/user/delete/" + oldData.user_id , config) 
                              this.setState({ data }, () => resolve());
                          }
                          resolve();
                      }, 1000);
                  })
               }}
            />
        )
    }
}

export default ListUsers;