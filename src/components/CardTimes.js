import React, { Component } from 'react'

export class CardTimes extends Component {

  render() {
    return (
      <div>
        <select>
          {this.props.times.map((x) => <option value={x}> {x}</option>)}
        </select>
        <div>
          <a href={this.props.url+'/?at='} className="btn btn-primary">Submit</a>
        </div>
      </div>
    )
  }
}

export default CardTimes
