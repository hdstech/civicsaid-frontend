import React, { Component } from 'react';
import '../../styles/Main.css';
import StudyCard from '../Controls/Card/Card';

export default class Vocabulary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writingVocabulary: [
                {
                    heading: 'People',
                    content: ['Adams', 'Lincoln', 'Washington']
                },
                {
                    heading: 'Civics',
                    content: ['American Indians', 'capital', 'citizens', 'Civil War', 'Congress', 'Father of Our Country', 'flag', 'free', 'freedom of speech', 'President', 'right', 'Senators', 'state/states', 'White House']
                },
                {
                    heading: 'Places',
                    content:['Alaska', 'California', 'Canada', 'Delaware', 'Mexico', 'New York City', 'United States', 'Washington', 'Washington, D.C.']
                },
                {
                    heading: 'Months',
                    content: ['February', 'May', 'June', 'July', 'September', 'October', 'November']
                },
                {
                    heading: 'Holidays',
                    content: ["President's", 'Memorial Day', 'Flag Day', 'Independence Day', 'Labor Day', 'Columbus Day', 'Thanksgiving']
                },
                {
                    heading: 'Verbs',
                    content: ['can', 'come', 'elect', 'have/has', 'is/was/be', 'lives/lived', 'meets', 'pay', 'vote', 'want']
                },
                {
                    heading: 'Other (Function)',
                    content: ['and', 'during', 'for', 'here', 'in', 'of', 'on', 'the', 'to', 'we']
                },
                {
                    heading: 'Other (Content)',
                    content: ['blue', 'dollar bill', 'fifty/50', 'first', 'largest', 'most', 'north', 'one', 'one hundred', 'people', 'red', 'second', 'south', 'taxes', 'white']
                }
            ],
            windowWidth: ''        
        }
    }

    render() {

        return (            
            <div>
                <StudyCard data={this.state.writingVocabulary} />
            </div>
        )
    }
}