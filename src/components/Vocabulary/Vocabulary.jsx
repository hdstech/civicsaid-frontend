import React, { Component } from 'react';
import '../../styles/Main.css';
import './vocabulary.css';
import $ from 'jquery';

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

componentDidMount() {
   $(window).resize( () => { return this.setState({ windowWidth: window.screen.width }) } );
}

componentWillMount() {
    $(window).resize( () => ( this.setState({ windowWidth: window.screen.width }) ) )
}
    render() {
        let width = this.state.windowWidth;
        let loadTableHeaders = this.state.writingVocabulary.map((header, index) => {
            return ( <th key={index}> {header.heading} </th> )
        })
        let loadTableContent = this.state.writingVocabulary.map((info, index) => {
            let rows = []
                rows.push(
                      <td>
                        <ul className="list-group">
                            { info.content.map((list, index) => { return <li key={index} className="list-group-item">{list}</li> }) }
                        </ul>
                      </td> 
                )            
            return rows
        })
        
        let loadResponsiveContent = this.state.writingVocabulary.map((header, index) => {
            let tabs = [];
            tabs.push(
                // return(
                <div>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a key={index} className="nav-link active" id={header.heading +'-tab'} data-toggle="pill" href={header.heading} role="tab" aria-controls="v-pills-home" aria-selected="true">{header.heading}</a>
                    </div>
                    <div className="tab-pane fade show active" id={header.heading} role="tabpanel" aria-labelledby={`${header.heading}-tab`}>
                    {header.content.map((content, index) => {
                        return( <ul className="list-group" key={index}>
                                    <li key={index} className="list-group-item">{content}</li>
                                </ul>
                        )              
                    })}
                </div>
                </div>
            )
            return tabs;
        })

        let loading = this.state.writingVocabulary.map((header, index) => {
            let href = header.heading.replace(/[\s()-]+/gi, '');
            return (
                <a key={index} className="nav-link" id={href +'-tab'} data-toggle="pill" href={'#'+href} role="tab" aria-controls="v-pills-home" aria-selected="false">{header.heading}</a>
            )
        })

        let loader2 = this.state.writingVocabulary.map((header, index) => {
            let href = header.heading.replace(/[\s()-]+/gi, '');
            return (
                <div className="tab-pane fade" id={href} role="tabpanel" aria-labelledby={`${href}-tab`} key={index}>
                <ul className="list-group" key={index}>
                    {header.content.map((content, index) => {
                    return( 
                                <li key={index} className="list-group-item">{content}</li>
                            )}
                        )}
                    </ul>
                </div>    
            )
        })

        let cards = this.state.writingVocabulary.map((header, index) => {
            return (
                <div key={index} className="col-sm-6 mb-5">
                    <div className="card">
                        <div className="card-header">
                            {header.heading}
                        </div>
                        <div className="card-body">
                            <ul className="list-group" key={index}>
                            {header.content.map((content, index) => {
                            return( 
                                    <li key={index} className="list-group-item">{content}</li>
                                )}
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })
        {/*return (
            <div className="container-fluid">
                    {(width > 768) &&
                    <table className="table">
                        <thead className="thead-inverse">
                            <tr>
                                {loadTableHeaders}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {loadTableContent}
                            </tr>
                        </tbody>
                    </table>
                    }
                    {(width <= 768) &&
                        <div className="d-flex">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {loading}
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                                {loader2}
                            </div>
                        </div>
                    }
            </div>
        )*/}

        return (
            <div className='row d-flex flex-wrap' >
                {cards}
            </div>
        )
    }
}