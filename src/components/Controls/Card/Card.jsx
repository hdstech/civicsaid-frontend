import React, { Component } from 'react'
import './card.css';

export default class StudyCard extends Component {
  render() {
    let cards = this.props.data.map((header, index) => {
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
    return (
      <div className='row d-flex flex-wrap' >
        {cards}
      </div>
    )
  }
}
