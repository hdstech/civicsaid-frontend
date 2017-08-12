import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';
import '../../styles/Main.css';

export default class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
        };
    }

    componentWillMount() {
        this.getAllQuestions(this.props.match.params.category);
    }

    componentWillReceiveProps(nextProps) {
        this.getAllQuestions(nextProps.match.params.category);
    }

    getAllQuestions(category) {
        axios.get(`/questions/show-category/${category}`)
            .then((response) => {
                this.setState({
                    questions: [...response.data.questions]
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const questions = this.state.questions;
        return (
            <div className="container-fluid">
                {questions.map(questions =>
                    <div key={questions.id}>
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-header">
                                    <h3>{questions.category}</h3>
                                </div>
                                <div className="card-block">
                                    <h4>{questions.q_english}</h4>
                                </div>
                                <Link to={`/flash-card/${questions.id}`}>
                                    <Button className="flash-card-btn" color="danger">flash card</Button>
                                </Link>
                            </div>
                            <br/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

Category.propTypes = {
    match: PropTypes.object.isRequired,
};
