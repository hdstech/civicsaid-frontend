import React, {Component} from 'react';
import Toggle from 'material-ui/Switch';
import {Collapse} from 'reactstrap';
import {getAnswers} from '../../actions/answers';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LANGUAGE_CHINESE, LANGUAGE_SPANISH} from '../../actions/actionsTypes';
import '../../styles/Main.css';

class Answers extends Component {
	constructor(props) {
		super(props);
		this.toggleAnswer = this.toggleAnswer.bind(this);
		this.state = {
			collapse: false
		};
	}

	toggleAnswer() {
		this.setState({collapse: !this.state.collapse});
	}

	render() {
		const {answers, selectedLanguage} = this.props;
		return (
			<div className="container-fluid">
				<div className="card">
					<div className="card-header">
						<h3>Show Answer<Toggle onClick={this.toggleAnswer}/></h3>
					</div>
					<Collapse isOpen={this.state.collapse}>
						<div className="card-body">
							{answers.map((answer, i) => (
								<div key={i}>
									<li className="card-text-size">
										{selectedLanguage === LANGUAGE_SPANISH
											? answer.a_spanish
											: selectedLanguage ===
											LANGUAGE_CHINESE
												? answer.a_chinese
												: answer.a_english}
									</li>
								</div>
							))}
						</div>
					</Collapse>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		answers: state.answers.answers,
		question: state.question.selectedQuestion,
		selectedLanguage: state.language.selectedLanguage,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getAnswers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
