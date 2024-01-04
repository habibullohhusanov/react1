import React, { Component } from 'react'

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  plus() {
    this.setState({ count: this.state.count + 1 });
  }
  minus() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.minus}>MINUS</button>
        <button onClick={this.plus}>PLUS</button>
      </div>
    )
  }
}

export default ClassCounter