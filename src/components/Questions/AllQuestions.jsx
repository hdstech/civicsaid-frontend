import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Main.css';

export default class AllQuestions extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>All Questions</h1>
            </div>
        )
    }
}