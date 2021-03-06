import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import Breadcrumb from './lib/BreadCrumb';
import BreadcrumbItem from './lib/BreadCrumbItem';
import BreadProvider from './lib/BProvider';

import * as serviceWorker from './serviceWorker';
export { Breadcrumb, BreadcrumbItem, BreadProvider }

if (typeof document !== 'undefined') {
    ReactDOM.hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();