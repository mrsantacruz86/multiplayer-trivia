import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ScoreCard from './ScoreCard';
import Question from './Question';
import { fetchQuestions, updateTimer } from '../actions/gameActions';
import seeds from '../utils/seeds';
// Styles
import './App.css';

const App = props => {
  // let countdown = setInterval(() => {
  //   this.props.updateTimer(this.props.timer - 1);
  // }, 1000);

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(updateTimer(10));
  }, []);

  const questions = useSelector(state => Object.values(state.game.questions));
  const timer = useSelector(state => state.game.timer);

  const dispatch = useDispatch();

  if (!questions) {
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
              <h2 className="display-4 rounded-circle bg--purple timer">{timer.counter}</h2>
            </div>
            <div className="col text-center">
              <ScoreCard playerName="Nelson Diaz" turn={true} score={5} />
            </div>
          </div>
        </div>
      </div>

      <Question question={questions[1]} />
      {/* <Question question={this.props.questions[0]} /> */}

      <footer className="footer fixed-bottom">
        <span> © Copyright 2019. Nelson Diaz</span>
        <button className="btn btn-dark btn-sm" onClick={() => seeds()}>
          Seeds!
        </button>
      </footer>
    </div>
  );
};

export default App;
