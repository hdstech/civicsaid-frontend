import React, {Component} from 'react';
import Question from '../../containers/Question';
import Answers from '../../containers/Answers';
import '../../styles/Main.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {languageSelected} from '../../actions/language';

class FlashCard extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Question/>
				<br/>
				<Answers/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedQuestion: state.question.selectedQuestion,
	}
}

export default connect(mapStateToProps)(FlashCard);
