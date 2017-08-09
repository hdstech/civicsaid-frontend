import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Question from '../Questions/Question';
import '../../styles/Main.css';

export default class FlashCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: {},
        }
    }

    componentWillMount() {
        if ('match' in this.props && 'id' in this.props.match.params)
            this.getSingleQuestion(this.props.match.params.id);
        else if ('questions' in this.props)
            this.setState({
                question: {},
            });
        else
            throw new Error('You must provide either an ID in props.match, or a question object');
    }

    getSingleQuestion(id) {
        axios.get(`/questions/show-question/${id}`)
            .then((response) => {
                this.setState({question: response.data.question});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <Question questionObj={this.state.question}/>
            </div>
        )
    }
}

FlashCard.propTypes = {
    question: PropTypes.object
};