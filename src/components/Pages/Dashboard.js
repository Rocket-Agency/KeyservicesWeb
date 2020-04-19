import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import MaterialTable from 'material-table'


class ProfileTabs extends Component {
  state = {
    activeIndex: 0,
    userid: this.props.location.state.user.id,
    accessToken: this.props.location.state.user.accessToken,
    group: this.props.location.state.user.groups,
    users: "",
    usersCollection: []
  }

  componentDidMount() {
    const config = {
      headers: {
        'x-access-token': this.state.accessToken
      }
    }
    axios.get(`http://localhost:3001/api/user/`+ this.state.userid, config)
      .then(res => {
        const users = res.data;
        this.setState( { users } );
      })
    axios.get(`http://localhost:3001/api/users/`, config)
      .then(res => {
        const usersCollection = res.data;
        this.setState( { usersCollection } );
      })
  }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })
  render() {
    const { activeIndex } = this.state;
    const { group } = this.state;
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <VerticalTabs
          value={activeIndex}
          onChange={this.handleChange}
        >
          <MyTab label='Mon compte' />
          <MyTab label='Information location' />
          <MyTab label='Calendrier' />
          {group == 'GROUP_ADMIN' ? <MyTab label='Liste utilisateurs' />: null }
        </VerticalTabs>

        { activeIndex === 0 && <TabContainer>
          <ul>
            <li>{this.state.users.user_first_name}</li>
            <li>{this.state.users.user_last_name}</li>
          </ul>
        </TabContainer> }
        { activeIndex === 1 && <TabContainer>
          </TabContainer> }
        { activeIndex === 2 && <TabContainer style={{ minWidth: "100%" }}>
            <MaterialTable
              columns={[
                { title: "Id", field: "user_id", editable: 'never'},
                { title: "Prénom", field: "user_first_name" },
                { title: "Nom", field: "user_last_name" },
                { title: "Email", field: "user_email"},
                { title: "Password", field: "user_password", show: false},
                { title: "Birthay", field: "user_date_of_birth"},
                { title: "Sexe", field: "user_sexe"},
                { title: "Photo", field: "user_photo"},
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
                                    'x-access-token': this.state.accessToken
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
                                    'x-access-token': this.state.accessToken
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
        </TabContainer> }
    </div>
    )
  }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

const MyTab = withStyles(theme => ({
  selected: {
    color: 'tomato',
    borderBottom: '2px solid tomato'
  }
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

export default ProfileTabs; 