import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ScoreCard from './ScoreCard';
import Question from './Question';
import { fetchQuestions } from '../actions/gameActions';
import seeds from '../utils/seeds';
// Styles
import './App.css';

const App = props => {
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const questions = useSelector(state => Object.values(state.game.questions));

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
