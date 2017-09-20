import { FETCH_ANSWERS } from './actionsTypes';
import * as answers from '../services/answers';

export function getAnswers(id) {
	return {
		type: FETCH_ANSWERS,
		payload: answers.getAnswers(id)
	}
}
