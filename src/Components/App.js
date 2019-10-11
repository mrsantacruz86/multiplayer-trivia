import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScoreCard from './ScoreCard';
import Question from './Question';
import { fetchQuestions, updateTimer } from '../actions';

// Styles
import './App.css';

class App extends Component {
  countdown = setInterval(() => {
    this.props.updateTimer(this.props.timer - 1);
  }, 1000);

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.updateTimer(10);
    // console.log(this.props.timer);
  }

  componentWillUpdate() {
    if (this.props.timer <= 1) {
      clearInterval(this.countdown);
    }
  }

  render() {
    if (!this.props.questions) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <ScoreCard playerName="Nelson Diaz" turn={true} score={5} />
              </div>
              <div className="col text-center">
                <h1 className="display-6">BIBLE TRIVIA</h1>
                <h2 className="display-4 rounded-circle bg--purple timer">{this.props.timer}</h2>
              </div>
              <div className="col text-center">
                <ScoreCard playerName="Nelson Diaz" turn={true} score={5} />
              </div>
            </div>
          </div>
        </div>

        <Question question={this.props.questions[1]} />
        {/* <Question question={this.props.questions[0]} /> */}

        <footer className="footer fixed-bottom">
          <span> © Copyright 2019. Nelson Diaz</span>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions),
    timer: state.timer.counter
  };
};

export default connect(
  mapStateToProps,
  { fetchQuestions, updateTimer }
)(App);
