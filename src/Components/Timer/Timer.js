import React, { Component } from 'react';
import './Timer.css';


class Timer extends Component {
  render() {
    return (
      <div className="timer">
          <h3>Time</h3>
          <h1>{this.props.time}</h1>
        </div>
    );
  }
}

export default Timer;
