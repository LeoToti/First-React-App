import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx'
import { Jumbotron } from 'react-bootstrap';
import Books from './Books.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
    < Jumbotron />
    < Books />
    <Footer />


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
