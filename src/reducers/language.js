import { LANGUAGE_SELECTED } from '../actions/actionsTypes';
const initialState = {
	selectedLangauge: 'LANGUAGE_ENGLISH',
};

export default function(state = initialState, action) {
	switch(action.type) {
		case LANGUAGE_SELECTED:
			return {...state, selectedLangauge: action.payload};
		default:
			return state;
	}
}
