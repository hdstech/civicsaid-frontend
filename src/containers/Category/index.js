import React, { Component } from 'react';
import { getCategoryQuestions } from '../../actions/category';
import { selectedQuestion } from '../../actions/question';
import { getAnswers } from '../../actions/answers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import '../../styles/Main.css';

class Category extends Component {
	componentWillMount() {
		const {getCategoryQuestions} = this.props;
		getCategoryQuestions(this.props.match.params.category);
	}

	render() {
		const {questions, selectedQuestion, getAnswers} = this.props;
		console.log('render questions: ' + questions);
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
											onClick={() => {
												selectedQuestion(question.id);
												getAnswers(question.id);
												}
											}
									>flash card
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		category: state.category.questions,
		loading: state.category.loading,
		error: state.category.error
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getCategoryQuestions, selectedQuestion, getAnswers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
