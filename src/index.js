import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App
        className="App"
        display="flex"
        flexDirection="column"
        height="100vh"
        maxHeight="100vh"
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
