import Application from './js/application';
import React from 'react';
import { render } from 'react-snapshot';
import './bootstrap-brand.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const domRoot = document.getElementById('root');

render(<Application/>, domRoot);
