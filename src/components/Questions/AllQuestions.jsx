import React, {Component} from 'react';
import '../../styles/Main.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';

export default class AllQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
        }
    }

    componentWillMount() {
        this.getAllQuestions();
    }

    getAllQuestions() {
        axios.get(`/questions/all-questions`)
            .then((response) => {
                this.setState({questions: response.data.questions});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let questions = this.state.questions;
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
                                <Link to={`question/${questions.id}`}>
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