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
      questions: bq
    }
  }
  curQuestion() {
    return this.state.questions[Math.floor(Math.random() * this.state.questions.length)]
  }
  removeUsedQuestion() {
    const updatedList = this.state.questions.filter(item => (item !== this.state.curQuestion));
    this.setState({
      questions: updatedList,
    });
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
                  score="0"
                />
              </div>
            </div>

            <div className="col-sm">
              <div className="p-3 mb-2 bg-warning text-dark">
                <Timer
                  time="10"
                />
              </div>
            </div>

            <div className="col-sm">
              <div className="p-3 mb-2 bg-primary text-white">
                <ScoreCard
                  teamName="Blue"
                  score="0"
                />
              </div>
            </div>
          </section>

          <section className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Game question={this.curQuestion()} removeUsedQuestion={this.removeUsedQuestion} />
            </div>

          </section>

        </div>
      </div>
    );
  }
}

export default App;
