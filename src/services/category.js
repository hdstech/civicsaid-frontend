import axios from 'axios';

export const getCategoryQuestions = (category) => {
	return axios.get(`/questions/show-category/${category}`)
	.then(res => res.data.questions);
};
