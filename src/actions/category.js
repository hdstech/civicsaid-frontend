import { FETCH_CATEGORY_QUESTIONS } from './actionsTypes';
import * as questions from '../services/category';

export function getCategoryQuestions(category) {
	return {
		type: FETCH_CATEGORY_QUESTIONS,
		payload: questions.getCategoryQuestions(category)
	}
}
