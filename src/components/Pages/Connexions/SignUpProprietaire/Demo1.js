import React,{Component} from 'react';
import Newsletter from './NewsletterForm';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import UserForm from './UserForm';

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      city: "",
      show : false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  submit(){
    // let text = "Test "
    // text += this.state.hide === false ? "hide" : "show";
    // return text;
  }
  
//   changeName(){
//     let text = ""
//     text += this.state.hide === true ? !"hide" : "show";
//     return text;
// }

  render() {

    return <div>
            {/* <header className="App-header">
              <div>
                {
                  this.state.show? <div><h1>Hide and Show</h1></div> : null 
                }
                  <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>
              </div>
            </header> */}

                <div>
                  <div className="row">
                    <div className="col-md-6 offset-md-3">

                        <h3>Bootstrap Select Box</h3><br />

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <select className="form-control" name="city" onChange={this.handleInputChange}>
                                        <option selected onChange={this.city} >Select City</option>
                                        <option value="1">Paris</option>
                                        <option value="1">Lyon</option>
                                        <option value="3">Lourdes</option>
                                    </select>

                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                { this.state.show && 
                  <UserForm />
                }                

                <div>{this.state.city}</div>
          </div>
        }
  }

export default Demo1;