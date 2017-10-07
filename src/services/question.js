import {
	selectedQuestionFetched, selectedQuestionHasErrored,
	selectedQuestionIsLoading,
} from '../actions/question';

/* Axios style of fetching data*/
// import axios from 'axios';
// export const getQuestion = (id) => {
// 	return axios.get(`/questions/show-question/${id}`).
// 	then(res => res.data.question);
// };


export const getQuestion = (id) => {
	return (dispatch) => {
		dispatch(selectedQuestionIsLoading(true));

		fetch(`http://civicsaid-backend.dev/questions/show-question/${id}`)
			.then((response) => {
				if(!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(selectedQuestionIsLoading(false));

				return response;
		})
		.then((response) => response.json())
		.then((data) => dispatch(selectedQuestionFetched(data.question)))
		.catch(() => dispatch(selectedQuestionHasErrored(true)));
	}
};
