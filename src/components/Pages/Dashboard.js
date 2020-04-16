import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'


class ProfileTabs extends Component {
  state = {
    activeIndex: 0,
    userid: this.props.location.state.user.id,
    users: ""
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/user/`+ this.state.userid)
      .then(res => {
        const users = res.data;
        this.setState( { users } );
      })
  }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })
  render() {
    const { activeIndex } = this.state;
    console.log(this.state.users);
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
          <MyTab label='mes annonces' />
          <MyTab label='mon compte' />
          <MyTab label='item three' />
        </VerticalTabs>

        { activeIndex === 0 && <TabContainer>mzdq</TabContainer> }
        { activeIndex === 1 && <TabContainer>
          <ul>
            <li>{this.state.users.user_first_name}</li>
            <li>{this.state.users.user_last_name}</li>
          </ul>
          </TabContainer> }
        { activeIndex === 2 && <TabContainer>Item Three</TabContainer> }
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