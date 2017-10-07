import {sum} from './sum';
import nock from 'nock';

let host = nock('http://civicsaid-backend.dev/questions');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toMatchSnapshot();
});

test('fetchs a single question', () => {
	host.get('/show-question/6')
		.reply(200, {
			"question": {
				"id": 6,
				"category": "AMERICAN GOVERNMENT",
				"subcategory": "Principles of American Democracy",
				"q_english": "What is one right or freedom from the First Amendment?*",
				"q_spanish": "¿Cuál es un derecho o libertad que la Primera Enmienda garantiza?*",
				"q_chinese": "列舉憲法第一條修正案中的一項權利或自由 。*",
				"is_favorite": 0,
				"created_at": "2017-03-04 18:22:42",
				"updated_at": "2017-03-04 18:22:42"
			}
	});
});
