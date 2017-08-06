import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';

export default class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="footer">
                <h1>Footer down here -_-</h1>
            </div>
        )
    }
}