import React from 'react';
import './App.css';
//Import component for Header
import Navigation from './components/Layout/Navigation';
import Header from './components/Layout/Header';
// import ColorSeparator from './components/Layout/ColorSeparator';

//Import component for Footer
import Footer from './components/Layout/Footer';

//Import pages
import {Home} from './components/Pages/Home';
import {Contact} from './components/Pages/Contact';
import {KeyservicesPresentation} from './components/Pages/KeyservicesPresentation';
import {MonEspace} from './components/Pages/MonEspace';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';



function App() {
  return (
    <Router>
    <Header/>

    <div className="container-fluid">
      <div className="d-flex justify-content-between">

          <Navigation/>
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
