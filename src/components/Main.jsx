import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import AllQuestions from './Questions/AllQuestions';
import SingleQuestion from './Questions/SingleQuestion';

export default class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/all-questions' component={AllQuestions} />
                    <Route path='/question' component={SingleQuestion} />
                </Switch>
            </div>
        )
    }
}