import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Main.css';

export default class SingleQuestion extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Single Question</h1>
            </div>
        )
    }
}