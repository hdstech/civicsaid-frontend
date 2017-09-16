import React, { Component } from 'react';
import { getQuestions } from '../../actions/questions';
import { selectedQuestion } from '../../actions/question';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';
import {bindActionCreators} from 'redux';

class Questions extends Component {
	componentWillMount(){
		const {getQuestions} = this.props;
		getQuestions();
	}

	render() {
		const {questions, selectedQuestion} = this.props;
		return (
			<div className="container-fluid">
				{questions.map((question, i) => (
					<div key={i}>
						<div className="container-fluid">
							<div className="card">
								<div className="card-header">
									<h3>{question.category}</h3>
								</div>
								<div className="card-block">
									<h4 className="card-text">{question.q_english}</h4>
								</div>
								<Link to={`flash-card/${question.id}`}>
									<button className="btn flash-card-btn" onClick={() => selectedQuestion(question.id)}>flash card</button>
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
		error: state.questions.error,
		selectedQuestion: state.question.selectedQuestion
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getQuestions, selectedQuestion}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);


