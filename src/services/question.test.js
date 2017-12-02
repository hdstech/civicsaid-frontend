import "isomorphic-fetch";

test('should return a single question object', async () => {
	try {
		const response = await fetch(`http://civicsaid-backend.dev/questions/show-question/6`);
		const fetchedQuestion = await response.json();
		expect(fetchedQuestion).toMatchSnapshot();
	} catch (e) {
		fail();
	}
});
