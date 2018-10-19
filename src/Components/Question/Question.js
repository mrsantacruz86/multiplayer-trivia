import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Question.css';


class Question extends Component {

  handleSelectAnswer = (answer) =>  {
    const rightAnswer = this.props.game.selectedQuestion.choices.filter(item => (item.right))[0]
    if (answer.right) {
      alert(`The Answer is correct:\n "${rightAnswer.text}"`);
      // console.log(answer.text)
    } else {
      alert(`Wrong!!!\n The Right answer is: "${rightAnswer.text}"`);
      // console.log(rightAnswer.text)
    }
  }

  render() {
    let question = this.props.game.selectedQuestion;
    return (
      <div className="question">
        <h2 className="question-text">{question.text}</h2>
        <ol className="list-group">
          {
            // this.props.game.selectedQuestion.choices.map((choice, id) => (
            //   <li className="choice list-group-item list-group-item-action list-group-item-primary"
            //     key={id}
            //     onClick={() => this.handleSelectAnswer(choice)}
            //   >
            //     <h3>{choice.text}</h3>

            //   </li>
            // ))
          }
        </ol>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);
