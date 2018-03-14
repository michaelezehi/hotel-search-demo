import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import HomePage from './components/home/HomePage';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
