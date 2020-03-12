import React from 'react';
import './App.css';

//Import component for Header & Footer
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

//Import pages
import {Home} from './components/Pages/Home';
import {Contact} from './components/Pages/Contact';
import {KeyservicesPresentation} from './components/Pages/KeyservicesPresentation';
import {MonEspace} from './components/Pages/MonEspace';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
        <Header/>
        
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/contact' component={Contact} />
            <Route path='/keyservicesPresentation' component={KeyservicesPresentation} />
            <Route path='/monespace' component={MonEspace} />
          </Switch>
        
        <Footer/>
       </div>
    </Router>
  );
}

export default App;