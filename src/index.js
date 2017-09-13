import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

render((
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
