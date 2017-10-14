import language from './language';
import * as actionCreators from '../actions/language';
import * as types from '../actions/actionsTypes';

const initialState = {
	selectedLanguage: types.LANGUAGE_ENGLISH,
};

test('should return the initial state', () => {
	expect(language(undefined, {})).toEqual(initialState);
});

test('should be able to return chinese as a selected language', () => {
	const expectedPayload = {
		selectedLanguage: types.LANGUAGE_CHINESE
	};
	expect(language({}, actionCreators.languageSelected(types.LANGUAGE_CHINESE))).toEqual(expectedPayload);
});

test('should be able to return spanish as a selected language', () => {
	const expectedPayload = {
		selectedLanguage: types.LANGUAGE_SPANISH
	};
	expect(language({}, actionCreators.languageSelected(types.LANGUAGE_SPANISH))).toEqual(expectedPayload);
});

test('should be able to return english as a selected language', () => {
	const expectedPayload = {
		selectedLanguage: types.LANGUAGE_ENGLISH
	};
	expect(language({}, actionCreators.languageSelected(types.LANGUAGE_ENGLISH))).toEqual(expectedPayload);
});
