import React from 'react';
import { BreadProvider } from './index';
import './App.scss';
import './index.css';

//Import component for Header & Footer
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import FilAriane from './components/Layout/FilAriane';
import Routing from './Route';

function App() {
  return (
    <>
        <BreadProvider >
          <>    
          <div className="page-container">
              <div className="content-wrap">
              <Header />
              <FilAriane />
              <Routing/>
              </div>
              <Footer/>
          </div>
          </>
        </BreadProvider>
    </>
  );
}

export default App;