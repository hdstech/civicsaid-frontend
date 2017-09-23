import axios from 'axios';

export const getQuestion = (id) => {
	return axios.get(`/questions/show-question/${id}`)
		.then(res => res.data.question);
};
