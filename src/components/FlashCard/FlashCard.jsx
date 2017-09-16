import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Question from '../Questions/Question';
// import Question from '../../containers/Question';
import Answer from "../Answers/Answer";
import '../../styles/Main.css';

export default class FlashCard extends Component {

    constructor(props) {
        super(props);
		this.switchLanguage = this.switchLanguage.bind(this);
        this.state = {
            question: {},
			answer: [],
			languageSelected: '',
        }
    }

    componentWillMount() {
        if ('match' in this.props && 'id' in this.props.match.params){
			this.getSingleQuestion(this.props.match.params.id);
			this.getAnswer(this.props.match.params.id);
		}
        else
            throw new Error('You must provide either an ID in props.match, or a question object');
    }

	componentDidUpdate(prevProps, prevState) {
		if (this.state.languageSelected !== prevState.languageSelected ) {
			this.setState({ languageSelected: this.state.languageSelected });
		}
	}

    getSingleQuestion(id) {
        axios.get(`/questions/show-question/${id}`)
            .then((response) => {
                this.setState({question: response.data.question});
            })
            .catch(error => {
                console.log(error);
            });
    }

    getAnswer(id) {
    	axios.get(`/answers/show-answers/${id}`)
			.then((response) => {
    			this.setState({
					answer: [...response.data.question.answers]
    			})
			})
			.catch(error => {
				console.log(error)
			});
	}

	switchLanguage(language) {
		this.setState({
			languageSelected: language,
		});
	}

    render() {
    	let language = this.state.languageSelected;
        return (
            <div className="container-fluid">
                <Question questionObj={this.state.question} language={language} languageUpdate={this.switchLanguage}/>
                <br/>
                <Answer answerArray={this.state.answer} language={language}/>
            </div>
        )
    }
}

FlashCard.propTypes = {
    question: PropTypes.object
};
