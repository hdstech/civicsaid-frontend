import { LANGUAGE_SELECTED } from './actionsTypes';

export function languageSelected(language){
	return {
		type: LANGUAGE_SELECTED,
		payload: language
	}
}
