import React from 'react';
import './App.css';
import Navigation from './components/Layout/Navigation';
// import Header from './components/Layout/Header';
import ColorSeparator from './components/Layout/ColorSeparator';
import Footer from './components/Layout/Footer';
import {Home} from './components/Pages/Home';
import {Contact} from './components/Pages/Contact';
import {KeyservicesPresentation} from './components/Pages/KeyservicesPresentation';
import {MonEspace} from './components/Pages/MonEspace';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';



function App() {
  return (
    <Router>
    <ColorSeparator/>

    <div className="container-fluid">
      <div className="p-2 d-flex justify-center"></div>

      <div className="d-flex justify-content-between">
        <div className="p-2 col-example text-left">
           <Navbar.Brand href="/">KEYSERVICES LOGO</Navbar.Brand>
        </div>
        <div className="col-example text-left"><Navigation/>
        </div>
        <div className="col-example text-left">    
        <Form inline>
          <Button variant="outline-primary">Search</Button>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        </div>
      </div>  

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Contact} />
        <Route path='/keyservicesPresentation' component={KeyservicesPresentation} />
        <Route path='/monespace' component={MonEspace} />
      </Switch>

    </div>
    <Footer/>

    </Router>
  );
}

export default App;
