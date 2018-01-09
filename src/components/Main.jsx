import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Questions from '../containers/Questions';
import FlashCard from './FlashCard/index';
import Category from '../containers/Category';
import Vocabulary from './Vocabulary/Vocabulary';
import Info from './InfoPage/Info';

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/all-questions' component={Questions} />
                    <Route path='/flash-card/:id' component={FlashCard} />
                    <Route path='/category/:category' component={Category}/>
                    <Route path='/vocabulary' component={Vocabulary}/>
                    <Route path='/additional-information' component={Info}/>
                </Switch>
            </div>
        )
    }
}
