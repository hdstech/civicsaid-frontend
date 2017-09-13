import { FETCH_QUESTIONS } from './actionsTypes';
import * as questions from '../services/questions';

export function getQuestions() {
	return {
		type: FETCH_QUESTIONS,
		payload: questions.getQuestions()
	}
}
