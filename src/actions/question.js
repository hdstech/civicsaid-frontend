import {
	SELECTED_QUESTION_FULFILLED,
	SELECTED_QUESTION_PENDING,
	SELECTED_QUESTION_REJECTED,
} from './actionsTypes';

/* Imports and Action Creator to trigger axios service*/
// import * as question from '../services/question';
// import {SELECTED_QUESTION} from './actionTypes';
// export function selectedQuestion(id) {
// 	return {
// 		type: SELECTED_QUESTION,
// 		payload: question.getQuestion(id)
// 	}
// }

export function selectedQuestionHasErrored(bool) {
	return {
		type: SELECTED_QUESTION_REJECTED,
		hasErrored: bool,
	};
}

export function selectedQuestionIsLoading(bool) {
	return {
		type: SELECTED_QUESTION_PENDING,
		isLoading: bool,
	};
}

export function selectedQuestionFetched(question) {
	return {
		type: SELECTED_QUESTION_FULFILLED,
		payload: question,
	};
}
