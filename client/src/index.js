import Application from './js/application';
import ReactDOM from 'react-dom';
import React from 'react';
import './bootstrap-brand.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const domRoot = document.getElementById('root');

if (domRoot) {
  ReactDOM.render(<Application/>, domRoot);
}
