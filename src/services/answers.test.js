import 'isomorphic-fetch';

test('should return all answers for a single question', async () => {
	try {
		const response = await fetch(
			`http://civicsaid-backend.dev/answers/show-answers/9`);
		const fetchedAnswers = await response.json();
		/*
		 * First level of the object returned is the question the answers belong to
		 * The answers are nested in an array on the question.answers object
		*/
		expect(fetchedAnswers).toMatchSnapshot();
	} catch (e) {
		fail();
	}
});
