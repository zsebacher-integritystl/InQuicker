import React, { Component } from 'react'

export class CardTimes extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selected: ''
     };
  }
  
  getValue = (e) => {
    this.setState({
      selected: e.target.value
    });
  };

  render() {
    return (
      <div>
        <select onChange={this.getValue}>
          <option value=''>--None--</option>
          {this.props.times.map((x) => <option value={x}> {x}</option>)}
        </select>
        <div>
          <a href={this.props.url+'/?at='+this.state.selected} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Submit</a>
        </div>
      </div>
    )
  }
}

export default CardTimes
