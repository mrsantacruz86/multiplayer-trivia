import React from "react";
import PropTypes from "prop-types";

const Question = props => {
  const renderChoices = choices => {
    if (!choices) {
      return (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return choices.map(choise => {
      return (
        <a href="#" className="list-group-item list-group-item-action">
          {choise.text}
        </a>
      );
    });
  };

  const { question } = props;
  return (
    <div className="container text-center">
      <div className="question-title">
        <span>Is this a sample question?</span>
      </div>
      <hr />

      <div className="list-group">{renderChoices(question.choices)}</div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object
};

export default Question;
