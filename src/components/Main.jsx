import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import AllQuestions from './Questions/AllQuestions';
import SingleQuestion from './Questions/SingleQuestion';
import AmericanGovernment from './Categories/AmericanGovernment';
import AmericanHistory from './Categories/AmericanHistory';
import IntegratedCivics from './Categories/IntegratedCivics';
import Vocabulary from './Vocabulary/Vocabulary';
import Info from './InfoPage/Info';

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
                    <Route path='/american-government' component={AmericanGovernment}/>
                    <Route path='/american-history' component={AmericanHistory}/>
                    <Route path='/integrated-civics' component={IntegratedCivics}/>
                    <Route path='/vocabulary' component={Vocabulary}/>
                    <Route path='/additional-information' component={Info}/>
                </Switch>
            </div>
        )
    }
}