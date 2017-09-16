import { combineReducers } from 'redux';
import questions from './questions';
import question from './question';
import language from './language';

const rootReducer = combineReducers({
	question,
	questions,
	language
});

export default rootReducer;
