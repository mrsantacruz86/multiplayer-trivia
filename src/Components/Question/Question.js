import React, { Component } from 'react';
import './Question.css';


class Question extends Component {
  constructor(props) {
    super(props);
    this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    this.state = {
    }
  }

  handleSelectAnswer(answer) {
    const rightAnswer = this.props.curQuestion.choices.filter(item => (item.right))[0]
    if (answer.right) {
      alert(`The Answer is correct:\n "${rightAnswer.text}"`);
      // console.log(answer.text)
    } else {
      alert(`Wrong!!!\n The Right answer is: "${rightAnswer.text}"`);
      // console.log(rightAnswer.text)
    }
  }

  render() {
    const curQuestion = this.props.curQuestion;
    return (
      <div className="question">
        <h2 className="question-text">{curQuestion.text}</h2>
        <ol className="list-group">
          {
            curQuestion.choices.map((item, id) => (
              <li className="choice list-group-item list-group-item-action list-group-item-primary"
                key={id}
                onClick={e => this.handleSelectAnswer(item)}
              >
                <h3>{item.text}</h3>

              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default Question;
