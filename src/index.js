import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
