import React, { Component } from 'react'
import Card from './Card';

export default class Cards extends Component {

  

  render() {
    return this.props.data.map((x) => (
        <div className='card-body'><Card card={x} /></div>
    ));
  }
}


