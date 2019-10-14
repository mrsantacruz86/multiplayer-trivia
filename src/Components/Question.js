import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateTimer } from '../actions/gameActions';
const Question = props => {
  const onSelectChoice = choice => {
    if (choice.isRight) {
      alert('Corrrect!');
    } else {
      alert('Wrong!');
    }
  };

  const renderChoices = choices => {
    return choices.map((choice, i) => {
      return (
        <div
          className="list-group-item list-group-item-action"
          key={i}
          onClick={() => onSelectChoice(choice)}
        >
          {choice.text}
        </div>
      );
    });
  };

  const dispatch = useDispatch();
  const { question } = props;
  const counter = useSelector(state => state.game.timer.counter);

  // let countdown = setInterval(() => {
  //   dispatch(updateTimer(counter - 1));
  // }, 10000);

  if (!question) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-center">
      <div className="text-center">
        <h2 className="display-4 rounded-circle bg--purple timer">{counter}</h2>
      </div>
      <div className="question-title">{question.text}</div>
      <hr className="mb-5" />

      <div className="list-group choices">{renderChoices(question.choices)}</div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object
};

export default Question;
