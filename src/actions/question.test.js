import * as actions from './question';
import * as types from './actionsTypes';

test('it should return an error when fetching a question fails', () => {
	const value = true;
	const expectedAction = {
		type: types.SELECTED_QUESTION_REJECTED,
		hasErrored: true,
		isLoading: false,
	};
	expect(actions.selectedQuestionHasErrored(value)).toEqual(expectedAction);
});

test('it should return a true when fetching the selected question is still pending', () => {
	const value = true;
	const expectedAction = {
		type: types.SELECTED_QUESTION_PENDING,
		isLoading: true
	};
	expect(actions.selectedQuestionIsLoading(value)).toEqual(expectedAction);
});

test('it should return an object once a question is fetched', () => {
	const questionObj = {
		category: "AMERICAN GOVERNMENT",
		created_at: "2017-03-04 18:22:42",
		id: 1,
		is_favorite: 0,
		q_chinese: '美國的最高法律是什麼？',
		q_english: "What is the supreme law of the land?",
		q_spanish: "¿Cuál es la ley suprema de la nación?",
		subcategory: "Principles of American Democracy",
		updated_at: "2017-03-04 18:22:42"
	};
	const expectedAction = {
		type: types.SELECTED_QUESTION_FULFILLED,
		payload: {
			category: "AMERICAN GOVERNMENT",
			created_at: "2017-03-04 18:22:42",
			id: 1,
			is_favorite: 0,
			q_chinese: '美國的最高法律是什麼？',
			q_english: "What is the supreme law of the land?",
			q_spanish: "¿Cuál es la ley suprema de la nación?",
			subcategory: "Principles of American Democracy",
			updated_at: "2017-03-04 18:22:42"
		}
	};
	expect(actions.selectedQuestionFetched(questionObj)).toEqual(expectedAction);
});
