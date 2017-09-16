import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { languageSelected } from '../../actions/language';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as question from '../../services/question';
import {LANGUAGE_ENGLISH} from '../../actions/actionsTypes';
import {LANGUAGE_SPANISH} from '../../actions/actionsTypes';
import {LANGUAGE_CHINESE} from '../../actions/actionsTypes';
import '../../styles/Main.css';


class Question extends Component {
	componentWillMount(){
		const {questionObj} = this.props;
		question.getQuestion(6);
	}

	render() {
		const {question, language, languageSelected} = this.props;
		const selectedQuestion = languageSelected === LANGUAGE_SPANISH
			? question.q_spanish
			: languageSelected === LANGUAGE_CHINESE
				? question.q_chinese
				: question.q_english;
		return (
			<div className="container-fluid">
				<div className="card">
					<div className="card-header">
						<h3 className="pull-left">{question.category}</h3>
						<div className="dropdown">
							<button
								className="btn language-btn dropdown-toggle pull-right"
								type="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Language
							</button>
							<div className="dropdown-menu language-drop-down"
								 aria-labelledby="dropdownMenubutton">
								<button className="dropdown-item white-link"
										type="button"
										onClick={() => languageSelected(LANGUAGE_ENGLISH)}>
									English
								</button>
								<button className="dropdown-item white-link"
										type="button"
										onClick={() => languageSelected(LANGUAGE_SPANISH)}>
									Spanish
								</button>
								<button className="dropdown-item white-link"
										type="button"
										onClick={() => languageSelected(LANGUAGE_CHINESE)}>
									Chinese
								</button>
							</div>
						</div>
					</div>
					<div className="card-body">
						<h4>{selectedQuestion}</h4>
					</div>
				</div>
			</div>
		);
	}
}

Question.propTypes = {
	questionObj: PropTypes.object,
	language: PropTypes.string,
	languageUpdate: PropTypes.func,
};

function mapStateToProps(state) {
	return {
		question: state.question.selectedQuestion,
		language: state.language.languageSelected
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({languageSelected}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
