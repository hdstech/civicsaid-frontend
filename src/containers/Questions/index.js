import React, { Component } from 'react';
import * as questions from '../../actions/questions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';

class Questions extends Component {
	componentWillMount(){
		this.props.getQuestions();
	}
	render() {
		return (
			<div className="container-fluid">
				{this.props.questions.map((questions, i) => (
					<div key={i}>
						<div className="container-fluid">
							<div className="card">
								<div className="card-header">
									<h3>{questions.category}</h3>
								</div>
								<div className="card-block">
									<h4>{questions.q_english}</h4>
								</div>
								<Link to={`flash-card/${questions.id}`}>
									<button className="btn flash-card-btn">flash card</button>
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

export default connect(mapStateToProps, {getQuestions: questions.getQuestions})(Questions)


