import axios from 'axios';

export const getAnswers = function(id) {
	return axios.get(`/answers/show-answers/${id}`)
		.then(res => res.data.question.answers)
		.catch(error => {
			console.log(error)
		});
};
