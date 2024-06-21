/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
    </HashRouter>
);