import { combineReducers } from 'redux';
import language from './language';
import question from './question';
import questions from './questions';
import answers from './answers';

const rootReducer = combineReducers({
	language,
	question,
	questions,
	answers
});

export default rootReducer;
