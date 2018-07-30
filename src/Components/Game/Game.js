import React, { Component } from 'react';
import './Game.css';
import Question from '../Question';
import Alert from '../Alert';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state ={
      scoreRed:0,
      scoreBlue:0,
      maxScore:10,
      turn:"Blue",
      play: true
    }
  }

  handleResults(){

  }

  render() {
    const list = this.props.questions;
    const curQuestion = list[Math.floor(Math.random() * list.length)];
    return (
      <div className="game">
        {this.state.play ? 
        <Question 
          q={curQuestion}
        /> 
        : 
        <Alert 
          removeQuestion={this.props.usedQuestion(curQuestion.id)}
        />}
      </div>
    );
  }
}

export default Game;
