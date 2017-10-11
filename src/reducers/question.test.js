import question from './question';
import * as actionCreators from '../actions/question';

const initialState = {
	selectedQuestion: {},
	loading: false,
	error: null
};

test('should return initial state', () => {
	expect(question(undefined, {})).toEqual(initialState)
});

test('should return a true value for loading', () => {
	const payload = {
		loading: true
	};
	expect(question({}, actionCreators.selectedQuestionIsLoading(true))).toEqual(payload);
});
