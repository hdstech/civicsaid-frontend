import React, {Component} from 'react';
import {getCategoryQuestions, categorySelection} from '../../actions/category';
import {selectedQuestionFetched} from '../../actions/question';
import {getAnswers} from '../../actions/answers';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import '../../styles/Main.css';

class Category extends Component {
	componentWillMount() {
		const {getCategoryQuestions, categorySelection} = this.props;
		categorySelection(this.props.match.params.category);
		getCategoryQuestions(this.props.match.params.category);
	}

	render() {
		const {categoryQuestions, selectedQuestionFetched, getAnswers} = this.props;
		return (
			<div className="container-fluid">
				{categoryQuestions.map((categoryQuestion, i) => (
					<div key={i}>
						<div className="container-fluid">
							<div className="card">
								<div className="card-header">
									<h3>{categoryQuestion.category}</h3>
								</div>
								<div className="card-body">
									<h4 className="card-text">{categoryQuestion.q_english}</h4>
								</div>
								<Link to={`flash-card/${categoryQuestion.id}`}>
									<button className="btn flash-card-btn"
											onClick={() => {
												selectedQuestionFetched(
													categoryQuestion.id);
												getAnswers(categoryQuestion.id);
											}
											}
									>flash card
									</button>
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
		categoryQuestions: state.category.questions,
		selectedCategory: state.category.selectedCategory,
		loading: state.category.loading,
		error: state.category.error,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getCategoryQuestions,
		categorySelection,
		selectedQuestionFetched,
		getAnswers,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
