import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import  'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';
              
ReactDOM.render(<Home />  , document.getElementById('root'));
registerServiceWorker();
