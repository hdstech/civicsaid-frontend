import React, { Component } from 'react';
import { languageSelected } from '../../actions/language';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LANGUAGE_ENGLISH } from '../../actions/actionsTypes';
import { LANGUAGE_SPANISH } from '../../actions/actionsTypes';
import { LANGUAGE_CHINESE } from '../../actions/actionsTypes';
import '../../styles/Main.css';


export class Question extends Component {
	render() {
		const {question, selectedLanguage, languageSelected} = this.props;
		let selectedQuestion = selectedLanguage;
		switch (selectedQuestion) {
			case LANGUAGE_SPANISH:
				selectedQuestion = question.q_spanish;
				break;
			case LANGUAGE_CHINESE:
				selectedQuestion = question.q_chinese;
				break;
			default:
				selectedQuestion = question.q_english;
				break;
		}
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

function mapStateToProps(state) {
	return {
		question: state.question.selectedQuestion,
		selectedLanguage: state.language.selectedLanguage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({languageSelected}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
