import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <nav className="nav justify-content-center">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/all-questions">All Questions</Link>
                        <Link className="nav-link" to="/question">Single Question</Link>
                    </nav>
                </div>
            </div>

        )
    }
}
