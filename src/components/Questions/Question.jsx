import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			languageSelected: '',
		}
	}

	componentWillMount() {
		this.setState({
			questions: this.props.questionObj,
			languageSelected: this.props.language,
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			questions: nextProps.questionObj,
			languageSelected: this.props.language,
		});
	}

    render() {
	    let question = this.state.questions;
		let language = this.state.languageSelected;
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3>{question.category}</h3>
                    </div>
                    <div className="card-block">
                        <h4>
                            {
                                language === 'spanish' ? question.q_spanish
                                    : language === 'chinese' ? question.q_chinese
                                    : question.q_english
                            }
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

Question.propTypes = {
    questionObj: PropTypes.object,
	language: PropTypes.string,
};