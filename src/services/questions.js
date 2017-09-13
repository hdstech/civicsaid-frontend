import axios from 'axios';

export const getQuestions = function() {
	return axios.get(`/questions/all-questions`)
		.then(res => res.data.questions);
};
