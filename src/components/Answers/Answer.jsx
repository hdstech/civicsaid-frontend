import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Answer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: [],
			languageSelected: '',
		}
	}

	componentWillMount() {
		this.setState({
			answers: [...this.props.answerArray],
			languageSelected: this.props.language,
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			answers: [...nextProps.answerArray],
			languageSelected: this.props.language,
		});
	}

	render() {
		let answers = this.state.answers;
		let language = this.state.languageSelected;
		return (
			<div className="container-fluid">
				<div className="card">
					<div className="card-block">
						{answers.map(answers =>
							<div key={answers.id}>
								<h4>
									<li>
										{
											language === 'spanish' ? answers.a_spanish
												: language === 'chinese' ? answers.a_chinese
												: answers.a_english
										}
									</li>
								</h4>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}

Answer.propTypes = {
	answerArray: PropTypes.array,
	language: PropTypes.string,
};