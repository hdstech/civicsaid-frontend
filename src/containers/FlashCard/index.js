import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from '../../containers/Question';
import '../../styles/Main.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {languageSelected} from '../../actions/language';

class FlashCard extends Component {
	render() {
		const {selectedQuestion, languageSelected} = this.props;
		return (
			<div className="container-fluid">
				<Question questionObj={selectedQuestion} language={languageSelected} languageUpdate={languageSelected}/>
				<br/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedQuestion: state.question.selectedQuestion,
		languageSelected: state.language.languageSelected
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({languageSelected}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FlashCard);
