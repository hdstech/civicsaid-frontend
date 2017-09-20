import { combineReducers } from 'redux';
import questions from './questions';
import question from './question';
import language from './language';
import answers from './answers';

const rootReducer = combineReducers({
	question,
	questions,
	language,
	answers
});

export default rootReducer;
