import React, { Component } from 'react';
import { getQuestions } from '../../actions/questions';
import { selectedQuestionFetched } from '../../actions/question';
import { getQuestion } from '../../services/question';
import { getAnswers } from '../../actions/answers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import '../../styles/Main.css';

class Questions extends Component {
	componentWillMount(){
		const {getQuestions} = this.props;
		getQuestions();
	}

	render() {
		const {questions, getQuestion, getAnswers} = this.props;
		return (
			<div className="container-fluid">
				{questions.map((question, i) => (
					<div key={i}>
						<div className="container-fluid">
							<div className="card">
								<div className="card-header">
									<h3>{question.category}</h3>
								</div>
								<div className="card-body">
									<h4 className="card-text">{question.q_english}</h4>
								</div>
								<Link to={`flash-card/${question.id}`}>
									<button className="btn flash-card-btn"
											onClick={() =>
												{
													getQuestion(question.id);
													getAnswers(question.id);
												}
											}
									>flash card</button>
								</Link>
							</div>
							<br/>
						</div>
					</div>
				))}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions.questions,
		loading: state.questions.loading,
		error: state.questions.error
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getQuestions, getQuestion, getAnswers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);


