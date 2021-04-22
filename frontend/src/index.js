import React,{ Fragment } from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { GlobalStyle } from './style.js';
import App from './App';


ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <App />
  </Fragment>,
  document.getElementById('root')
);


