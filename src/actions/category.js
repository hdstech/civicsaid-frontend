import { FETCH_CATEGORY_QUESTIONS } from './actionsTypes';
import { SELECTED_CATEGORY } from './actionsTypes';
import * as questions from '../services/category';

export function getCategoryQuestions(category) {
	return {
		type: FETCH_CATEGORY_QUESTIONS,
		payload: questions.getCategoryQuestions(category)
	}
}

export function categorySelection(category) {
	return {
		type: SELECTED_CATEGORY,
		payload: category
	}
}
