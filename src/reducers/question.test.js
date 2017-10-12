import question from './question';
import * as actionCreators from '../actions/question';

const initialState = {
	selectedQuestion: {},
	loading: false,
	error: null,
};

test('should return initial state', () => {
	expect(question(undefined, {})).toEqual(initialState);
});

test('should return a true value for loading', () => {
	const payload = {
		loading: true,
	};
	expect(question({}, actionCreators.selectedQuestionIsLoading(true)))
	.toEqual(payload);
});

test('should return an error if the fetch has failed', () => {
	const payload = {
		error: true,
		loading: false,
	};
	expect(question({}, actionCreators.selectedQuestionHasErrored(true)))
	.toEqual(payload);
});

test('should return an question object once fetch has successfully completed',
	() => {
		const questionObj = {
			category: 'AMERICAN GOVERNMENT',
			created_at: '2017-03-04 18:22:42',
			id: 1,
			is_favorite: 0,
			q_chinese: '美國的最高法律是什麼？',
			q_english: 'What is the supreme law of the land?',
			q_spanish: '¿Cuál es la ley suprema de la nación?',
			subcategory: 'Principles of American Democracy',
			updated_at: '2017-03-04 18:22:42',
		};
		expect(
			question({}, actionCreators.selectedQuestionFetched(questionObj)))
		.toEqual({
			loading: false,
			selectedQuestion: questionObj,
		});
	});
