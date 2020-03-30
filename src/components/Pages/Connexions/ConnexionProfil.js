import React from 'react';
import axios from 'axios';

class ConnexionProfil extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.post('http://51.158.67.56:3001/api/auth/signup', {
            email    : this.state.email,
            password : this.state.password
          })
        .then(user => {
        })
    }

    render(){
        return(
            <ul>
                {this.state.users.map(user => <li key={user.user_id}>{user.user_email}</li>)}
            </ul>
        )
    }
}
export default ConnexionProfil;





import React from 'react';
import axios from 'axios';

export default class ConnexionProfil extends React.Component {
  state = {
    name: '',
    email    : '',
    password : '',
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
        email    : this.state.email,
        password : this.state.password
    };

    axios.post('http://51.158.67.56:3001/api/auth/signup', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>

        <Form onSubmit={this.handleSubmit}>
            <Form.Row className="d-flex justify-content-center" >
                <Form.Group as={Col} md="8" controlId="formGridId">
                    <Form.Label>Identifiant</Form.Label>
                    <Form.Control type="email" placeholder="Entrer votre identifiant" />
                </Form.Group>
            </Form.Row>

            <Form.Row className="d-flex justify-content-center">
                <Form.Group as={Col} md="8" controlId="formGridPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Entrer votre mot de passe" />
                </Form.Group>
            </Form.Row>

            <Form.Row class="mt-4">
                 <Form.Group class="mt-4">
                    <Container>

                        <Row>
                            <Col xs={12} className="d-flex justify-content-center align-items-center">
                                <Hidden xs>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Button id="btn-seConnecter" type="submit"  to="/">
                                            <IoIosArrowForward /> 
                                        </Button>

                                        <Link id="seConnecter" to="/profileLocataire">
                                            Se connecter
                                        </Link>
                                    </div>
                                </Hidden>
                                
                                <Visible xs>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <Button id="seConnecterMobile" to="/">
                                            <FaArrowRight/>
                                            <a clasName="envoyer" href="/profileLocataire"> 
                                                Se connecter
                                            </a>
                                        </Button>
                                    </div>
                                </Visible>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Form.Row>
        </Form>
      </div>
    )
  }
}
