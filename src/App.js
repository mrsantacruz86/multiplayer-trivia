import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './Components/Game';
import ScoreCard from './Components/ScoreCard';
import Timer from './Components/Timer';
import loadFromDB from './utils/API';
import { loadQuestions } from './actions/gameActions';
// import bq from './BibleQuestions.json';


class App extends Component {
  componentDidMount() {
    loadFromDB((snapshot) => {
      this.props.load(snapshot)
    });
  }
  curQuestion() {
    return this.state.questions[Math.floor(Math.random() * this.state.questions.length)]
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">

          <section className="row">
            <div className="col-sm">
              <div className="p-3 mb-2 bg-danger text-white justify-content-center">
                {/* <ScoreCard
                  teamName="Red"
                  score={this.state.scoreRed}
                /> */}
              </div>
            </div>

            <div className="col-sm">
              <div className="p-3 mb-2 bg-warning text-dark">
                {/* <Timer
                  time={this.state.time}
                  /> */}
              </div>
            </div>

            <div className="col-sm">
              <div className="p-3 mb-2 bg-primary text-white">
                {/* <ScoreCard
                  teamName="Blue"
                  score={this.state.scoreBlue}
                  /> */}
              </div>
            </div>
          </section>

          <section className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* <Game
                question={this.curQuestion()}
              /> */}
            </div>

          </section>

        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state.game;
const mapDispatchToProps = (dispatch) => {
  return {
    load: q => dispatch(loadQuestions(q))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
