import React, { Component } from 'react';
import '../../styles/Main.css';

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Hello Friend</h1>
            </div>
        )
    }
}