import React, { Component } from 'react';
import './App.css';
import Game from './Components/Game';
import ScoreCard from './Components/ScoreCard';
import Timer from './Components/Timer';
import bq from './BibleQuestions.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: bq,
      scoreBlue:0,
      scoreRed:0,
      time:30
    }
  }
  curQuestion() {
    return this.state.questions[Math.floor(Math.random() * this.state.questions.length)]
  }
  removeUsedQuestion() {
    const updatedList = this.state.questions.filter(item => (item !== this.curQuestion));
    this.setState({
      questions: updatedList,
    });
  }

  updateScores(scores){
    this.setState({
      scoreBlue: scores.scoreBlue,
      scoreRed: scores.scoreRed
    })
  }
  handleCountDown = () => {
    const countDownTimer = setInterval(() => {
      let t = this.state.time;
      if (t >= 1) {
        this.setState({ time: t - 1 });
      } else {
        clearInterval(countDownTimer);
        alert("You have ran out of time");
      }
    }, 1000);
  }

  render() {
    // var curQuestion = this.state.questions[Math.floor(Math.random() * this.state.questions.length)]
    return (
      <div className="App">
        <div className="container-fluid">

          <section className="row">
            <div className="col-sm">
              <div className="p-3 mb-2 bg-danger text-white justify-content-center">
                <ScoreCard
                  teamName="Red"
                  score={this.state.scoreRed}
                />
              </div>
            </div>

            <div className="col-sm">
              <div className="p-3 mb-2 bg-warning text-dark">
                <Timer
                  time={this.state.time}
                  />
              </div>
            </div>

            <div className="col-sm">
              <div className="p-3 mb-2 bg-primary text-white">
                <ScoreCard
                  teamName="Blue"
                  score={this.state.scoreBlue}
                  />
              </div>
            </div>
          </section>

          <section className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Game
                question={this.curQuestion()}
                scores={this.updateScores}
                onCountDown={this.handleCountDown}
                removeUsedQuestion={this.removeUsedQuestion}
              />
              {this.handleCountDown}
            </div>

          </section>

        </div>
      </div>
    );
  }
}

export default App;
