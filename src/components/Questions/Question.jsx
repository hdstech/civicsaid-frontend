import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Question extends Component {
	constructor(props) {
		super(props);
		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.state = {
			questions: [],
			languageSelected: '',
			dropdownOpen: false,
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

	toggleDropDown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

    render() {
	    let question = this.state.questions;
		let language = this.state.languageSelected;
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="pull-left">{question.category}</h3>
						<Dropdown className="pull-right" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
							<DropdownToggle className="language-btn" caret>
								Language
							</DropdownToggle>
							<DropdownMenu className="language-drop-down">
								<DropdownItem onClick={() => this.props.languageUpdate('english')}><span className="white-link">English</span></DropdownItem>
								<DropdownItem onClick={() => this.props.languageUpdate('spanish')}><span className="white-link">Spanish</span></DropdownItem>
								<DropdownItem onClick={() => this.props.languageUpdate('chinese')}><span className="white-link">Chinese</span></DropdownItem>
							</DropdownMenu>
						</Dropdown>
						<div className="clearfix"/>
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
	languageUpdate: PropTypes.func,
};