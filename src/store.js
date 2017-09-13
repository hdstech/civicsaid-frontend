import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers/index'
import questions from './reducers/questions';

//default state application object
const defaultState = {
	// questions
};

const middleware = [];

// Add redux-logger in dev mode
if (process.env !== 'production') {
	middleware.push(createLogger());
}
/* ------------- Promise Middleware ------------- */

middleware.push(promiseMiddleware());

const enhancers = [];

enhancers.push(applyMiddleware(...middleware));

/* ------------- Redux Devtools ------------- */
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
enhancers.push(devTools);

const store = createStore(rootReducer, defaultState, compose(...enhancers));
// console.log('default state of the store:' + store.getState())
export default store;
