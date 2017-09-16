import { SELECTED_QUESTION_PENDING } from '../actions/actionsTypes';
import { SELECTED_QUESTION_REJECTED } from '../actions/actionsTypes';
import { SELECTED_QUESTION_FULFILLED } from '../actions/actionsTypes';

const initialState = {
	selectedQuestion: {},
	loading: false,
	error: null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case SELECTED_QUESTION_PENDING:
			return {...state, loading: true};
		case SELECTED_QUESTION_REJECTED:
			return {...state, loading: false, error: action.payload};
		case SELECTED_QUESTION_FULFILLED:
			return {...state, loading: false, selectedQuestion: action.payload};
		default:
			return state;
	}
}
