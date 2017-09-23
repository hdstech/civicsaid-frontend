import React, {Component} from 'react';
import Question from '../../containers/Question/index';
import Answers from '../../containers/Answers/index';
import '../../styles/Main.css';

export default class FlashCard extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Question/>
				<br/>
				<Answers/>
			</div>
		);
	}
}
