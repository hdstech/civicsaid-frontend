import { SELECTED_QUESTION } from './actionsTypes';
import * as question from '../services/question';

export function selectedQuestion(id) {
	return {
		type: SELECTED_QUESTION,
		payload: question.getQuestion(id)
	}
}
