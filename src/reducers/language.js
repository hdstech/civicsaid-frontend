import { LANGUAGE_ENGLISH } from '../actions/actionsTypes';
import { LANGUAGE_SPANISH } from '../actions/actionsTypes';
import { LANGUAGE_CHINESE } from '../actions/actionsTypes';
const initialState = {
	selectedLangauge: 'LANGUAGE_ENGLISH',
};

export default function(state = initialState, action) {
	switch(action.type) {
		case LANGUAGE_ENGLISH:
			return {...state, selectedLangauge: action.payload};
		case LANGUAGE_SPANISH:
			return {...state, selectedLangauge: action.payload};
		case LANGUAGE_CHINESE:
			return {...state, selectedLangauge: action.payload};
		default:
			return state;
	}
}
