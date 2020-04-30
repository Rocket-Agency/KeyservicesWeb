import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import Breadcrumb from './lib/BreadCrumb';
import BreadcrumbItem from './lib/BreadCrumbItem';
import BreadProvider from './lib/BProvider';


// export default BreadCrumbLib;
import * as serviceWorker from './serviceWorker';
import {HashRouter, BrowserRouter} from 'react-router-dom';
export { Breadcrumb, BreadcrumbItem, BreadProvider }
ReactDOM.hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


