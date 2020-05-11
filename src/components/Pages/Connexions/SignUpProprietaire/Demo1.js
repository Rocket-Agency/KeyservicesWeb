import React,{Component} from 'react';
import Newsletter from './NewsletterForm';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>This is Demo1 component</div>;
  }
}

export default Demo1;