import { LANGUAGE_SELECTED } from '../actions/actionsTypes';
import { LANGUAGE_ENGLISH } from '../actions/actionsTypes';
const initialState = {
	selectedLanguage: LANGUAGE_ENGLISH,
};

export default function(state = initialState, action) {
	switch(action.type) {
		case LANGUAGE_SELECTED:
			return {...state, selectedLanguage: action.payload};
		default:
			return state;
	}
}
