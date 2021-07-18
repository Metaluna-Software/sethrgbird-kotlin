import Application from './js/application';
import React from 'react';
import './bootstrap-brand.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from 'react-dom';

const domRoot = document.getElementById('root');
ReactDOM.render(<Application/>, domRoot);
