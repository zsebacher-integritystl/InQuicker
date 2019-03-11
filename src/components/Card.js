import React, { Component } from 'react';
import CardTimes from './CardTimes';

export default class Card extends Component {
  

  render() {
    return (
      <div>
        <h4 className='card-title'>{this.props.card.name}</h4>
        <div className='card-text'>
            <p>{this.props.card.facility}</p>
            <p>{this.props.card.service}</p>
            <CardTimes times={this.props.card.availabletimes} url={this.props.card.regisUrl} />
        </div>
      </div>
    )
  }
}
