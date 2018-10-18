import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import Question from '../Question';
import Alert from '../Alert';
import randonSelect from '../../utils'
// import { start } from 'repl';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreRed: 0,
      scoreBlue: 0,
      maxScore: 10,
      turn: randonSelect(["Blue", "Red"]),
      play: true
    }
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(correct) {
    var team = this.state.turn;
    var score = this.state[`score${team}`]

    if (team === "Blue") {
      if (correct) {
        // score += 1;
        this.props.scoreBlue(score + 1);
      }
      team = "Red"
    } else {
      if (correct) {
        this.props.scoreRed(score + 1);
      }
      team = "Blue"
    }
    this.setState({
      [`score${this.state.turn}`]:score,
      turn: team
    });
    this.checkForWinner();
  }

checkForWinner() {
  let winner = "";
  if (this.state.scoreBlue >= 10) {
    winner = "Blue";
    alert(`The Winner is: Team ${winner} ${this.state.scoreBlue} - ${this.state.scoreRed}`)
    this.resetGame();
  } else if (this.state.scoreRed >= 10) {
    winner = "Red";
    alert(`The Winner is: Team ${winner} ${this.state.scoreRed} - ${this.state.scoreBlue}`)
    this.resetGame()
  } else{
    console.log("The Show must continue");
  }
}


componentDidMount(){
  this.props.onCountDown;
}

render() {
  return (
    <div className="game">
      <h3 className="turn-to-play">{`It's ${this.state.turn}'s turn.`}</h3> <br />
        <Question
        curQuestion={this.props.question}
        time
        />

    </div>
  );
}
}
const mapStateToProps = state => {
  return {...state}
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);