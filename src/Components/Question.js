import React from "react";
import PropTypes from "prop-types";

const Question = props => {
  const renderChoices = choices => {
    return choices.map((choice, i) => {
      return (
        <a href="#" className="list-group-item list-group-item-action" key={i}>
          {choice}
        </a>
      );
    });
  };

  const { question } = props;

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
