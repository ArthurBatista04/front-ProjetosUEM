import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';
ReactDOM.render(
  <BrowserRouter>
    <Favicon image="./images/favicon.png" />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
