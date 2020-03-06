import React from 'react';
import './App.css';
import Navigation from './Layout/Navigation';
// import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
import {KeyservicesPresentation} from './components/KeyservicesPresentation';
import {MonEspace} from './components/MonEspace';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';


function App() {
  return (
    <Router>
    {/* <Header/> */}
    <div className="container-fluid">
      <div className="topColor"></div>
      <div className="p-2d-flex justify-center"></div>

      <div className="d-flex justify-content-between">
        <div className="p-2 col-example text-left">
           <Navbar.Brand href="#home">KEYSERVICES LOGO</Navbar.Brand>
        </div>
        <div className="p-2 col-example text-left"><Navigation/></div>
        <div className="p-2 col-example text-left">Barre de recherche</div>
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
