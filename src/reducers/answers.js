import { FETCH_ANSWERS_PENDING } from '../actions/actionsTypes';
import { FETCH_ANSWERS_REJECTED } from '../actions/actionsTypes';
import { FETCH_ANSWERS_FULFILLED } from '../actions/actionsTypes';
const initialState = {
	loading: false,
	answers: [],
	error: null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_ANSWERS_PENDING:
			return {...state, loading: true};
		case FETCH_ANSWERS_REJECTED:
			return {...state, loading: false, error: action.payload};
		case FETCH_ANSWERS_FULFILLED:
			return {
				...state,
				loading: false,
				answers: action.payload
			};
		default:
			return state;
	}
}
