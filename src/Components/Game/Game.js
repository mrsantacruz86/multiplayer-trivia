import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import Question from '../Question';
import Alert from '../Alert';
// import { start } from 'repl';

class Game extends Component {

  componentDidMount() {
    // this.props.onCountDown;
  }

  render() {
    return (
      <div className="game">
        <h3 className="turn-to-play">{`It's ${this.props.game.turn}'s turn.`}</h3> <br />
        <Question />

      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
}

export default connect(mapStateToProps)(Game);