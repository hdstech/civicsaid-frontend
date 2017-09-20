import React, {Component} from 'react';
import '../../styles/Main.css';
import { getAnswers } from '../../actions/answers';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Answers extends Component {
	componentWillMount(){
		const {getAnswers, question} = this.props;
		getAnswers(6);
	}

	render() {
		const {answers} = this.props;
		return (
			<div className="container-fluid">
				<div className="card">
					<div className="card-body">
						{answers.map((answer, i) => (
							<div key={i}>
								<li>
									{answer.q_english}
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
		question: state.question.selectedQuestion,
		selectedLanguage: state.language.selectedLanguage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getAnswers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
