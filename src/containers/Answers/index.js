import React, {Component} from 'react';
import '../../styles/Main.css';
import { getAnswers } from '../../actions/answers';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {LANGUAGE_CHINESE, LANGUAGE_SPANISH} from '../../actions/actionsTypes';

class Answers extends Component {
	componentWillMount(){
		const {getAnswers, question} = this.props;
		console.log('question is: ' + getAnswers(6));
		getAnswers(6);
	}

	render() {
		const {answers, selectedLanguage} = this.props;
		let selectedAnswer = selectedLanguage;
		return (
			<div className="container-fluid">
				<div className="card">
					<div className="card-body">
						{answers.map((answer, i) => (
							<div key={i}>
								<li className="card-text-size">
									{selectedAnswer === LANGUAGE_SPANISH
									? answer.a_spanish
									: selectedAnswer === LANGUAGE_CHINESE
										? answer.a_chinese
										: answer.a_english}
								</li>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		answers: state.answers.answers,
		question: state.question,
		selectedLanguage: state.language.selectedLanguage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getAnswers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
