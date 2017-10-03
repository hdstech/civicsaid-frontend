import { FETCH_CATEGORY_QUESTIONS_PENDING } from '../actions/actionsTypes';
import { FETCH_CATEGORY_QUESTIONS_REJECTED } from '../actions/actionsTypes';
import { FETCH_CATEGORY_QUESTIONS_FULFILLED } from '../actions/actionsTypes';
import { SELECTED_CATEGORY } from '../actions/actionsTypes';
const initialState = {
	loading: false,
	questions: [],
	error: null,
	selectedCategory: ''
};

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_CATEGORY_QUESTIONS_PENDING:
			return {...state, loading: true};
		case FETCH_CATEGORY_QUESTIONS_REJECTED:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case FETCH_CATEGORY_QUESTIONS_FULFILLED:
			return {
				...state,
				loading: false,
				questions: action.payload
			};
		case SELECTED_CATEGORY:
			return {...state, selectedCategory: action.payload};
		default:
			return state;
	}
}
