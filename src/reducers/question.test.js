import reducer from './question';
import * as types from '../actions/actionsTypes';

test('should return the initial state', () => {
	expect(reducer(undefined, {})).toEqual({
		selectedQuestion: {},
		loading: false,
		error: null
	});
});
