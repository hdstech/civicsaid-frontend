import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Question extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3>{this.props.questionObj.category}</h3>
                    </div>
                    <div className="card-block">
                        <h4>{this.props.questionObj.q_english}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

Question.propTypes = {
    questionObj: PropTypes.object
};