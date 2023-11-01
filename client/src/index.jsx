import React, { useEffect } from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
