import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Answer extends Component {
    render() {
    	let answers = this.props.answerArray;
        return (
			<div className="container-fluid">
				<div className="card">
					<div className="card-block">
						{answers.map(answers =>
							<div key={answers.id}>
								<h4><li>{answers.a_english}</li></h4>
							</div>
						)}
					</div>
				</div>
			</div>
        )
    }
}

Answer.propTypes = {
	answerArray: PropTypes.array
};