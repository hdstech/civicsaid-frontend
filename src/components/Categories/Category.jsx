import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';
import '../../styles/Main.css';

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            index: 0,
            currentCategory: '',
        }
    }

    componentWillMount() {
        if ('match' in this.props && 'category' in this.props.match.params)
            this.getAllQuestions(this.props.match.params.category);
        else if ('questions' in this.props)
            this.setState({
                questions: {},
            });
        else
            throw new Error('You must provide either an ID in props.match, or a question object');
    }

    getAllQuestions(category) {
        axios.get(`/questions/show-category/${category}`)
            .then((response) => {
                this.setState({
                    currentCategory: category,
                    questions: [...this.state.questions, ...response.data.questions]
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.category !== this.state.currentCategory){
            window.location.reload();
        }
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