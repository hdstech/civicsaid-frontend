import { combineReducers } from 'redux';
import language from './language';
import question from './question';
import questions from './questions';
import answers from './answers';
import category from './category';

const rootReducer = combineReducers({
	language,
	question,
	questions,
	answers,
	category
});

export default rootReducer;
