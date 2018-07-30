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
    const rightAnswer = this.props.q.choices.filter(item => (item.right))[0]
    if (answer.right) {
      alert(`The Answer is correct:\n "${rightAnswer.text}"`);
      // console.log(answer.text)
    } else {
      alert(`Wrong!!!\n The Right answer is: "${rightAnswer.text}"`);
      // console.log(rightAnswer.text)
    }
  }

  render() {
    const curQuestion = this.props.q;
    return (
      <div className="game">
        <h1>{curQuestion.text}</h1>
        {
          curQuestion.choices.map((item, id) => (
            <p
              className="choice"
              key={id}
              isCorrect={item.right}
              onClick={e => this.handleSelectAnswer(item)}
            >
              {item.text}
            </p>
          ))
        }
      </div>
    );
  }
}

export default Question;
