import axios from 'axios';

export const getQuestion = function(id) {
	return axios.get(`/questions/show-question/${id}`)
		.then(res => res.data.question);
};
