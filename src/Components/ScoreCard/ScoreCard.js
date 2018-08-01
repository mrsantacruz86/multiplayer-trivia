import React, { Component } from 'react';
import './ScoreCard.css';


class ScoreCard extends Component {
  render() {
    return (
        <div className="score-card-body">
          <h1>{this.props.teamName}</h1>
          <h3>{this.props.score}</h3>
        </div>
    );
  }
}

export default ScoreCard;
